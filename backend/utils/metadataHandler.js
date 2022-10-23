const fs = require('fs');
var path  = require('path')
var fileName = path.join(__dirname,'../data/tokens.json');
const file = require(fileName);
const tokens = require("../data/tokens.json");
const nftData = require("../data/NFTs.json");
const promoData = require("../data/promos.json");   

function addKey(tokenId, promoId, nftId){
  file[tokenId] = {
    tokenId,
    promoId,
    nftId
  };
      
  fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
    if (err) return console.log(err);
    console.log('writing to ' + fileName);
  });
  
}
function getTokenInfo(tokenId){

  const metadataToken = tokens[tokenId];
  if (metadataToken) {
    const promo = promoData.promos[metadataToken.promoId]
    const metadataNFT = nftData[metadataToken.nftId];
    const metadata = {
      ...metadataNFT,
      head: metadataNFT.attributes[0].value,
      body: metadataNFT.attributes[1].value,
      rarity: metadataNFT.attributes[2].value,
      tokenId,
      promoId: metadataToken.promoId,
      promoDescription: promo.desc
    }
    return metadata
  } else {
    return "This token has not been minted"
  }
}


module.exports = [addKey,getTokenInfo]


