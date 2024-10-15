 import mongoose from "mongoose";
 import express from "express"
 import router from "./route.js";
 
import cors from "cors";

 const  PORT =process.env.port||6990;
 const app=express();
 const mongoDb=`mongodb://localhost:27017`;
 app.use(express.json());
 app.use(cors());
 async function connection() {
        try{
        const conn=await mongoose.connect(mongoDb);
        console.log(`we are connected ${conn.connection.host}`)
        }
        catch(e)
        {
            console.log(e);
        }
    }
    app.use("/api/auth",router)
    
 
    connection()
  .then(()=>
    {
        app.listen(PORT,()=>
        {
            console.log(`we  are on port ${PORT}`)
        })
    })
    .catch((error)=>
    {
        console.log(401," some problem occured while coonecting to database"+" "+error)
    })