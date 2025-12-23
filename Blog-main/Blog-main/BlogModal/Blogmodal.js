const mongoose = require("mongoose");
const blog = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
})

const blogdata = mongoose.model("blogmodel", blog);
module.exports = blogdata