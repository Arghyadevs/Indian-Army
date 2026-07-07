import json

with open('missing_images.json', 'r') as f:
    data = json.load(f)

md = "# Required Photographs List\n\n"
md += "Here is the complete list of entities across the website that are currently sharing generic Wikipedia images or using the State Emblem fallback. You can provide image URLs for as many of these as you'd like!\n\n"

categories = {
    "missing_bravehearts": "🎖️ Bravehearts (Profiles using Fallback Emblem)",
    "missing_women": "🛡️ Women in Armed Forces (Profiles using Fallback Emblem)",
    "regiments": "⚔️ Regiments",
    "commands": "🗺️ Commands & Battle Locations",
    "operations": "🎯 Military Operations",
    "wars": "📜 Wars & Conflicts Timeline",
    "equipment": "🚀 Equipment & Weapons",
    "training": "🎓 Training Academies & Entry Paths",
    "ranks": "⭐ Ranks & Insignia",
    "mottoes": "💬 Mottoes & Battle Cries"
}

for key, title in categories.items():
    if key in data and data[key]:
        # Filter out duplicates and some weird entries
        items = list(dict.fromkeys(data[key]))
        # Special filter for regiments since regex grabbed nicknames too
        if key == "regiments":
            items = [i for i in items if not i.startswith("The ") and "Sikh LI" not in i]
            
        md += f"### {title}\n"
        for item in items:
            md += f"- [ ] **{item.strip()}**\n"
        md += "\n"

md += """---
> [!NOTE]
> **How to provide the images:**
> You can just reply with a list like:
> - `Captain Anujika Gnamb` -> `https://link-to-image.jpg`
> - `Operation Vijay` -> `https://link-to-image.jpg`
> 
> Once you provide them, I will automatically inject them into the exact right places in the codebase!"""

with open('/Users/arghy/.gemini/antigravity/brain/d33bb380-bdce-43e0-a216-52a58158c874/required_photographs.md', 'w') as f:
    f.write(md)
print("Artifact created")
