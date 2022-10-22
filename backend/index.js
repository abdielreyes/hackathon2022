const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors')
const dotenv = require('dotenv')
const userRoutes = require('./routes/user.js')

dotenv.config()
app.use(express.json())
app.use(cors());


mongoose.connect(process.env.DB_CONNECT,(err)=>{ 
	if(err){
		console.log(err);
	}else{
		console.log('Connected to Mongo!!!');
	}
})


const PORT = 8080

app.get('/api/',(req,res)=>{
	res.send(200).json({message:'welcome to dinohacks server'})
})
app.get('/api/user', userRoutes);


app.listen(()=>{
	console.log(`Server in ${PORT}`)
})
