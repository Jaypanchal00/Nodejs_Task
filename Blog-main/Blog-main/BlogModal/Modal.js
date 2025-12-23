const mongoose = require("mongoose");
const blog = mongoose.Schema({
    username: {
        type: String
    },
    password:{
        type:String
    },
    age: {
        type: String
    },
    sport: {
        type: String
    },
    gender: {
        type: String
    },
    mobile: {
        type: Number
    }
})

const userdata = mongoose.model("personaldata", blog);
module.exports = userdata