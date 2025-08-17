
import express from "express"
 const app=express();
 import product from "./routs/productroute.js"
 app.use(express.json())

app.use("/api/v1", product)

 export default app;