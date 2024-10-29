//User Route Setup
const express = require('express');
const router = express.Router();

const upload = require('../config/multer-config');
const productModel = require('../models/product-model')

router.post('/create', upload.single("image"), async (req, res) => {
    try {
        let { productName, price, Discount, bgColor, panelColor, textColor } = req.body

        let product = await productModel.create({
            images: req.file.buffer,
            productName,
            price,
            Discount,
            bgColor,
            panelColor,
            textColor
        })
        req.flash('success', "Product saved Successfully")
        res.redirect('/owners/admin')
    } catch (err) {
        res.send("Can't able to make the product")
    }
})

module.exports = router