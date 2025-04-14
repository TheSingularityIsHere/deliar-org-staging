#!/usr/bin/env python3

import argparse
import collections
import json
import os
import subprocess
import sys
import time

import llm_api


def main():
  # Set up argument parser
  parser = argparse.ArgumentParser(
      description='Generate reformulations using LLMs')
  parser.add_argument('model', choices=[
      'ollama-gemma3-4b',
      'ollama-gemma3-27b',
      'gemini-2.0-flash',
      'claude-3.7',
      'chatgpt-4o'
  ], help='Model to use for generation')

  args = parser.parse_args()

  # Map the single argument to provider and model_name
  if args.model.startswith('ollama-'):
    provider = 'ollama'
    model_name = args.model.replace('ollama-', '').replace('-', ':')
  elif args.model.startswith('gemini-'):
    provider = 'gemini'
    model_name = args.model
  elif args.model.startswith('claude-'):
    provider = 'anthropic'
    model_name = args.model
  elif args.model.startswith('chatgpt-'):
    provider = 'openai'
    model_name = args.model

  prompt = (
      'For each of the following string, reformulate it 5x (make sure that the '
      'reformulations are varied have a good flow - also make sure to keep any '
      'html tags intact) and return a single line JSON that has the format '
      '[new1, new2, new3, ...]\n\n'
  )

  print('http://localhost:8000/?static')
  print(
      'JSON.stringify([...document.querySelectorAll("p")].map(p => p.innerHTML))')
  print()
  print('Press Enter when ready to get clipboard content...')
  input()  # Wait for keypress

  try:
    # Get clipboard content using pbpaste (macOS) or xclip (Linux) or clip (Windows)
    if sys.platform == 'darwin':
      paragraphs = subprocess.check_output(['pbpaste']).decode('utf-8')
    elif sys.platform == 'linux':
      paragraphs = subprocess.check_output(
          ['xclip', '-selection', 'clipboard', '-o']).decode('utf-8')
    else:
      print(f"Unsupported platform: {sys.platform}")
      sys.exit(1)

    paragraphs = json.loads(paragraphs)
  except Exception as e:
    print(f"Error getting clipboard content: {e}", file=sys.stderr)
    sys.exit(1)

  print('got', len(paragraphs), 'paragraphs')

  previous = set()
  generations = []
  if os.path.exists('generations.json'):
    with open('generations.json', 'r') as f:
      generations = json.load(f)
    print('loaded', collections.Counter(g['model'] for g in generations).most_common(), 'generations')
    previous = {g['input'] for g in generations if g['model'] == args.model}
    for g in generations:
      if g['output'] is None:
        g['output'] = llm_api.try_parse_json(g['raw_output'])

  paragraphs = [p for p in paragraphs if p not in previous]
  print('after deduping:', len(paragraphs), 'paragraphs')

  for i, p in enumerate(paragraphs):
    print(f'Processing {i + 1}/{len(paragraphs)}')
    t0 = time.time()

    response = llm_api.query_provider(provider, model_name, prompt + p, stream=False)

    generation_time = time.time() - t0
    timestamp = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())

    parsed_response = llm_api.try_parse_json(response)
    if parsed_response is None:
      print(f"Warning: Could not parse response as JSON for paragraph {i+1}")

    # Create a record for this generation
    generation = {
        "input": p,
        "raw_output": response,
        "output": parsed_response,
        "model": args.model,
        "timestamp": timestamp,
        "generation_time": generation_time,
    }

    generations.append(generation)
    print(f'=> dt={generation_time:.1f}s')

    with open('generations.json', 'w') as f:
      json.dump(generations, f, indent=2)


if __name__ == "__main__":
  main()
