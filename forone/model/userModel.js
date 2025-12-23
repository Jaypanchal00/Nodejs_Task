const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    }
})

const usermodel = mongoose.model("user", userSchema)

module.exports = usermodel