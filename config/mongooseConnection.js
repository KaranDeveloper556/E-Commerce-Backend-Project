const mongoose = require('mongoose')

mongoose
    .connect("mongodb://127.0.0.1:27017/e-commerce_backend_project")
    .then(() => console.log('Connected to Database'))
    .catch(Err => console.log('Failed to connect with Database'))

module.exports = mongoose.connection;