const mongoose = require('mongoose')

let ProductSchema = mongoose.Schema({
    images: String,
    productName: String,
    price: Number,
    Discount: {
        type: Number,
        default: 0
    },
    bgColor: String,
    panalColor: String,
    textColor: String
})

module.exports = mongoose.model("products", ProductSchema)