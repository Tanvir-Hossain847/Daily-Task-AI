import os
import random
import json
from datetime import datetime
from google import genai

# =========================
# CONFIG (ONLY WORKING MODEL)
# =========================
MODEL_NAME = "gemini-1.5-flash"
API_KEY = os.environ["GEMINI_API_KEY"]

client = genai.Client(api_key=API_KEY)

# =========================
# FILE TYPES
# =========================
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
        "Create a JavaScript function that changes background color every 5 seconds.",
        "Make a JavaScript countdown timer starting from 10."
    ]
}

# =========================
# PROMPT TRACKING
# =========================
USED_PROMPTS_FILE = "used_prompts.json"

if os.path.exists(USED_PROMPTS_FILE):
    with open(USED_PROMPTS_FILE, "r", encoding="utf-8") as f:
        used_prompts = json.load(f)
else:
    used_prompts = {k: [] for k in file_types}

def save_used_prompts():
    with open(USED_PROMPTS_FILE, "w", encoding="utf-8") as f:
        json.dump(used_prompts, f, indent=2)

def get_unused_prompt(file_type):
    available = [p for p in prompts[file_type] if p not in used_prompts[file_type]]
    if not available:
        used_prompts[file_type] = []
        available = prompts[file_type]
    prompt = random.choice(available)
    used_prompts[file_type].append(prompt)
    save_used_prompts()
    return prompt

# =========================
# GENERATION
# =========================
chosen_type = random.choice(list(file_types.keys()))
extension = file_types[chosen_type]
prompt = get_unused_prompt(chosen_type)

print(f"USING MODEL: {MODEL_NAME}")
print(f"PROMPT: {prompt}")

response = client.models.generate_content(
    model=MODEL_NAME,
    contents=prompt
)

code = response.text.strip()

# =========================
# SAVE OUTPUT
# =========================
filename = f"{chosen_type}_file_{datetime.now().strftime('%Y_%m_%d')}{extension}"

with open(filename, "w", encoding="utf-8") as f:
    f.write(code)

# =========================
# README LOG
# =========================
log_entry = f"- {datetime.now().strftime('%Y-%m-%d')}: Generated `{filename}` — prompt: *{prompt}*\n"

if os.path.exists("README.md"):
    with open("README.md", "a", encoding="utf-8") as f:
        f.write(log_entry)
else:
    with open("README.md", "w", encoding="utf-8") as f:
        f.write("# Daily AI Generated Files Log\n\n")
        f.write(log_entry)
