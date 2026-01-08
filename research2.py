from yt_api import search_videos, get_video_stats
from reddit import get_reddit_posts
from computerAgent import CAgent
import asyncio
from llm import ask
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
        return text
    except Exception as e:
        print(f"Unexpected error: {e}")
        return text

# def merge_data(query):
#     # Fetch YouTube videos and their stats
#     videos = search_videos(query, max_results=3)
#     video_ids = [v["videoId"] for v in videos]
#     video_stats = get_video_stats(video_ids)

#     yt_merged = {}

#     for video in videos:
#         title = video["title"]
#         # Find matching stats
#         stats = next((s for s in video_stats if s["title"] == title), {})
        
#         # Build prompt for OpenAI
#         prompt = f"""
#     You are a market analyst for online video content. 
#     Analyze the following video and provide reasoning why it is performing well and is among the top searches on this topic. 
#     Focus on understanding what worked on the market, including content, thumbnail, channel influence, and audience engagement. 
#     Provide suggestions and summary of what could be replicated for similar success.

#     Video Title: {title}
#     Channel: {video.get('channel')}
#     Thumbnail URL: {video.get('thumbnail')}
#     Transcript: {video.get('transcript')[:2000]}  # Limit to first 2000 chars to avoid token overload
#     Views: {stats.get('views')}
#     Likes: {stats.get('likes')}
#     Comments: {stats.get('comments')}
#     """

#         # Thumbnail as image_url if needed
#         image_url = video.get('thumbnail')
        
#         # Call OpenAI
#         analysis = ask(prompt, image_url=image_url, model="gpt-4o", max_tokens=500)
        
#         # Store everything in one dict
#         yt_merged[title] = {
#             "video_info": {k: v for k, v in video.items() if k != "title"},
#             "video_stats": {k: v for k, v in stats.items() if k != "title"},
#             "market_analysis": analysis
#         }


#     prompt = """You are an x research assistant, to give me latest tweets , u will go to nitter.net, wait till page loads , and search for the query which is {query}
#     , then u will scrape latest tweets, and give me the data in below json formate:
#     OUTPUT FORMATE
#     {output_formate}

    
#     {
#         "tweets": [
#             {
#                 "username": "user1",
#                 "handle": "@user1",
#                 "content": "This is a tweet content",
#                 "timestamp": "2023-10-01T12:00:00Z",
#                 "retweets": 10,
#                 "likes": 50
#             },
#             ..."""

#     x_data = asyncio.run(CAgent(query,prompt,""))

#     ads_prompt= """
# You are an ads research agent. You will go to the Facebook Ad Library website, click on the ad category button, and select "All Ads." Then, write the {query} in the textbox, press Enter, and fetch the top 10 ads running for the query {query}. Provide the data in the following JSON format: {output_formate} {"media_link": "", "started_date": "", "ad_content_visible": "", "type": "reel/post/..."}.
# """
#     ads_data = asyncio.run(CAgent(query,ads_prompt,""))


#     peoples_ask_prompt = """you need to go to google.com, search the query {query} , and look what other google recommendation are coming in dropdown , then press enter and look in complete website if we can find keywords and sentences from people also search for / people also ask for , then go to youtube.com and write query there and look what other recommendations are being shown there, record all these and return as json output given below: {output_formate} 
#     OUTPUT FORMATE:
#     {
#         "google_recommendations": [
#             "keyword1",
#             "keyword2",
#             ...
#         ],
#         "people_also_ask": [
#             "question1",
#             "keyword",
#             ...
#         ],
#         "youtube_recommendations": [
#             "recommendation1",
#             "recommendation2",
#             ...
#         ]
#     }
#     """

#     peoples_ask = asyncio.run(CAgent(query,peoples_ask_prompt,""))

#     # Fetch Reddit posts
#     reddit_posts = get_reddit_posts(query, limit=3)

#     # Combine all data into a single dictionary
#     combined_data = {
#         "videos": yt_merged,
#         "reddit_posts": reddit_posts,
#         "x_data":x_data,
#         "ads_data":ads_data,
#         "people_search_for":peoples_ask
#     }

#     with open("output.json","w",encoding="utf-8") as f:
#         import json
#         json.dump(combined_data,f,indent=4)

#     return combined_data

import asyncio
import json

def merge_data(query):
    yt_merged = {}
    videos, video_stats, x_data, ads_data, peoples_ask, reddit_posts = [], [], {}, {}, {}, []

    # --- Fetch YouTube videos and stats ---
    try:
        videos = search_videos(query, max_results=3)
        video_ids = [v["videoId"] for v in videos]
        video_stats = get_video_stats(video_ids)
    except Exception as e:
        print(f"[ERROR] Failed to fetch YouTube videos/stats: {e}")

    # --- Merge videos + run OpenAI analysis ---
    for video in videos:
        try:
            title = video["title"]
            stats = next((s for s in video_stats if s["title"] == title), {})

            prompt = f"""
    You are a market analyst for online video content. 
    Analyze the following video and provide reasoning why it is performing well and is among the top searches on this topic. 
    Focus on understanding what worked on the market, including content, thumbnail, channel influence, and audience engagement. 
    Provide suggestions and summary of what could be replicated for similar success in 2-3 bullets.

    Video Title: {title}
    Channel: {video.get('channel')}
    Thumbnail URL: {video.get('thumbnail')}
    Transcript: {video.get('transcript')[:2000]}  # Limit to first 2000 chars to avoid token overload
    Views: {stats.get('views')}
    Likes: {stats.get('likes')}
    Comments: {stats.get('comments')}
    """

            image_url = video.get('thumbnail')

            try:
                analysis = ask(prompt, image_url=image_url, model="gpt-4o", max_tokens=500)
            except Exception as e:
                print(f"[ERROR] OpenAI analysis failed for '{title}': {e}")
                analysis = "Analysis unavailable due to error."

            yt_merged[title] = {
                "video_info": {k: v for k, v in video.items() if k != "title" and k != "transcript"},
                "video_stats": {k: v for k, v in stats.items() if k != "title"},
                "market_analysis": analysis
            }

        except Exception as e:
            print(f"[ERROR] Failed processing video '{video.get('title', 'unknown')}': {e}")
            continue

    # --- Get Twitter (X) data ---
    try:
        prompt = """You are an x research assistant, to give me latest tweets , u will go to nitter.net, wait till page loads , and search for the query which is {query}
    , then u will scrape latest tweets, and give me the data in below json formate:
    OUTPUT FORMATE
    {output_formate}

    
    {
        "tweets": [
            {
                "username": "user1",
                "handle": "@user1",
                "content": "This is a tweet content",
                "timestamp": "2023-10-01T12:00:00Z",
                "retweets": 10,
                "likes": 50
            },
            ..."""
        x_data = asyncio.run(CAgent(query, prompt, ""))
    except Exception as e:
        print(f"[ERROR] Failed to fetch X data: {e}")
        x_data = {}

    # --- Get Facebook Ads data ---
    try:
        ads_prompt = """
You are an ads research agent. You will go to the Facebook Ad Library website, click on the ad category button, and select "All Ads." Then, write the {query} in the textbox, press Enter, and fetch the top 10 ads running for the query {query}. Provide the data in the following JSON format: {output_formate} .
Output Requirements:

Return the data strictly in JSON format.

The JSON must be an array of objects, each object containing the following fields:

{
"media_link": "", // URL of the ad media
"started_date": "", // Date the ad started running
"ad_content_visible": "", // Visible content/text of the ad
"type": "" // Type of ad: reel, post, video, image, etc.
}

Do not include any text outside the JSON.
"""
        ads_data = asyncio.run(CAgent(query, ads_prompt, ""))
    except Exception as e:
        print(f"[ERROR] Failed to fetch Ads data: {e}")
        ads_data = {}

    # --- Get Google/YouTube People Ask data ---
    try:
        peoples_ask_prompt = """you need to go to google.com, search the query {query} , and look what other google recommendation are coming in dropdown , then press enter and look in complete website if we can find keywords and sentences from people also search for / people also ask for , then go to youtube.com and write query there and look what other recommendations are being shown there, record all these and return as json output given below: {output_formate} 
    OUTPUT FORMATE:
    {
        "google_recommendations": [
            "keyword1",
            "keyword2",
            ...
        ],
        "people_also_ask": [
            "question1",
            "keyword",
            ...
        ],
        "youtube_recommendations": [
            "recommendation1",
            "recommendation2",
            ...
        ]
    }
    """
        peoples_ask = asyncio.run(CAgent(query, peoples_ask_prompt, ""))
    except Exception as e:
        print(f"[ERROR] Failed to fetch People Ask data: {e}")
        peoples_ask = {}

    # --- Fetch Reddit posts ---
    try:
        reddit_posts = get_reddit_posts(query, limit=3)
    except Exception as e:
        print(f"[ERROR] Failed to fetch Reddit posts: {e}")
        reddit_posts = []

    print("ads data we have is ", ads_data)

    # --- Combine all data ---
    combined_data = {
        "videos": yt_merged,
        "reddit_posts": reddit_posts,
        "x_data": extract_json_from_llm_output(x_data),
        "ads_data": extract_json_from_llm_output(ads_data),
        "people_search_for": extract_json_from_llm_output(peoples_ask)
    }

    try:
        # Step 1: Try to read existing data
        try:
            with open("output.json", "r", encoding="utf-8") as f:
                existing_data = json.load(f)
                if not isinstance(existing_data, list):
                    print("[WARN] output.json does not contain a list. Resetting.")
                    existing_data = []
        except (FileNotFoundError, json.JSONDecodeError):
            existing_data = []

        # Step 2: Normalize combined_data
        if isinstance(combined_data, dict):
            combined_data = [combined_data]

        # Step 3: Append new data
        existing_data.extend(combined_data)

        # Step 4: Write updated data back
        with open("output.json", "w", encoding="utf-8") as f:
            json.dump(existing_data, f, indent=4)

        print("[SUCCESS] Data saved to output.json.")

    except Exception as e:
        print(f"[ERROR] Failed to save output.json: {e}")
    return combined_data


# print(merge_data("crypo trading"))