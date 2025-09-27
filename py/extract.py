import json
import sys
import argparse

def main():
  parser = argparse.ArgumentParser(description='Extract outputs for a specific model')
  parser.add_argument('model', help='Model name to extract outputs for')
  args = parser.parse_args()

  try:
    with open('generations.json', 'r') as f:
      generations = json.load(f)
  except FileNotFoundError:
    print("Error: generations.json file not found", file=sys.stderr)
    sys.exit(1)
  except json.JSONDecodeError:
    print("Error: generations.json is not valid JSON", file=sys.stderr)
    sys.exit(1)

  extractions = []

  for gen in generations:
    if gen.get('model') == args.model:
      input_text = gen.get('input', '')
      output = gen.get('output', None)

      if input_text and output is not None:
        extractions.append([input_text, *output])

  try:
    with open('extractions.json', 'w') as f:
      json.dump(extractions, f, indent=2, ensure_ascii=False)
    print(f"Successfully extracted {len(extractions)} outputs for model '{args.model}'")
  except Exception as e:
    print(f"Error saving extractions.json: {e}", file=sys.stderr)
    sys.exit(1)

if __name__ == "__main__":
  main()
