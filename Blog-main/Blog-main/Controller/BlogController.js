const blogdata = require("../BlogModal/Blogmodal")

const adduser = async (req, res) => {
    await blogdata.create(req.body);
    res.redirect("/blog/login")
}

const getUser = async (req, res) => {
    const data = await blogdata.find({});
    res.render("Register", { data })
}

const login = async (req, res) => {
    const { username, password } = req.body;
    const data = await blogdata.findOne({ username: username });

    if (!data) {
        return res.send("User not Fount")
    }
    if (data.password != password) {
        return res.send("Password not match")
    }
    // res.send("successs")
    return res.cookie("data", data.id).redirect("/blogpage")
}


module.exports = {
    adduser,
    getUser,
    login,
}