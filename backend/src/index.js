 import express from "express";
 import cors from "cors";
//  import "dotenv/config"
import dotenv from "dotenv";

dotenv.config({ path: "./src/.env" });

//debugging :(
// console.log("Keys:", Object.keys(process.env).filter(x =>
//   x.includes("MONGO") || x.includes("PORT")
// ));

// console.log(result);

import User from "./models/user.model.js"
import {connectDB} from "./lib/db.js"

 const app=express();

 const PORT = process.env.PORT
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(express.json())

app.use(cors({origin:FRONTEND_URL, credentials:true}))

app.use(clerkMiddleware())

 app.get("/health",(req,res)=>{
    res.status(200).json({ok:true})
 })

 app.listen(PORT,()=>{
    connectDB();
    console.log("Server is up and running on port:",PORT)
 });