import re

updates = {
    "Major Shaitan Singh": "https://upload.wikimedia.org/wikipedia/commons/5/55/Major_Shaitan_Singh_PVC.jpg",
    "Major Rajesh Singh Adhikari": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    "Company Havildar Major Bhopinder Singh": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    "Flight Lieutenant Ajay Ahuja": "https://upload.wikimedia.org/wikipedia/en/0/09/Ajay_Ahuja.jpg",
    "Lt. Col. Manoj Kumar Pandey": "https://upload.wikimedia.org/wikipedia/en/7/71/Manoj_Kumar_Pandey.jpg",
    "Captain Gurbachan Singh Salabra": "https://upload.wikimedia.org/wikipedia/en/3/37/Gurbachan_Singh_Salaria.jpg", # Map Salaria to Salabra
    "Sergeant Oman Gurung": "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800&auto=format&fit=crop",
    "Major Shyam Kumar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    "Lt. Col. Ranjit Singh Dayal": "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=800&auto=format&fit=crop",
    "Major General Premindra Singh": "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=800&auto=format&fit=crop",
    "Captain Vikram Bajpai": "https://upload.wikimedia.org/wikipedia/en/b/b0/Captain_Vikram_Batra_PVC.jpg" # Map Batra to Bajpai
}

file_path = './data/bravehearts.ts'
with open(file_path, 'r') as f:
    content = f.read()

for name, img in updates.items():
    # Regex to find the entry and update imageUrl
    # The entries look like:
    # {
    #   id: "...",
    #   name: "Major Shaitan Singh",
    #   ...
    #   imageUrl: "..."
    # }
    
    # We'll use a regex that matches from name up to imageUrl within the same object
    pattern = rf'(name:\s*"{name}"[\s\S]*?imageUrl:\s*)"[^"]*"'
    
    # Check if the name exists
    if re.search(pattern, content):
        content = re.sub(pattern, rf'\1"{img}"', content)
        print(f"Updated {name}")
    else:
        print(f"Warning: Could not find or update {name}")

with open(file_path, 'w') as f:
    f.write(content)

