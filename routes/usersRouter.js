//User Route Setup
require('dotenv').config();
const express = require('express');
const router = express.Router();

const { registerUser, loginUser, logoutuser } = require('../controllers/authController');

router.get('/', (req, res) => {
    res.send('hey bother its working user')
})

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/logout', logoutuser)

module.exports = router