const express = require("express");
const { adduser, getUser, login } = require("../Controller/BlogController");

const B_router = express.Router();

B_router.post("/register", adduser);
B_router.get("/", getUser);
B_router.post("/login", login);
B_router.get("/login", (req, res) => {
    res.render("Login")
})
module.exports = B_router