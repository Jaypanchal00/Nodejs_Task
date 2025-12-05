const express = require("express");
const router = express.Router();
const { Register, Login, GetUser, UserPage } = require("../Controller/UserController");

// UI Route — Register Page
router.get("/register", (req, res) => {
    res.render("register");
});

// UI Route — Login Page
router.get("/login", (req, res) => {
    res.render("login");
});
router.get("/list",UserPage)

// API Routes
router.post("/register", Register);
router.post("/login", Login);
router.get("/all", GetUser);

module.exports = router;
