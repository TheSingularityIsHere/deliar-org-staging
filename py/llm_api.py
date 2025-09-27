#!/usr/bin/env python3

import json
import functools
import os
import re
import sys
import urllib.request
import urllib.error

@functools.cache
def _get_api_keys():
  # Load API keys from config file or environment variables
  openai_api_key = ""
  gemini_api_key = ""
  claude_api_key = ""

  # Try to load from config file first
  config_file = os.path.join(os.path.dirname(__file__), "api_keys.json")
  try:
    if os.path.exists(config_file):
      with open(config_file, "r") as f:
        config = json.load(f)
        openai_api_key = config.get("openai_api_key", "")
        gemini_api_key = config.get("gemini_api_key", "")
        claude_api_key = config.get("claude_api_key", "")
  except Exception as e:
    print(
        f"Warning: Could not load API keys from config file: {e}", file=sys.stderr)
    print("Create an api_keys.json file based on api_keys.json.example", file=sys.stderr)

  # Fall back to environment variables if keys are not set
  if not openai_api_key:
    openai_api_key = os.environ.get("OPENAI_API_KEY", "")
  if not gemini_api_key:
    gemini_api_key = os.environ.get("GEMINI_API_KEY", "")
  if not claude_api_key:
    claude_api_key = os.environ.get("CLAUDE_API_KEY", "")

  return openai_api_key, gemini_api_key, claude_api_key


def query_ollama(model_name, prompt, url="http://localhost:11434", stream=False):
  api_url = f"{url}/api/generate"

  data = {
      "model": model_name,
      "prompt": prompt,
      "stream": stream
  }

  request_data = json.dumps(data).encode('utf-8')

  request = urllib.request.Request(
      api_url,
      data=request_data,
      headers={
          'Content-Type': 'application/json'
      },
      method='POST'
  )

  try:
    with urllib.request.urlopen(request) as response:
      if stream:
        full_response = ""
        for line in response:
          if not line.strip():
            continue

          chunk = json.loads(line.decode('utf-8'))

          if 'response' in chunk:
            text_chunk = chunk['response']
            full_response += text_chunk
            print(text_chunk, end='', flush=True)

          if chunk.get('done', False):
            print()
            break

        return full_response
      else:
        response_data = json.loads(response.read().decode('utf-8'))
        return response_data.get('response', '')

  except urllib.error.URLError as e:
    print(f"Error connecting to Ollama: {e}", file=sys.stderr)
    if hasattr(e, 'reason'):
      print(f"Reason: {e.reason}", file=sys.stderr)
    if hasattr(e, 'code'):
      print(f"HTTP Error Code: {e.code}", file=sys.stderr)
    sys.exit(1)
  except json.JSONDecodeError:
    print("Error decoding response from Ollama", file=sys.stderr)
    sys.exit(1)


def query_openai(model_name, prompt, stream=False):
  import openai

  api_key = _get_api_keys()[0]

  openai.api_key = api_key

  try:
    response = openai.ChatCompletion.create(
        model=model_name,
        messages=[{"role": "user", "content": prompt}],
        stream=stream
    )

    if stream:
      full_response = ""
      for chunk in response:
        if chunk.choices and len(chunk.choices) > 0:
          content = chunk.choices[0].delta.get("content", "")
          if content:
            full_response += content
            print(content, end='', flush=True)
      print()
      return full_response
    else:
      return response.choices[0].message.content

  except Exception as e:
    print(f"Error connecting to OpenAI: {e}", file=sys.stderr)
    sys.exit(1)


def query_gemini(model_name, prompt, stream=False):
  import google.generativeai as genai

  api_key = _get_api_keys()[1]

  genai.configure(api_key=api_key)

  try:
    model = genai.GenerativeModel(model_name)

    if stream:
      full_response = ""
      response = model.generate_content(prompt, stream=True)
      for chunk in response:
        if hasattr(chunk, 'text'):
          text_chunk = chunk.text
          full_response += text_chunk
          print(text_chunk, end='', flush=True)
      print()
      return full_response
    else:
      response = model.generate_content(prompt)
      return response.text

  except Exception as e:
    print(f"Error connecting to Gemini: {e}", file=sys.stderr)
    sys.exit(1)


def query_claude(model_name, prompt, stream=False):
  import anthropic

  api_key = _get_api_keys()[2]

  client = anthropic.Anthropic(api_key=api_key)

  try:
    if stream:
      full_response = ""
      with client.messages.stream(
          model=model_name,
          messages=[{"role": "user", "content": prompt}],
          max_tokens=4096
      ) as stream:
        for text in stream.text_stream:
          full_response += text
          print(text, end='', flush=True)
      print()
      return full_response
    else:
      response = client.messages.create(
          model=model_name,
          messages=[{"role": "user", "content": prompt}],
          max_tokens=4096
      )
      return response.content[0].text

  except Exception as e:
    print(f"Error connecting to Claude: {e}", file=sys.stderr)
    sys.exit(1)


def query_provider(provider, model_name, prompt, stream=False):
  if provider == "ollama":
    return query_ollama(model_name, prompt, stream=stream)
  elif provider == "openai":
    return query_openai(model_name, prompt, stream=stream)
  elif provider == "gemini":
    return query_gemini(model_name, prompt, stream=stream)
  elif provider == "claude":
    return query_claude(model_name, prompt, stream=stream)
  else:
    raise RuntimeError(f"Unknown provider: {provider}")


EXTRACT_JSON_RE = re.compile(r"```.*?(?:json)?\n(.*)\n```", re.DOTALL)


def try_parse_json(text):
  m = EXTRACT_JSON_RE.match(text)
  if m:
    text = m.group(1)
  try:
    return json.loads(text)
  except json.JSONDecodeError:
    return None
