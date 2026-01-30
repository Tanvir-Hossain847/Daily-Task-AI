import os
import random
import json
from datetime import datetime
from google import genai

# ---------------------------------------
# CONFIG
# ---------------------------------------

MODEL_NAME = "gemini-1.5-pro"
API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    raise RuntimeError("GEMINI_API_KEY environment variable is not set")

client = genai.Client(api_key=API_KEY)

# File types and extensions
file_types = {
    "html": ".html",
    "css": ".css",
    "javascript": ".js"
}

# Prompts per file type
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
        "Create a JavaScript function that changes background color every 5 seconds.",
        "Make a JavaScript countdown timer that starts from 10, and when it ends change the background color."
    ]
}

used_prompts_file = "used_prompts.json"

# ---------------------------------------
# LOAD / SAVE USED PROMPTS
# ---------------------------------------

if os.path.exists(used_prompts_file):
    with open(used_prompts_file, "r", encoding="utf-8") as f:
        used_prompts = json.load(f)
else:
    used_prompts = {k: [] for k in file_types.keys()}

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

# ---------------------------------------
# PICK TASK
# ---------------------------------------

chosen_type = random.choice(list(file_types.keys()))
extension = file_types[chosen_type]
prompt = get_unused_prompt(chosen_type)

print(f"USING MODEL: {MODEL_NAME}")
print(f"PROMPT: {prompt}")

# ---------------------------------------
# GENERATE CONTENT
# ---------------------------------------

response = client.models.generate_content(
    model=MODEL_NAME,
    contents=prompt
)

code = response.text.strip()

# ---------------------------------------
# SAVE OUTPUT
# ---------------------------------------

file_name = f"{chosen_type}_file_{datetime.now().strftime('%Y_%m_%d')}{extension}"

with open(file_name, "w", encoding="utf-8") as f:
    f.write(code)

print(f"Generated file: {file_name}")

# ---------------------------------------
# UPDATE README LOG
# ---------------------------------------

readme_file = "README.md"
log_entry = f"- {datetime.now().strftime('%Y-%m-%d')}: Generated `{file_name}` — prompt: *{prompt}*\n"

if os.path.exists(readme_file):
    with open(readme_file, "a", encoding="utf-8") as f:
        f.write(log_entry)
else:
    with open(readme_file, "w", encoding="utf-8") as f:
        f.write("# Daily AI Generated Files Log\n\n")
        f.write(log_entry)

print("README updated successfully")
