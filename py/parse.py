import json
import re

def parse_json_snippets(file_path):
    # Read the file content
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Find all JSON arrays in the content using regex
    # Looking for patterns that start with ```json[ and end with ]```
    json_pattern = r'```json\s*(\[[\s\S]*?\])\s*```'
    json_matches = re.findall(json_pattern, content)

    parsed_snippets = []

    # Parse each JSON array
    for i, json_str in enumerate(json_matches):
        try:
            # Parse the JSON string
            parsed_json = json.loads(json_str)
            parsed_snippets.append(parsed_json)
            print(f"Parsed JSON snippet {i+1}: {len(parsed_json)} elements")
        except json.JSONDecodeError as e:
            print(f"Error parsing JSON snippet {i+1}: {e}")
            # Include the problematic JSON string for debugging
            parsed_snippets.append({
                "snippet_id": i + 1,
                "error": str(e),
                "raw_content": json_str[:100] + "..." if len(json_str) > 100 else json_str
            })

    return parsed_snippets

def main():
    file_path = "outputs.txt"  # Update this with your actual file path
    snippets = parse_json_snippets(file_path)

    # Optionally, save the parsed snippets to a new JSON file
    with open("parsed_snippets.json", "w", encoding="utf-8") as outfile:
        json.dump(snippets, outfile, indent=2, ensure_ascii=False)
    print("Parsed snippets saved to 'parsed_snippets.json'")

if __name__ == "__main__":
    main()