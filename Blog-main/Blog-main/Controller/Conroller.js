const userdata = require("../BlogModal/Modal");

const blogadd = async (req, res) => {
    await userdata.create(req.body);
    res.redirect("/blogpage")
}

const blogget = async (req, res) => {
    const data = await userdata.find({});
    res.render("Blog", { data })
}

const deleteblog = async (req, res) => {
    const id = req.query.id
    await userdata.findByIdAndDelete(id);
    res.redirect("/blogpage")
}

const editblog = async (req, res) => {
    const id = req.query.id;
    const data = await userdata.findById(id);
    res.render("edit", { data })
}

const edit = async (req, res) => {
    const id = req.body.id;
    const data = await userdata.findByIdAndUpdate(id, req.body);
    res.redirect("/blogpage")
}

module.exports = {
    blogadd,
    blogget,
    deleteblog,
    editblog,
    edit
}