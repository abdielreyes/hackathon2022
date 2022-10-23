const router = require("express").Router();
const User = require("../models/user");
const { registerValidation, loginValidation } = require("./validation");
const verify = require("../routes/verifyToken")

const nftData = require("../data/NFTs.json")
const promos = require("../data/promos.json")

const jwt = require('jsonwebtoken')


router.post("/faucetMoney", verify,async (req, res) => {
    if(!(req.body.amount || req.body.user_id)){
        res.status(400).send("Needed amount and user_id")
    }
      User.findOneAndUpdate({_id:req.body.user_id},
        {$inc:{money:req.body.amount}},
        {new:true},(err,resp)=>{
            if(err){
                console.log(err)
                res.status(400).send("Error updating points")

            }else{
                res.status(200).send(resp);
            }

        })
});

router.post("/faucetPoints", verify,async (req, res) => {
    console.log(req.body)
      User.findOneAndUpdate({_id:req.body.user_id},
        {$inc:{points:(req.body.amount*.10),money:(req.body.amount*-1)}},
        {new:true},(err,resp)=>{
            if(err){
                console.log(err)
                res.status(400).send("Error updating points")
            }else{
                res.status(200).send(resp);
            }

        })
});
router.post("/faucetBalance", verify,async (req, res) => {
      User.findOne({_id:req.body.user_id},(err,resp)=>{
            if(err){
                console.log(err)
                res.status(400).send("Error getting account balance")
            }else{
                res.status(200).send({money:resp.money,points:resp.points});
            }

        })
});
router.post("/get-nft", verify,(req,res)=>{
    var rarity = req.body.rarity;
    var user_id = jwt.verify(req.cookies.token,process.env.TOKEN_SECRET)._id

    User.findById

} )

module.exports = router;