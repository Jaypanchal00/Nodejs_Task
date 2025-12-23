const express = require("express");
const { blogadd, blogget, deleteblog, editblog, edit } = require("../Controller/Conroller");

const U_router = express.Router();

U_router.post("/", blogadd);
U_router.get("/", blogget)
U_router.get("/delete", deleteblog)
U_router.get("/edit", editblog)
U_router.post("/editdata", edit)

module.exports = U_router