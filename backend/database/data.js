
import mongoose from "mongoose";
import dotenv from "dotenv"

 const connectdb =()=>{

     mongoose.connect(process.env.DB_MODEL).then((data)=>{
        console.log("data can be connected succesfully")
     }).catch ((error)=>{
         console.log("data connect failed",error)
     })
 }

 export default connectdb
