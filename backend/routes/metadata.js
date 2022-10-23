const router = require("express").Router();
const tokens = require("../data/tokens.json");
const nftData = require("../data/NFTs.json");
const promoData = require("../data/promos.json");

router.get("/:id", async (req, res) => {
  const tokenId = req.params.id;
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
    res.send(metadata)
  } else {
    res.send({
      error: true,
      message: 'this token has not been minted'
    })
  }
});

module.exports = router;
