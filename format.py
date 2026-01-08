
import json 



def extract_json_from_llm_output(text: str):
    """
    Extracts the first valid JSON object from a string.
    It finds the first '{' from the start and the last '}' from the end,
    then tries to parse the substring as JSON.

    Returns:
        dict or None: Parsed JSON dictionary if found and valid, else None.
    """
    try:
        start = text.find('{')
        end = text.rfind('}')
        if start == -1 or end == -1 or start >= end:
            return None
        
        json_str = text[start:end+1].strip()
        return json.loads(json_str)
    except json.JSONDecodeError as e:
        print(f"JSON decoding error: {e}")
        return None
    except Exception as e:
        print(f"Unexpected error: {e}")
        return None
    

t = """
Result: Here are the extracted results from Google and YouTube:

```json
{
  "google_recommendations": [
    "is bluecage dead",
    "is nel dead",
    "is odasaku dead",
    "isn't dead",
    "is y/n dead",
    "n in death note"
  ],
  "people_also_ask": [
    "Will n8n become obsolete?",
    "Is n8n growing?",
    "What is better than n8n?",
    "How old is n8n?"
  ],
  "youtube_recommendations": [
    "n8n explained",
    "n8n gaming",
    "n8n nodes",
    "n8n cloud"
  ]
}
```

These recommendations and questions were retrieved from the search suggestions and "People Also Ask" sections on Google, as well as the search suggestions on YouTube."""

print(extract_json_from_llm_output(t))