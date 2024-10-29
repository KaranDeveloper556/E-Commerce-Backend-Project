//User Route Setup
const express = require('express');
const router = express.Router();

const ownerModels = require('../models/owner-models');

if (process.env.NODE_ENV === 'development') {
    router.post('/create', async (req, res) => {
        let Owner = await ownerModels.find();
        if (Owner.length > 0) {
            res.send(503).send('Wanted Error Oucccur')
        }

        let(fullName, email, passward) = req.body;
        let createdOwner = await ownerModels.create({
            fullName: 'sdhfkjhsdf',
            email: 'sdfds',
            passward: 'sdfsdf'
        })
        res.status(201).send(createdOwner)
    })
}


router.get('/admin', (req, res) => {
    let success = req.flash('success');
    res.render('createproducts', { success })
})

module.exports = router;