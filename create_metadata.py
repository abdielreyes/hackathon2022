import json
from secrets import token_bytes

f = open('./metadata/all-traits.json',) 
data = json.load(f)

IMAGES_BASE_URL = "https://gateway.pinata.cloud/ipfs/"
PROJECT_NAME = "Coleccionables BBVA"

def getAttribute(key, value):
    return {
        "trait_type": key,
        "value": value
    }

NFTs = []

for i in data:
    token_id = i['tokenId']
    token = {
        "image": IMAGES_BASE_URL + str(token_id) + '.png',
        "imageId": token_id,
        "name": PROJECT_NAME + ' ' + str(token_id),
        "attributes": []
    }
    token["attributes"].append(getAttribute("Head", i["Head"]))
    token["attributes"].append(getAttribute("Body", i["Body"]))
    token["attributes"].append(getAttribute("Wall", i["Wall"]))
    token["attributes"].append({"trait_type": "Rarity", "value": ""})
    
    with open("./metadata/NFTs.json", mode='w') as f:
        NFTs.append(token)
        json.dump(NFTs, f, indent=4)

f.close()