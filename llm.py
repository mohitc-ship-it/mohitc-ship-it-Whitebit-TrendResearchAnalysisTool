from openai import OpenAI

# Initialize OpenAI client
client = OpenAI(api_key="")

# ----------------------------
# Function for text-only LLM call
# ----------------------------
def ask_text(prompt: str, model: str = "gpt-4o", max_tokens: int = 300) -> str:
    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": prompt}],
        max_tokens=max_tokens,
    )
    return response.choices[0].message.content

# ----------------------------
# Function for text + image LLM call
# ----------------------------
def ask_with_image(prompt: str, image_url: str, model: str = "gpt-4o", max_tokens: int = 300) -> str:
    response = client.chat.completions.create(
        model=model,
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": prompt},
                    {"type": "image_url", "image_url": {"url": image_url}},
                ],
            }
        ],
        max_tokens=max_tokens,
    )
    return response.choices[0].message.content

# ----------------------------
# Wrapper function that chooses automatically
# ----------------------------
def ask(prompt: str, image_url: str = None, model: str = "gpt-4o", max_tokens: int = 300) -> str:
    if image_url:
        return ask_with_image(prompt, image_url, model=model, max_tokens=max_tokens)
    else:
        return ask_text(prompt, model=model, max_tokens=max_tokens)


# ----------------------------
# Example usage
# ----------------------------
# Text-only
# text_answer = ask("Explain quantum entanglement in simple terms.")
# print("=== Text-only ===")
# print(text_answer)
# print("\n")

# # Text + Image
# image_answer = ask(
#     "What do you see in this image?",
#     "https://example.com/public/image.jpg"
# )
# print("=== Text + Image ===")
# print(image_answer)
