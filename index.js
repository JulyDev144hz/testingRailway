import express from "express"
import { config } from "./config.js"
const app = express()

app.get('/',(req,res)=>{
   res.send("HOLA MUNDO") 
})

app.listen(config.PORT, ()=>{
    console.log("http://localhost:"+config.PORT)
})