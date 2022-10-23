const  router = require("express").Router();
const ethers = require('ethers')
const abi = require('../ABI/ColeccionablesBBVA.json')
const verify = require("../routes/verifyToken")
const promos = require("../data/promos.json");
const nftData = require("../data/NFTs.json");
const addKey = require("../utils/metadataHandler");
const user = require("../models/user");
const { getTokenInfo }= require("../utils/metadataHandler")

const providerRPC = {
    avalanche: {
      name: 'avalanche',
      rpc: "https://api.avax-test.network/ext/bc/C/rpc", // Insert your RPC URL here
      chainId: 43113, // 0x504 in hex,
    },
  };
  // 3. Create ethers provider
  const provider = new ethers.providers.JsonRpcProvider(
    providerRPC.avalanche.rpc, 
    {
      chainId: providerRPC.avalanche.chainId,
      name: providerRPC.avalanche.name,
    }
  );

const privKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privKey, provider);
const contractAddress = process.env.CONTRACT;
const contract = new ethers.Contract(contractAddress, abi, wallet);

router.post('/getContractInfo',verify,async (req,res)=>{ 
  const address = req.body.address;
  let bn = await contract.balanceOf(address)
  res.status(200).send(bn)
});

router.post('/redeemPromo',async(req,res)=>{
  var id = req.body.user_id;
  var tokenId = req.body.token_id;
  let resTx = await contract.redeem(tokenId, {gasLimit: 3500000});
  const receipt = await resTx.wait();
  const tokenId = receipt.events[1].args[1].toNumber()
  console.log(getTokenInfo(tokenId))
})

router.post("/getNft", async (req, res) => {
  var rarity = "" + req.body.rarity;
  var ownerAddress = req.body.address;
  var id = req.body.user_id;
  //validate user points
  user.findOne({_id:id},(err,doc)=>{
    if(err){
      console.log(err);
      res.status(400).send("Error getting user")
    }else{
      if(doc.points<=(8000*rarity)){
        res.status(400).send("Not enough points to buy")
      }else{
      }
      
    }
  })
  
  // random promo based on rarity
  let promosRarity = [];
  for (const key in promos.promos) {
    if (Object.hasOwnProperty.call(promos.promos, key)) {
      const promo = promos.promos[key];
      if (promo.rarity==rarity) {
        promosRarity.push(promo); 
      } 
    }
  }
  var promoLen = promosRarity.length;
  var promo = {
    ...promosRarity[Math.floor(Math.random() * promoLen)],
    price: promos.promoInfo[rarity].price,
    name: promos.promoInfo[rarity].name
  };
  console.log(promo)
  
  //random nft based on rarity
  let nftsRarity = nftData.filter(nft => {
    return nft.attributes[2].value==promos.promoInfo[rarity].name;
  });
  var nftsLen = nftsRarity.length;
  var nft = {
    ...nftsRarity[Math.floor(Math.random() * nftsLen)],
  };
  console.log(nft);
  //mint nft
  let resTx = await contract.createCollectible(promo.id, user.id,ownerAddress, {gasLimit: 3500000});
  const receipt = await resTx.wait();
  const tokenId = receipt.events[1].args[1].toNumber()
  console.log(tokenId);
  
  //save new token metadata
  addKey(tokenId, promo.id, nft.nftId);
  
  const metadata = {
    ...nft,
    head: nft.attributes[0].value,
    body: nft.attributes[1].value,
    rarity: nft.attributes[2].value,
    tokenId,
    promoId: promo.id,
    promoDescription: promo.desc
  };
  user.findByIdAndUpdate(id,{$inc:(rarity*8000*-1)},(err,doc)=>{
    if(err){
      res.status(400).send("Error spenting points ")
    }
    console.log("Points spent!")
  })

  res.send({
    metadata,
    receipt
  });
});

module.exports = router