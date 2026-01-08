import requests
import json

# ---------------- API endpoint ----------------
url = "http://localhost:8000/analyze"

# ---------------- Request payload ----------------
avail = ["trending_content", "content_analysis", "influencer_analysis","ads_analysis","keyword_research"]
payload = {
    "query": "openai agents",
    "tags": ["influencer_analysis"],
}

# ---------------- Headers ----------------
headers = {
    "Content-Type": "application/json"
}

# ---------------- Make POST request ----------------
response = requests.post(url, headers=headers, data=json.dumps(payload))

# ---------------- Handle response ----------------
if response.status_code == 200:
    result = response.json()
    print("=== API Response ===")
    print(json.dumps(result, indent=2))
else:
    print(f"Error {response.status_code}: {response.text}")
