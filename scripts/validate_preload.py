import json
import ast
import os
import re

script_dir = os.path.dirname(os.path.abspath(__file__))
preload_path = os.path.join(script_dir, '../js/preload.js')

def validate_code(code_str):
    try:
        # Some generated code might have leading whitespace on the first line if it was part of a larger block,
        # but usually ast.parse handles full scripts. 
        # If there's an IndentationError, ast.parse will catch it.
        ast.parse(code_str)
        return True, ""
    except SyntaxError as e:
        return False, f"{e.__class__.__name__}: {e}"
    except Exception as e:
        return False, f"{e.__class__.__name__}: {e}"

def main():
    if not os.path.exists(preload_path):
        print(f"Error: {preload_path} not found.")
        return

    with open(preload_path, 'r', encoding='utf-8') as f:
        content = f.read()

    try:
        json_str = content.replace('window.PRELOADED_PROBLEMS = ', '').strip()
        if json_str.endswith(';'):
            json_str = json_str[:-1]
        preloaded = json.loads(json_str, strict=False)
    except Exception as e:
        print(f"Failed to parse preload.js: {e}")
        return

    print(f"Loaded {len(preloaded)} problems for validation.\n")

    flagged_problems = {}

    for slug, data in preloaded.items():
        errors = []
        
        # Check starter code
        starter = data.get('starter', '')
        if starter:
            valid, err = validate_code(starter)
            if not valid:
                errors.append(f"Starter code error: {err}")

        # Check approach code
        for i, approach in enumerate(data.get('approaches', [])):
            code = approach.get('code', '')
            if code:
                valid, err = validate_code(code)
                if not valid:
                    errors.append(f"Approach '{approach.get('name', i)}' code error: {err}")
                
                # Check line numbers
                num_lines = len(code.split('\n'))
                for step in approach.get('steps', []):
                    f, t = step.get('from'), step.get('to')
                    if f and t:
                        if type(f) != int or type(t) != int or f > t or f < 1 or t > num_lines:
                            errors.append(f"Invalid line numbers in step '{step.get('label')}': from {f} to {t} (code has {num_lines} lines)")

        if errors:
            flagged_problems[slug] = errors

    if not flagged_problems:
        print("✅ All problems passed strict Python syntax validation!")
    else:
        print(f"❌ Found {len(flagged_problems)} problems with Python syntax errors:")
        for slug, errs in flagged_problems.items():
            print(f"\n--- {slug} ---")
            for e in errs:
                print(f"  - {e}")

if __name__ == '__main__':
    main()
