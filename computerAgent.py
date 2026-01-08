# import asyncio
# import os
# from dotenv import load_dotenv
# from langchain_openai import ChatOpenAI
# from mcp_use import MCPAgent, MCPClient

# async def CAgent(query,prompt, output):
#     # Load environment variables
#     load_dotenv()

#     # Create configuration dictionary
#     config = {
#       "mcpServers": {
#         "playwright": {
#           "command": "npx",
#           "args": ["@playwright/mcp@latest"],
#           "env": {
#             "DISPLAY": ":1"
#           }
#         }
#       }
#     }


#     # Create MCPClient from configuration dictionary
#     client = MCPClient.from_dict(config)

#     print("client created")
#     # Create LLM
#     llm = ChatOpenAI(model="gpt-4o",api_key= "")

#     # Create agent with the client
#     agent = MCPAgent(llm=llm, client=client, max_steps=30)

# #     output = {
# #   "content_analysis": [
# #     { "title": "...", "platform": "...", "type": "...", "clickbait_score": "...", "topics": ["..."] }
# #   ]
# # }
# #     query = "crypto "
#     # Run the query
#     print("output structure ", prompt.replace("{query}", query).replace("{output_template}", str(output)))
#     prompt = prompt.replace("{query}", query).replace("{output_template}", str(output))
#     result = await agent.run(
#         prompt 
#     )
#     print(f"\nResult: {result}")
#     return result

# if __name__ == "__main__":
#     query = "ai agents"
# #     prompt = """You are a Playwright computer agent.

# # 🎯 Goal:
# # Identify the most relevant creators producing content on "[INSERT_KEYWORD]".

# # Platforms:
# # - YouTube
# # - Instagram/TikTok
# # - Twitter/X
# # - Reddit

# # 🪜 Steps:
# # 1. On YouTube: find top channels posting about {query}.
# #    - Extract: channel name, subscriber count, total videos, average views per video, engagement rate, URL.

# # 2. On Instagram/TikTok: find top profiles posting about {query}.
# #    - Extract: profile name, followers, engagement rate, content count, URL.

# # 3. On Twitter/X: extract top users posting about {query}.
# #    - Extract: handle, followers, engagement metrics, URL.

# # 4. On Reddit: identify top contributors.
# #    - Extract: username, karma, subreddit focus, engagement.

# # ⚙️ Output format:
# # {output_formate}
# # """
# #     output = {
# #   "youtube_channels": [...],
# #   "instagram_profiles": [...],
# #   "tiktok_profiles": [...],
# #   "twitter_profiles": [...],
# #   "reddit_users": [...]
# # }
    
#     prompt =  """You are a Playwright computer agent.\n\n🎯 Goal:\nAnalyze top videos/posts for the query: \"{query}\" across YouTube, Reddit, Nitter (Twitter/X),  and extract trending content insights.\n\nSteps:\n1. Search top 10 videos/posts per platform related to \"{query}\".\n2. For each platform, get title, URL, views, likes, comments, publish date.\n3. Analyze transcripts (or post text if transcript unavailable) to determine content type: tutorial, news, analysis, meme.\n4. Evaluate titles and thumbnails for clickbait patterns.\n5. Identify trending topics, content style, and user intent.\n\n⚙️ Output format:\n{output_template}\n\nNotes:\nReturn JSON exactly as structured."""
#     output =  {
#       "content_analysis": [
#         {
#           "title": "...",
#           "platform": "...",
#           "type": "...",
#           "clickbait_score": "...",
#           "topics": ["..."],
#           "suggested_titles": ["...", "..."]
#         }
#       ]
#     }
#     asyncio.run(CAgent(query,prompt,str(output)))

import asyncio
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
import mcp_use
from mcp_use import MCPAgent, MCPClient
mcp_use.set_debug(1) 
async def CAgent(query, prompt, output):
    print("ca agent working")
    load_dotenv()

    # config = {
    #   "mcpServers": {
    #     "playwright": {
    #       "command": "npx",
    #       "args": ["@playwright/mcp@latest","--isolated"],
    #       "env": {
    #         "DISPLAY": ":1"
    #       }
    #     }
    #   }
    # }
    config = {
      "mcpServers": {
        "playwright": {
            "type":"stdio",
          "command": "npx",
          "args": [
            "@playwright/mcp@latest",
            "--extension",
            "--user-data-dir=/Users/yourname/Library/Application Support/Google/Chrome",
            # "--browser", "chromium",
            # "--launch-options",
          ]
          , 
        "env": {
            "PLAYWRIGHT_MCP_EXTENSION_TOKEN":"YFm52nszHW8mnJ9WgxnCRbCtRTeKyxMGt6sT2TUO-0g"
                }
        } 
      }
    }


    client = MCPClient.from_dict(config)
    print("client created")

    llm = ChatOpenAI(model="gpt-4o-mini",api_key= "")  # Use faster model if needed

    agent = MCPAgent(llm=llm, client=client, max_steps=20)  # limited steps

    try:
        prompt_filled = prompt.replace("{query}", query).replace("{output_template}", str(output))
        print(f"Running prompt: {prompt_filled}")
        result = await asyncio.wait_for(agent.run(prompt_filled), timeout=600)
    except asyncio.TimeoutError:
        print("Agent run timed out")
        result = None
    except Exception as e:
        print(f"Agent run error: {e}")
        result = None

    print(f"\nResult: {result}")
    return result

if __name__ == "__main__":
    query = "ai agents"
    prompt = """You are a Playwright computer agent.\n\n🎯 Goal:\nAnalyze top videos/posts for the query: \"{query}\" ... etc."""
    prompt = "tell top 5 , search and get me what is latest in chatgpt releases and blogs, think firstly, then plan steps and perform as per screen and also look things in in dept, u can use back button , next button or go to any webpage , do as u want"
    prompt = """Step 1: Open Landing Page

Action: Navigate to https://www.geico.com/landingpage/go550/

Wait: Wait 10–15 seconds until ZIP code input field is fully visible and interactable.

Prompt:

"Open Geico landing page and wait at least 10 seconds until the ZIP code field is fully loaded."

Step 2: Enter ZIP Code

Action: Locate the ZIP code field.

Demo Data: 90210

Wait: Pause 5–8 seconds after typing ZIP code.

Prompt:

"Type ZIP code 90210 into the ZIP field. Wait 5–8 seconds, then click the 'Continue' button and wait for redirection to the quote page."

Step 3: Wait for Quote Page

Action: Wait 15–20 seconds until the quote page loads completely.

Wait Condition: Ensure personal information fields (“First Name”, “Last Name”, “DOB”) are visible.

Prompt:

"Wait at least 15 seconds until 'Let's start with your personal info' form is fully visible."

Step 4: Fill Personal Information

Fields & Demo Data:

fill First Name → John

then go for filling Last Name text box → Doe

then set Date of Birth → 01/15/1985

Waits: Pause 5 seconds after each field entry.

Prompt:

"Enter personal info slowly. After filling all fields, wait 5 seconds and then click 'Next'. Wait 10 seconds before the next section loads."

Step 5: Fill Address Information

Fields & Demo Data:

Street Address → 123 Maple Street and select top one from dropdown of address suggestions we got

Apartment/Suite → Apt 4B

Waits: Pause 5–8 seconds after each field.

Prompt:

"Enter street address and apartment number. Wait at least 8 seconds before clicking 'Next'. After clicking, wait 10 seconds for the next form section to load."

Step 6: Vehicle Information

Fields & Demo Data:

Year → 2020

Make → Toyota

Model → Camry

Ownership → Owned

Primary Use → Personal

Waits: Pause 5–10 seconds after each dropdown selection.

Prompt:

"Select vehicle information. After each selection, wait 5–10 seconds. Once done, click 'Next' and wait 10–15 seconds for the next section."

Step 7: Coverage Options

Fields & Demo Data:

Coverage Type → Full Coverage

Deductible → $500

Optional Add-ons → Roadside Assistance

Waits: Pause 5–8 seconds after each selection.

Prompt:

"Select coverage options. Wait 8 seconds after selecting each option. Click 'Next' and wait 10–15 seconds for the summary."

Step 8: Contact Information

Fields & Demo Data:

Phone → 310-555-1234

Email → johndoe@example.com

Waits: Pause 5–8 seconds per field.

Prompt:

"Fill in phone and email. Wait 8 seconds after each field. Click 'Next' and wait 15 seconds for the quote summary page."

Step 9: Quote Summary

Action: Wait 15–20 seconds until the quote summary page fully loads.

Wait Condition: Verify quote amount, coverage details, and vehicle info are visible.

Prompt:

"Scroll through the quote summary and confirm all entered demo information is displayed correctly. Wait 20 seconds before stopping."

Step 10: Stop at Quote Summary

Action: For demo purposes, do not submit payment.

Prompt:

"End automation at quote summary page. Optionally take a screenshot after waiting 10 seconds."

Step 11: Optional Cleanup

Action: Close the browser.

Prompt:

"Close the browser safely after waiting at least 5 seconds."
Demo Data Reference
Field	Example
ZIP	90210
First Name	John
Last Name	Doe
DOB	01/15/1985
Street Address	123 Maple Street
Apartment	Apt 4B
City	Beverly Hills
State	CA
Phone	310-555-1234
Email	johndoe@example.com

Vehicle Year	2020
Vehicle Make	Toyota
Vehicle Model	Camry
Coverage Type	Full Coverage
Deductible	$500
Add-ons	Roadside Assistance

✅ Notes for LLM/Agent

Use long explicit waits at each step to handle slow page loads.

Mimic human typing by adding small delays between keystrokes if possible.

Only use demo/test data.

Log all actions for debugging or demo purposes.

Handle dynamic content: pop-ups, autofill, validations.
"""
    prompt2 = """Step 1: Open Upwork Homepage

Action: Navigate to https://www.upwork.com/

Wait: Wait 10–15 seconds until the search bar on the top navigation is fully visible.

Prompt:

"Open Upwork homepage. Wait at least 10 seconds until the top search bar loads completely."

---

Step 2: Search for AI Automation Projects

Action: Click the search bar and type: AI Automation

Demo Search Query: "AI automation project"

Wait: Pause 5–8 seconds after typing, then press Enter to load results.

Prompt:

"Type 'AI automation project' in the search bar. Press Enter. Wait 10 seconds for project listings to load."

---

Step 3: Filter For Best Matches (Optional)

Action: Set sorting to “Best Match” if not already applied.

Wait: Wait 5–8 seconds for the list to refresh.

Prompt:

"Sort projects by 'Best Match'. Wait 8 seconds for results to reload."

---

Step 4: Open the Top Project Listing

Action: Select the first project in the list and click it.

Wait: Wait 10–15 seconds for the project details page to load completely.

Prompt:

"Click the first project listing under 'Best Match'. Wait 15 seconds for the project description to load."

---

Step 5: Read Project Description

Action: Scroll through the job description, requirements, and client details.

Wait: Spend 10–12 seconds reading.

Prompt:

"Scroll through the project description slowly. Ensure you read requirements, budget, and client verification."

---

Step 6: Click Apply / Submit a Proposal

Action: Click the “Apply Now” or “Submit a Proposal” button.

Wait: Wait 10–15 seconds for the proposal form to load.

Prompt:

"Click 'Submit a Proposal'. Wait 15 seconds until the proposal form is fully visible."

---

Step 7: Fill Proposal Form

Fields & Demo Data:

Cover Letter:
"Hi there! I specialize in AI automation, workflow orchestration, web interaction bots, and intelligent agent design. I can deliver end-to-end automation tailored to your exact requirements. Let’s connect!"

Hourly Rate / Fixed Budget: Keep default or minimum allowed (demo only)

Attachments: None (demo)

Waits: Pause 5 seconds after typing each field.

Prompt:

"Fill in the proposal form using the demo cover letter. After each field, wait 5 seconds. Do not attach files. When completed, wait 8 seconds."

---

Step 8: Review Before Submission

Action: Scroll through all filled fields to confirm correctness.

Wait: Pause 5–8 seconds to mimic real user review.

Prompt:

"Review the proposal form by scrolling through the page. Wait 8 seconds to simulate human review."

---

Step 9: Submit Proposal

Action: Click the “Submit Proposal” button.

Wait: Wait 10–15 seconds for confirmation.

Prompt:

"Click 'Submit Proposal'. Wait 15 seconds for confirmation screen to load."

---

Step 10: End Automation at Confirmation Page

Action: Stop after seeing the confirmation message.

Prompt:

"End the automation after the proposal is submitted and confirmation is visible. Wait 10 seconds before stopping."

---

Step 11: Optional Cleanup

Action: Close the browser.

Prompt:

"Close the browser safely after waiting at least 5 seconds."

---

Demo Data Reference
Field             Example
Search Query      AI automation project
Cover Letter      "Hi there! I specialize in AI automation, workflow orchestration, web interaction bots..."
Budget            Default / suggested by Upwork
Attachments       None

✅ Notes for LLM/Agent

Use explicit long waits at each step because Upwork pages load asynchronously.

Simulate human typing by adding small delays between keystrokes.

Avoid real submissions — demo only unless explicitly allowed.

Handle pop-ups: login prompts, cookie banners, location modals.

Log navigation steps, form interactions, and submission attempts.

Ensure scrolling is slow and human-like.
"""
    prompt3 = """go to https://www.upwork.com/nx/find-work/best-matches
    then click on search for jobs and enter "ai automation" then click on listed available jobs first option
    its possible there is cloudfair human verification so wait and click on tickbox of I am human
    then it should extract out urls of top 5 jobs 
    
    if you feel anywhere you are not able to get output as required , then make clicks and changes as per yourself"""
    prompt4 = """open  https://www.agilent.com/en/support?srsltid=AfmBOopMsYqoT0XFZyigcUMIiRfqQhbiMQXdFbg2YnQyAAgjWvArOnql
    then on right side right query - how to Troubleshoot a Thermal Shutdown Error on a GC System?
    next wait till ans page loads
    and once loacded click on first result
    then return the content from the document loaded by reading it 
    """
    output = {
      "content_analysis": [ ... ]
    }
    asyncio.run(CAgent(query, prompt4, str(output)))


# https://www.upwork.com/nx/search/jobs/?from_recent_search=true&q=ai%20automation&page=1&per_page=20