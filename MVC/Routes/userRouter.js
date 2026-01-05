const express = require("express");
const router = express.Router();
const { Register, Login, GetUser, UserPage, local,verifyToken } = require("../Controller/UserController");
const passport = require("passport");

router.get("/register", (req, res) => {
    res.render("register");
});

router.get("/login", (req, res) => {
    res.render("login");
});
router.get("/list",UserPage)

router.post("/register", Register);
router.post("/login", Login);

router.get("/all", GetUser);
router.post("/local", passport.authenticate("local"), local)
router.post("/verify",verifyToken)

module.exports = router;





























