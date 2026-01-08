# Project Information


This is part of whitebit poc demo.

## Problem Statement
In the fast-paced digital content landscape, creators and marketers struggle to manually gather and analyze scattered data from multiple platforms (YouTube, Reddit, Twitter/X, Facebook Ads, Google Trends) to identify trending topics, effective content strategies, and competitor insights. This manual process is time-consuming, prone to bias, and often lacks depth in understanding *why* certain content performs well.

## Approach
This solution automates the entire market research workflow using a "Multi-Agent" and "Multi-Source" approach:
1.  **Unified Orchestration**: A central backend receives a user query and dispatches tasks to specialized modules.
2.  **Hybrid Data Gathering**:
    *   **API Integration**: Uses official APIs (YouTube Data API, Reddit API) for reliable, structured data like video stats, transcripts, and discussion threads.
    *   **Agentic Browser Automation**: Deploys AI-driven "Computer Agents" (using MCP & Playwright) to navigate and scrape websites that lack public APIs or require visual interaction (e.g., Facebook Ads Library, Nitter/Twitter, Google Search suggestions).
3.  **Intelligent Analysis**: Leverages Large Language Models (OpenAI GPT-4o) to:
    *   Analyze video transcripts and thumbnails to determine "clickbait scores" and content types.
    *   Synthesize qualitative data from social media to identify user sentiment and intent.
    *   Generate actionable insights and content suggestions based on the aggregated data.

## Technical Architecture
The system follows a modular micro-service-like architecture:

1.  **Frontend Layer (Next.js)**:
    *   Provides a user-friendly interface for inputting research queries.
    *   Visualizes complex data (charts, lists, insights) returned by the backend.

2.  **API Layer (FastAPI)**:
    *   Serves as the entry point (`app.py`) handling HTTP requests.
    *   Manages the `research2.py` orchestration logic which triggers parallel data fetching tasks.

3.  **Agentic Layer (MCP & Playwright)**:
    *   **`computerAgent.py`**: Implements the Model Context Protocol (MCP) to control a headless browser.
    *   Executes natural language prompts defined in `prompts.json` to perform human-like browsing tasks (e.g., "Go to Facebook Ads Library and search for X").

4.  **Data Processing Layer**:
    *   **`llm.py`**: Wrapper for OpenAI API interactions, handling both text and image (thumbnail) analysis.
    *   **`yt_api.py` & `reddit.py`**: Specialized modules for fetching and normalizing data from their respective platforms.

5.  **Storage**:
    *   Processed results are aggregated into a structured JSON format (`output.json`) for frontend consumption.

## Tech Stack

### Core Backend
*   **Language**: Python
*   **Web Framework**: FastAPI
*   **Orchestration**: Custom Python logic (`research2.py`)

### AI & Automation
*   **LLM**: OpenAI GPT-4o (via LangChain & direct API)
*   **Browser Automation**: Playwright
*   **Agent Protocol**: Model Context Protocol (MCP) - `@playwright/mcp`

### Frontend
*   **Framework**: Next.js (React)
*   **Styling**: Tailwind CSS
*   **Language**: TypeScript

### External APIs
*   YouTube Data API v3
*   Reddit API
*   Google Trends (via automation)
