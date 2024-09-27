//User Route Setup
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hey bother its working products')
})

module.exports = router