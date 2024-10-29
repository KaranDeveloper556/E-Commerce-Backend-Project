const JWT = require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports = async (req, res, next) => {
    if (!req.cookies.token) {
        req.flash('error', "you need to login first")
        return res.redirect('/')
    }

    try {
        let decoded = JWT.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await userModel
            .findOne({ email: decoded.email })
            .select("-password");
        req.user = user;
        next()
    } catch (erro) {
        req.flash('error', "something went wrong")
        res.redirect('/')
    }
}