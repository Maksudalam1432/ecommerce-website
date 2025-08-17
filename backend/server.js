import app from "./app.js"
import dotenv from "dotenv"
import connectdb  from "./database/data.js"



dotenv.config({path:"backend/config/config.env"})
 connectdb()
const PORT=process.env.PORT


 app.listen(PORT , ()=>{
     console.log(`server start on port no http://localhost ${PORT}`)
 })
