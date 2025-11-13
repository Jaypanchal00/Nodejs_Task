const express = require("express")
const db =  require("./config/db")
const app = express()

app.listen(8900,()=>{
    console.log("server listen")
})