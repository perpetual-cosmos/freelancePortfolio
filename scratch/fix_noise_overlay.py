import os
import re

target_string = r"before:content-\[''\] before:absolute before:inset-0 before:z-0 before:opacity-\[0\.02\] before:pointer-events-none before:bg-\[url\('data:image/svg\+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270\.65%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url\(%23noiseFilter\)%27/%3E%3C/svg%3E'\)\]"
replacement_string = "noise-overlay"

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
