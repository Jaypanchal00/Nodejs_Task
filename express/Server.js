const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded())

var student = []


app.get("/", (req, res) => {
    res.render("home", { student })
})


app.post("/insertData", (req, res) => {
    const { id, name } = req.body
    student.push({ id, name })
    res.redirect("/")   
})
app.get("/delete", (req, res) => {
    const id = req.query.id
    student = student.filter(el => el.id != id)
    res.redirect("/")
})
app.get("/edit", (req, res) => {
    const editData = student.find(el => el.id == req.query.id)
    res.render("edit", { editData })
})
app.post("/editData", (req, res) => {
    const { id, name } = req.body
    student.find(el => el.id == id).name = name
    res.redirect("/")
})


app.listen(3100, () => {
    console.log("Server listen")
})