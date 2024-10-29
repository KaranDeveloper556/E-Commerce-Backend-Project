const mongoose = require('mongoose')

let UserSchema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    contact: Number,
    Profile_avtar: String,
    cart: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model("user", UserSchema)