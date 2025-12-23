const express = require("express")
const db = require("./config/db")
const usermodel = require("./model/userModel")
const app = express()
app.use(express.json())


app.post("/insert-data", async (req, res) => {
    const data = await usermodel.create(req.body)
    res.send(data)
})

app.get("/", async (req, res) => {
    const user1 = await usermodel.find({})
    res.send(user1)
})
app.delete("/:id", async (req, res) => {
    const id = req.params.id
    const data = await usermodel.findByIdAndDelete(id)
    res.send("Success")
})
app.put("/:id",async(req,res)=>{
    const id = req.params.id
    const data = await usermodel.findByIdAndUpdate(id,req.body,{new:true})
    res.send(data)
})
app.listen(3500, () => {
    console.log("server listen")
})  