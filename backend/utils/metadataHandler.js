const fs = require('fs');
var path  = require('path')
var fileName = path.join(__dirname,'../data/tokens.json');
const file = require(fileName);
    
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


module.exports = addKey


