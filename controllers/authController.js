const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const userModel = require('../models/user-model');
const { GenerateToken } = require('../utils/GenerateToken');

module.exports.registerUser = async (req, res) => {
    try {
        let { fullName, email, password } = req.body;

        let user = await userModel.findOne({ email: email })
        if (user) return res.sendStatus(401)

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) return console.log(err.message)
                else {
                    let newUser = await userModel.create({
                        fullName,
                        email,
                        password: hash
                    })
                    let token = GenerateToken(newUser)
                    res.cookie('token', token)
                    res.send('User Created')
                }
            })
        })

    }
    catch (err) {
        console.log(err.message)
    }
}

module.exports.loginUser = async (req, res) => {
    let { email, password } = req.body

    let User = await userModel.findOne({ email: email })
    if (!User) return res.send('Email or password incorrect')

    bcrypt.compare(password, User.password, (err, result) => {
        if (result) {
            let token = GenerateToken(User)
            res.cookie('token', token)
            res.send('You log in')
        } else {
            return res.send('Not found')
        }
    })
}

module.exports.logoutuser = async (req, res) => {
    res.cookie('token', '')
    res.redirect('/')
}