const fs = require('fs');
var path  = require('path')
var fileName = path.join(__dirname,'../data/metadata.json');
const file = require(fileName);
    
function addKey(tokenId, promoId, nftId){
  file[tokenId] = {
    tokenId,
    promoId,
    nftId
  };
      
  fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(file));
    console.log('writing to ' + fileName);
  });
  
}


module.exports = addKey


