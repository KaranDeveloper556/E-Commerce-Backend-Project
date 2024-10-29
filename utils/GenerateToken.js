const JWT = require('jsonwebtoken');

const GenerateToken = (user) => {
    return JWT.sign({ email: user.email, id: user._id }, process.env.JWT_KEY);
}

module.exports.GenerateToken = GenerateToken