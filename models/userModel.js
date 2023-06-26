const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the user name"]
    },
    email: {
        type: String,
        required: [true, "Please add the users email address"],
        unique: [true, "The email address is taken"]
    },
    password: {
        type: String,
        required: [true, "Please add the user password"]
    },
},{
    timestamps: true
})

module.exports = mongoose.Model("User",userSchema)