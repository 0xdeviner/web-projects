const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the Username"]
    },
    email: {
        type: String,
        required: [true, "Please add the email address"],
        unique: [true, "Email address already taken"],
    },
    password: {
        type: String,
        required: [true, "Please add the user password"]
    }
},{
    timestamps: true
})

module.exports = mongoose.model("Users", UserSchema);