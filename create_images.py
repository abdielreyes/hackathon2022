from PIL import Image
import json
import os

# Image elements
head = ["Diablo", "Sirena", "Muerte", "Borracho"]
body = ["Diablo", "Sirena", "Muerte", "Borracho"]
wall = "Fondo"

# Classifying
head_files = {
    "Diablo": "head1",
    "Sirena": "head2",
    "Muerte": "head3",
    "Borracho": "head4"
}
body_files = {
    "Diablo": "body1",
    "Sirena": "body2",
    "Muerte": "body3",
    "Borracho": "body4"
}
wall_files = {
    "Fondo": "wall1"
}

#Defining images
all_images = [] 

def create_new_image(i, j):
    
    new_image = {}

    new_image ["Head"] = head[i]
    new_image ["Body"] = head[j]
    new_image ["Wall"] = "Fondo"
    
    return new_image
    
for i in range(4): 
    for j in range(4):
        new_trait_image = create_new_image(i, j)
        all_images.append(new_trait_image)

i = 0
for item in all_images:
    item["tokenId"] = i
    i = i + 1

print(all_images)

METADATA_FILE_NAME ='./metadata/all-traits.json'
with open(METADATA_FILE_NAME, 'w') as outfile:
    json.dump(all_images, outfile, indent=4)

# Create images
for item in all_images:

    im1 = Image.open(f'./scripts/face_parts/face/{head_files[item["Head"]]}.png').convert('RGBA')
    im2 = Image.open(f'./scripts/face_parts/eyes/{body_files[item["Body"]]}.png').convert('RGBA')
    im3 = Image.open(f'./scripts/face_parts/ears/{wall_files[item["Wall"]]}.png').convert('RGBA')

    com1 = Image.alpha_composite(im1, im2)
    com2 = Image.alpha_composite(com1, im3)

    rgb_im = com2.convert('RGB')
    file_name = str(item["tokenId"]) + ".png"
    rgb_im.save("./images/" + file_name)

# Dump metadata
METADATA_FILE_NAME ='./metadata/all-traits.json'
with open(METADATA_FILE_NAME, 'w') as outfile:
    json.dump(all_images, outfile, indent=4)