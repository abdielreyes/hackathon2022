from PIL import Image
from IPython.display import display 
import random
import json
import os

# Image elements
head = ["Diablo", "Sirena", "Muerte", "Borracho"]
body = ["Diablo", "Sirena", "Muerte", "Borracho"]
wall = "Fondo"

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

