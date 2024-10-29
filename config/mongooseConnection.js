require('dotenv').config();

const mongoose = require('mongoose');
const config = require('config');

const Debugger = require('debug')("development:mongoose")

mongoose
    .connect(`${config.get("MONGO_DB_URI")}/e-commerce_backend_project`)
    .then(() => Debugger('Connected to Database'))
    .catch(Err => Debugger('Failed to connect with Database'))

module.exports = mongoose.connection;