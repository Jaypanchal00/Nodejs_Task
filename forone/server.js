const express = require("express")
const db = require("./config/db")
const usermodel = require("./model/userModel")
const app = express()
app.use(express.json())


app.post("/insertData",async(req,res)=>{
    const data = await usermodel.create(req.body)
    res.send(data)
})


app.delete("/:id",async(req,res)=>{
    const id =  req.params.id
    const data = await usermodel.findByIdAndDelete(id)
    res.send("success")
})


app.patch("/:id",async(req,res)=>{
    const id =  req.params.id
    const data = await usermodel.findByIdAndUpdate(id,req.body)
    res.send(data)
})
app.get("/",async(req,res)=>{
    const user1 =await usermodel.find({})
    res.send(user1)
})
app.listen(3500,()=>{
    console.log("Server listen")
})