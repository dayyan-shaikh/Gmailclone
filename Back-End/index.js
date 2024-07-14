import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';

dotenv.config({});
connectDB();

const app = express();

app.get("/home",(req,res)=>{
    return res.status(200).json({message:"Backend running successfully",success:true});
})

const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`Serving running at ${PORT}`);
})

// mongodb+srv://dayyanshaikh973:s51UtFTSiODEjuDh@cluster0.3ofdsud.mongodb.net/