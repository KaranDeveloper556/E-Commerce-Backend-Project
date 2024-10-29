const mongoose = require('mongoose')

let ProductSchema = mongoose.Schema({
    images: Buffer,
    productName: String,
    price: Number,
    Discount: {
        type: Number,
        default: 0
    },
    bgColor: String,
    panelColor: String,
    textColor: String
})

module.exports = mongoose.model("products", ProductSchema)