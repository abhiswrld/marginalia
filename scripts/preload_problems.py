import os
import json
import re
import time
import urllib.request
import urllib.error

# Paths
script_dir = os.path.dirname(os.path.abspath(__file__))
curricula_path = os.path.join(script_dir, '../js/curricula.js')
preload_path = os.path.join(script_dir, '../js/preload.js')

# Extract problems from curricula.js using regex
with open(curricula_path, 'r', encoding='utf-8') as f:
    curricula_code = f.read()

problems_matches = re.findall(r"\['([^']+)',\s*\d+,\s*'([^']+)'", curricula_code)

problems = []
seen_slugs = set()
for slug, title in problems_matches:
    if slug not in seen_slugs:
        seen_slugs.add(slug)
        problems.append({'slug': slug, 'title': title})

print(f"Found {len(problems)} unique problems.")

preloaded = {}

# Load existing progress if script was stopped and restarted
if os.path.exists(preload_path):
    with open(preload_path, 'r', encoding='utf-8') as f:
        content = f.read()
    try:
        json_str = content.replace('window.PRELOADED_PROBLEMS = ', '').strip()
        if json_str.endswith(';'):
            json_str = json_str[:-1]
        preloaded = json.loads(json_str)
        print(f"Loaded {len(preloaded)} existing problems from preload.js")
    except Exception as e:
        print("Could not parse existing preload.js, starting fresh.")

def fetch_batch_from_gemini(batch, api_key):
    titles = [p['title'] for p in batch]
    titles_str = ", ".join(f'"{t}"' for t in titles)
    
    prompt = f"""You are an expert coding instructor. I am building a study notebook and I need you to generate the full problem details for the following LeetCode problems: {titles_str}.
        
        Return ONLY valid JSON. The root object MUST be a dictionary where the keys are the EXACT problem titles, and the values are the problem details objects.
        
        Example structure:
        {{
            "{titles[0]}": {{
                "statement": "The full problem description.",
                "given": "A short phrase describing the input (e.g. 'an array of integers nums')",
                "ret": "A short phrase describing the output (e.g. 'the indices of the two numbers')",
                "summary": "A 1-2 sentence intuition of how to solve it optimally.",
                "starter": "Starter code template in Python.",
                "tests": [
                    {{
                        "label": "nums = [1,2], target = 3",
                        "inputStr": "JSON object of inputs, e.g. {{\\"nums\\": [1,2], \\"target\\": 3}}",
                        "expectedStr": "JSON of expected output, e.g. [0,1]"
                    }}
                ],
                "approaches": [
                    {{
                        "name": "brute force",
                        "time": "O(n^2)",
                        "space": "O(1)",
                        "idea": "explain the intuition...",
                        "code": "complete Python code for this approach...",
                        "steps": [
                            {{
                                "label": "short action name (e.g. 'init pointers')",
                                "note": "what happens here and why",
                                "from": 1,
                                "to": 2,
                                "yes": "optional text if this branch is taken",
                                "no": "optional text if this branch is NOT taken"
                            }}
                        ]
                    }},
                    {{
                        "name": "optimal approach",
                        "time": "...",
                        "space": "...",
                        "idea": "...",
                        "code": "...",
                        "steps": []
                    }}
                ]
            }}
        }}
        
        Rules:
        - Do not wrap the JSON in markdown code blocks.
        - Ensure JSON is valid and contains ALL {len(batch)} problems requested.
        - Include 2-3 standard test cases per problem. The label MUST be formatted as 'var = [1,2], var2 = 3' based on the input. Do NOT output 'example 1'.
        - Include at least the brute force and optimal approaches.
        - For EVERY approach, provide 3-7 detailed flow steps in the `steps` array that trace through the code logic line by line."""

    url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent'
    headers = {
        'Content-Type': 'application/json',
        'x-goog-api-key': api_key
    }
    data = json.dumps({
        "contents": [{"parts": [{"text": prompt}]}]
    }).encode('utf-8')

    req = urllib.request.Request(url, data=data, headers=headers, method='POST')
    
    try:
        with urllib.request.urlopen(req) as response:
            res_data = json.loads(response.read().decode('utf-8'))
            
            try:
                text = res_data['candidates'][0]['content']['parts'][0]['text']
            except (KeyError, IndexError):
                text = ""
                
            json_str = re.sub(r'```json|```', '', text).strip()
            return json.loads(json_str)
    except urllib.error.HTTPError as e:
        raise Exception(f"API Error: {e.code} {e.reason}")

def run():
    api_key = os.environ.get('GEMINI_API_KEY')
    if not api_key:
        print("Error: Please set the GEMINI_API_KEY environment variable.")
        return

    # Filter out already preloaded problems
    remaining_problems = [p for p in problems if p['slug'] not in preloaded]
    print(f"{len(preloaded)} problems already preloaded. {len(remaining_problems)} remaining.")

    batch_size = 3
    batches = [remaining_problems[i:i + batch_size] for i in range(0, len(remaining_problems), batch_size)]

    processed = 0
    for batch in batches:
        titles = [p['title'] for p in batch]
        print(f"[Fetching Batch] {', '.join(titles)}...")
        
        max_retries = 3
        for attempt in range(max_retries):
            try:
                data_dict = fetch_batch_from_gemini(batch, api_key)
                
                # Match them back to slugs
                for p in batch:
                    title = p['title']
                    slug = p['slug']
                    if title in data_dict:
                        preloaded[slug] = data_dict[title]
                        processed += 1
                    else:
                        print(f"  -> Warning: '{title}' was missing from the AI response.")
                
                # Save after every successful batch
                with open(preload_path, 'w', encoding='utf-8') as f:
                    f.write(f"window.PRELOADED_PROBLEMS = {json.dumps(preloaded, indent=2)};\n")
                
                print(f"  -> Success! Saved batch to preload.js")
                print(f"  -> Sleeping for 60 seconds to respect rate limits...")
                time.sleep(60)
                break # Break out of retry loop on success
            except Exception as e:
                import sys
                print(f"  -> Attempt {attempt + 1} failed: {e}")
                if "429" in str(e):
                    print("  -> Quitting immediately due to 429 Too Many Requests limit reached.")
                    sys.exit(0)
                
                if attempt < max_retries - 1:
                    print(f"  -> Retrying in 10 seconds...")
                    time.sleep(10)
                else:
                    print(f"  -> Failed after {max_retries} attempts. Moving to next batch...")
                    print(f"  -> Sleeping for 60 seconds before continuing...")
                    time.sleep(60)
            
    print(f"Finished processing. Total fetched this run: {processed}.")

if __name__ == '__main__':
    run()
