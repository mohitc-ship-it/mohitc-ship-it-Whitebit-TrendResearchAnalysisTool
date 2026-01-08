import requests

def get_reddit_posts(query, limit=5):
    url = f"https://www.reddit.com/search.json?q={query}&limit={limit}"
    headers = {"User-Agent": "Mozilla/5.0 (TrendIntelBot)"}
    res = requests.get(url, headers=headers)
    res.raise_for_status()
    data = res.json()

    return [
        {
            "title": p["data"]["title"],
            "subreddit": p["data"]["subreddit"],
            "upvotes": p["data"]["ups"],
            "author": p["data"]["author"],  # Reddit username
            "url": f"https://reddit.com{p['data']['permalink']}"  # Full post URL
        }
        for p in data.get("data", {}).get("children", [])
    ]

# Example usage
# posts = get_reddit_posts("openai", limit=3)
# for post in posts:
#     print(post)
