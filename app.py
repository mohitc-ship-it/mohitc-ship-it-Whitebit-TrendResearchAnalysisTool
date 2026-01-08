# from flask import Flask, request, jsonify
# from research import process_query

# app = Flask(__name__)

# @app.route("/run-query", methods=["POST"])
# def run_query():
#     data = request.json
#     user_query = data.get("query")
#     tags = data.get("tags", [])
#     premium = data.get("premium", False)

#     if not user_query:
#         return jsonify({"error": "Query is required"}), 400

#     try:
#         # Main orchestration call
#         result = process_query(user_query, tags, premium)
#         print("we got final result as ", result)
#         return jsonify(result)
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(debug=True)


from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from research2 import merge_data  # Your orchestration function
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Research Analysis API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or ["http://localhost:3000"] for dev only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- Request Model ----------------
class QueryRequest(BaseModel):
    query: str
    tags: List[str] = []
    premium: Optional[bool] = False

# ---------------- Endpoint ----------------
@app.post("/analyze")
def run_query(request: QueryRequest):
    print("Received request:", request)
    user_query = request.query
    tags = request.tags
    # premium = request.premium
    premium = True

    if not user_query:
        raise HTTPException(status_code=400, detail="Query is required")

    try:
        # Call your orchestration function (can be async if needed)\
        # if callable(getattr(process_query, "__await__", None)) else process_query(user_query, tags, premium)
        result =merge_data(user_query)
        # with open('output.json', 'r') as file:
        #     import json
        #     result = json.load(file)
        print("We got final result as:", result)
        return result[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ---------------- Run with Uvicorn ----------------
# Use this command to run: uvicorn main:app --reload
