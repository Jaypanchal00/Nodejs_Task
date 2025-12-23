const express = require("express");
const app = express();
const db = require("./config/db");
const B_router = require("./Router/BlogRouter");
const U_router = require("./Router/Router");


app.use(express.urlencoded())
app.use("/blog", B_router);
app.use("/blogpage", U_router)
app.set("view engine", "ejs")

app.listen(4000, () => {
    console.log("Server Listen");
})