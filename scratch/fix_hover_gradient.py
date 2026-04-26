import os
import re

target_string = r"before:content-\[''\] before:absolute before:inset-0 before:pointer-events-none before:opacity-0 before:transition-opacity before:duration-700 before:bg-\[radial-gradient\(circle_at_top_right,rgba\(99,0,226,0\.05\),transparent_70%\)\] hover:before:opacity-100"
replacement_string = "card-hover-gradient"

components_dir = "/mnt/data/projects/personal/freelancePortfolio/src/components"

for filename in os.listdir(components_dir):
    if filename.endswith(".tsx"):
        filepath = os.path.join(components_dir, filename)
        with open(filepath, 'r') as f:
            content = f.read()
        
        if re.search(target_string, content):
            print(f"Replacing in {filename}...")
            new_content = re.sub(target_string, replacement_string, content)
            with open(filepath, 'w') as f:
                f.write(new_content)

print("Replacement complete.")
