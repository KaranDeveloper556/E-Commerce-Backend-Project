const mongoose = require('mongoose')

let OwnerSchema = mongoose.Schema({
    fullName: String,
    email: String,
    passward: String,
    contact: Number,
    Profile_avtar: String,
    gstNumber: Number,
    products: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model("owner", OwnerSchema)