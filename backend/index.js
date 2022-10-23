const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const metadataRoutes = require('./routes/metadata')
const userRoutes = require('./routes/user')
const accountRoutes = require('./routes/account')
const blockchainRoutes = require('./routes/blockchain')
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
	credentials:true,
	origin:"*"
}));

mongoose.connect(process.env.DB_CONNECT,(err)=>{ 
	if(err){
		console.log(err);
	}else{
		console.log('Connected to Mongo!!!');
	}
})


const PORT = 8080
app.get('/',(req,res)=>{
	res.send("Hi!")
})
app.use('/api/metadata', metadataRoutes);
app.use('/api/blockchain',blockchainRoutes);
app.use('/api/user', userRoutes);
app.use('/api/account',accountRoutes);

app.listen(PORT,()=>{
	console.log(`Server in ${PORT}`)
})
