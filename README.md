# TrendResearchTool

TrendResearchTool is a comprehensive market research and trend analysis application. It leverages AI agents, browser automation, and public APIs to aggregate insights from multiple platforms including YouTube, Reddit, Twitter (via Nitter), Facebook Ads, and Google Trends.

## 🚀 Project Overview

The project consists of two main parts:
1.  **Backend (Python/FastAPI)**: Orchestrates data gathering, runs AI agents for browser automation, and processes data using LLMs.
2.  **Frontend (Next.js)**: A modern web interface to interact with the tool and visualize the research results.

## 📂 Project Structure

```
TrendResearchtool/
├── app.py                 # FastAPI entry point
├── research2.py           # Main orchestration logic for data gathering
├── computerAgent.py       # AI Agent using MCP & Playwright for browser tasks
├── yt_api.py              # YouTube Data API wrapper (Search, Stats, Transcripts)
├── reddit.py              # Reddit API wrapper
├── llm.py                 # OpenAI API wrapper for text & image analysis
├── prompts.json           # Configuration for Agent prompts and output schemas
├── output.json            # Storage for generated research data
├── .env                   # Environment variables (API Keys)
└── yt-market-analyzer/    # Frontend Application (Next.js)
    ├── src/
    ├── package.json
    └── ...
```

---

## 🛠️ Tech Stack

### Backend
*   **Framework**: FastAPI
*   **AI/LLM**: OpenAI (GPT-4o), LangChain
*   **Browser Automation**: Model Context Protocol (MCP) with Playwright
*   **APIs**: YouTube Data API, Reddit API

### Frontend
*   **Framework**: Next.js
*   **Styling**: Tailwind CSS
*   **Language**: TypeScript

---

## ⚙️ Setup & Installation

### 1. Backend Setup

1.  **Prerequisites**: Ensure Python 3.8+ is installed.
2.  **Install Dependencies**:
    ```bash
    pip install fastapi uvicorn openai langchain-openai python-dotenv youtube-transcript-api requests
    # Install mcp-use if available or required specific packages
    ```
3.  **Environment Variables**:
    Create a `.env` file in the root directory and add your keys:
    ```env
    OPENAI_API_KEY=your_openai_key
    YOUTUBE_API_KEY=your_youtube_api_key
    # Add any other required keys
    ```
4.  **MCP Server**:
    The `computerAgent.py` relies on a Playwright MCP server. Ensure you have the necessary Node.js packages installed:
    ```bash
    npx @playwright/mcp@latest
    ```

### 2. Frontend Setup

1.  Navigate to the frontend directory:
    ```bash
    cd yt-market-analyzer
    ```
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

---

## 🏃‍♂️ How to Run

1.  **Start the Backend**:
    ```bash
    # From the root directory
    uvicorn app:app --reload
    ```
    The API will be available at `http://127.0.0.1:8000`.

2.  **Start the Frontend**:
    ```bash
    # From yt-market-analyzer directory
    npm run dev
    ```
    Access the UI at `http://localhost:3000`.

---

## 🧠 Architecture & Flow

1.  **Request**: The user submits a research query (e.g., "AI Agents") via the Frontend.
2.  **Orchestration (`research2.py`)**:
    *   **YouTube**: Fetches top videos, statistics, and transcripts via `yt_api.py`.
    *   **Analysis**: Uses `llm.py` to analyze video content and thumbnails for market fit.
    *   **Browser Agents (`computerAgent.py`)**:
        *   Scrapes **Twitter/Nitter** for latest tweets.
        *   Searches **Facebook Ads Library** for active ad campaigns.
        *   Gather **Google & YouTube Search Suggestions** ("People also ask").
    *   **Reddit**: Fetches top discussions via `reddit.py`.
3.  **Aggregation**: All data is merged into a structured JSON format.
4.  **Storage**: Results are saved to `output.json` and returned to the frontend.

## 🧩 Key Components

*   **`computerAgent.py`**: This is the core agentic component. It uses the Model Context Protocol (MCP) to control a headless browser. It interprets natural language prompts (defined in `prompts.json`) to perform complex web navigation and scraping tasks that don't have direct APIs.
*   **`prompts.json`**: Defines the "Standard Operating Procedures" for the agent. It contains specific instructions for different tasks (e.g., "ads_analysis", "trending_content") and the expected JSON output structure.
*   **`yt_api.py`**: Handles direct interactions with YouTube, including fetching video transcripts which are crucial for deep content analysis.

## 📝 Notes for Developers

*   **Agent Stability**: The `computerAgent.py` relies on web page structures. If a target site (e.g., Nitter, Facebook Ads) changes its layout, the prompts in `prompts.json` or the agent logic might need updates.
*   **API Limits**: Be mindful of YouTube Data API quotas and OpenAI token usage.
# Whitebit-TrendResearchAnalysisTool
# Whitebit-TrendResearchAnalysisTool
# mohitc-ship-it-Whitebit-TrendResearchAnalysisTool
