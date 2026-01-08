import os
import requests
from dotenv import load_dotenv
from youtube_transcript_api import YouTubeTranscriptApi

def get_transcript(video_id):
    """Fetch transcript text for a given YouTube video ID"""
    ytt_api = YouTubeTranscriptApi()
    transcript_list = ytt_api.fetch(video_id)
    # print(transcript_list)
            # Join all transcript text into one string
    return " ".join([t.text for t in transcript_list])


load_dotenv()
API_KEY = ""

BASE_URL = "https://www.googleapis.com/youtube/v3"
def fetch_youtube(endpoint, params):
    params["key"] = API_KEY
    res = requests.get(f"{BASE_URL}/{endpoint}", params=params)
    res.raise_for_status()
    return res.json()

def search_videos(query, max_results=5):
    data = fetch_youtube("search", {
        "part": "snippet",
        "q": query,
        "type": "video",
        "maxResults": max_results
    })
    
    results = []
    for v in data.get("items", []):
        video_id = v["id"]["videoId"]
        transcript = get_transcript(video_id)
        
        results.append({
            "title": v["snippet"]["title"],
            "videoId": video_id,
            "channel": v["snippet"]["channelTitle"],
            "publishedAt": v["snippet"]["publishedAt"],
            "thumbnail": v["snippet"]["thumbnails"]["high"]["url"],
            "transcript": transcript
        })
    return results

def get_video_stats(video_ids):
    if not video_ids:
        return []
    data = fetch_youtube("videos", {
        "part": "statistics,snippet",
        "id": ",".join(video_ids)
    })
    return [
        {
            "title": v["snippet"]["title"],
            "views": v["statistics"].get("viewCount", 0),
            "likes": v["statistics"].get("likeCount", 0),
            "comments": v["statistics"].get("commentCount", 0),
            "channel": v["snippet"]["channelTitle"]
        }
        for v in data.get("items", [])
    ]



# Example usage
if __name__ == "__main__":
    results = search_videos("openai agents")
    for video in results:
        print(video["title"])
        print("Transcript:", video["transcript"][:200], "...\n")  # Print first 200 chars