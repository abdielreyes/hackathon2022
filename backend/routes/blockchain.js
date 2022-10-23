const  router = require("express").Router();
const ethers = require('ethers')
const abi = require('../ABI/ColeccionablesBBVA.json')
const verify = require("../routes/verifyToken")
const promos = require("../data/promos.json");
const nftData = require("../data/NFTs.json");
const addKey = require("../utils/metadataHandler");

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

const privKey = '0x9761a8d5af8de303cbbf2a53d14aa5799ba4c153a5f0c8cb0154f84fd39e3be4';
console.log(privKey);
const wallet = new ethers.Wallet(privKey, provider);
const contractAddress = "0xC412A0860A3106208E1Dd59592E8771F207e2862";

const address = "0x32C6038e04A9bE51Fe4feeAF30E0cE3847434EEf";
const contract = new ethers.Contract(contractAddress, abi, wallet);

router.post('/getContractInfo',verify,async (req,res)=>{ 
  let bn = await contract.balanceOf(address)
  res.status(200).send(bn)
});

router.post("/getNft", async (req, res) => {
  var rarity = "" + req.body.rarity;
  var ownerAddress = req.body.address;
  var id = req.body.user_id;
  //validate user points

  //remove points from user account

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
  let resTx = await contract.createCollectible(promo.id, ownerAddress, {gasLimit: 3500000});
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

  res.send({
    metadata,
    receipt
  });
});

module.exports = router