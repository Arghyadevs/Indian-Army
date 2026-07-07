import re
import json

def extract_names_from_ts(file_path, pattern_str, group_idx=1):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # We'll just use a simple regex to grab names from object literals
    pattern = re.compile(pattern_str)
    return [m.group(group_idx) for m in pattern.finditer(content)]

# 1. Bravehearts (find those without a wikipedia/external image, or just list all)
# Since I scraped wikipedia earlier, some have real urls. Let's list those that use the fallback.
# Actually, the user might want to provide images for ALL fictional ones that currently have the fallback.
bravehearts_content = open('./data/bravehearts.ts', 'r').read()
women_content = open('./data/women.ts', 'r').read()

missing_bravehearts = []
for block in re.finditer(r'\{[^}]*name:\s*"([^"]+)"[^}]*imageUrl:\s*([^,]+)[^}]*\}', bravehearts_content):
    name = block.group(1)
    img = block.group(2).strip().strip('"').strip("'")
    if 'Emblem_of_India' in img or 'wikipedia' not in img:
        missing_bravehearts.append(name)

missing_women = []
for block in re.finditer(r'\{[^}]*name:\s*"([^"]+)"[^}]*imageUrl:\s*([^,]+)[^}]*\}', women_content):
    name = block.group(1)
    img = block.group(2).strip().strip('"').strip("'")
    if 'Emblem_of_India' in img or 'wikipedia' not in img:
        missing_women.append(name)

# If the above fails because of formatting, let's just do a simpler search
all_bravehearts = extract_names_from_ts('./data/bravehearts.ts', r'name:\s*"([^"]+)"')
all_women = extract_names_from_ts('./data/women.ts', r'name:\s*"([^"]+)"')

# 2. Operations
operations = extract_names_from_ts('./data/operations.ts', r'name:\s*"([^"]+)"')

# 3. Wars
wars = extract_names_from_ts('./data/wars.ts', r'title:\s*"([^"]+)"')

# 4. Regiments (from page.tsx)
regiments = extract_names_from_ts('./app/regiments/page.tsx', r'name:\s*"([^"]+)"')

# 5. Commands (from page.tsx)
commands = extract_names_from_ts('./app/commands/page.tsx', r'name:\s*"([^"]+)"')

# 6. Training Paths (from page.tsx)
training = extract_names_from_ts('./app/training/page.tsx', r'name:\s*"([^"]+)"')

# 7. Mottoes (from page.tsx)
mottoes = extract_names_from_ts('./app/mottoes/page.tsx', r'text:\s*"([^"]+)"')

# 8. Equipment (from page.tsx)
equipment = extract_names_from_ts('./app/equipment/page.tsx', r'name:\s*"([^"]+)"')

# 9. Ranks
ranks = extract_names_from_ts('./data/ranks.ts', r'name:\s*"([^"]+)"')


out = {
    "missing_bravehearts": missing_bravehearts if missing_bravehearts else all_bravehearts,
    "missing_women": missing_women if missing_women else all_women,
    "operations": operations,
    "wars": wars,
    "regiments": regiments,
    "commands": commands,
    "training": training,
    "equipment": equipment,
    "mottoes": mottoes,
    "ranks": ranks
}

with open('missing_images.json', 'w') as f:
    json.dump(out, f, indent=2)

print("Extracted lists to missing_images.json")
