import os
import random
from datetime import datetime
import json
import google.generativeai as genai

# Configure API key
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Use FLASH model (THIS WORKS HERE)
MODEL_NAME = "gemini-1.5-flash"
model = genai.GenerativeModel(MODEL_NAME)

file_types = {
    "html": ".html",
    "css": ".css",
    "javascript": ".js"
}

prompts = {
    "html": [
        "Create an HTML page with a motivational quote and styled background.",
        "Make a simple HTML table of your top 5 favorite foods.",
        "Write HTML code for a personal portfolio landing page."
    ],
    "css": [
        "Write CSS code for a neon glowing button.",
        "Create CSS for a smooth gradient background animation.",
        "Write CSS styles for a modern card layout."
    ],
    "javascript": [
        "Write JavaScript code that displays a random fun fact in the console.",
        "Create a JavaScript function that changes background color every 5 second.",
        "Make a JavaScript countdown timer starting from 10."
    ]
}

used_prompts_file = "used_prompts.json"

if os.path.exists(used_prompts_file):
    with open(used_prompts_file, "r", encoding="utf-8") as f:
        used_prompts = json.load(f)
else:
    used_prompts = {k: [] for k in file_types}

def save_used_prompts():
    with open(used_prompts_file, "w", encoding="utf-8") as f:
        json.dump(used_prompts, f, indent=2)

def get_unused_prompt(ftype):
    available = [p for p in prompts[ftype] if p not in used_prompts[ftype]]
    if not available:
        used_prompts[ftype] = []
        available = prompts[ftype]
    choice = random.choice(available)
    used_prompts[ftype].append(choice)
    save_used_prompts()
    return choice

chosen_type = random.choice(list(file_types.keys()))
extension = file_types[chosen_type]
prompt = get_unused_prompt(chosen_type)

print(f"USING MODEL: {MODEL_NAME}")
print(f"PROMPT: {prompt}")

response = model.generate_content(prompt)
code = response.text

file_name = f"{chosen_type}_{datetime.now().strftime('%Y_%m_%d')}{extension}"

with open(file_name, "w", encoding="utf-8") as f:
    f.write(code)

print(f"Generated {file_name}")

readme_file = "README.md"
log_entry = f"- {datetime.now().strftime('%Y-%m-%d')}: `{file_name}` — *{prompt}*\n"

if os.path.exists(readme_file):
    with open(readme_file, "a", encoding="utf-8") as f:
        f.write(log_entry)
else:
    with open(readme_file, "w", encoding="utf-8") as f:
        f.write("# Daily AI Generated Files Log\n\n" + log_entry)

print("README updated")
