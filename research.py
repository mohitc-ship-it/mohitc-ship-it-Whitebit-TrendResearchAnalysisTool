from computerAgent import CAgent
import json
import time

def extract_json_from_llm_output(raw_output: str):
    """
    Extracts JSON from a raw LLM output string.

    Args:
        raw_output (str): The full output string from the LLM or agent.

    Returns:
        dict or list: Parsed JSON object if successful, None otherwise.
    """
    try:
        # Find the first { and last } in the string
        start = raw_output.find("{")
        end = raw_output.rfind("}")

        if start == -1 or end == -1:
            print("No JSON braces found in the output.")
            return None

        json_str = raw_output[start:end + 1]

        # Parse JSON
        parsed = json.loads(json_str)
        return parsed

    except json.JSONDecodeError as e:
        print(f"JSON decoding error: {e}")
        return None
    except Exception as e:
        print(f"Unexpected error: {e}")
        return None


def process_query(user_query, tags, premium):

    final_result_json = {}

    print("processing query ", user_query, tags, premium)

    # user query will be enahcned
    with open("prompts.json","r",encoding="utf-8") as f:
        prompts = json.load(f)
    
    for tag in tags:
        print("tag:", tag)
        
        # Find the prompt_dict where the tag matches
        matched_prompt = next((p for p in prompts if p.get('tag') == tag), None)

        if matched_prompt:
            print("prompt is", matched_prompt)

            prompt_text = matched_prompt["prompt"]
            output_structure = matched_prompt["output"]

            print("calling agent")

            import asyncio
            result = asyncio.run(CAgent(user_query, prompt_text, output_structure))
            result = extract_json_from_llm_output(result)
            print("got 1st result ", result)
            final_result_json[tag] = result
            time.sleep(10)
        else:
            print(f"No matching prompt found for tag: {tag}")

    return final_result_json