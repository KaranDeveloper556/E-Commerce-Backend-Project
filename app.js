//Basic Express Setup
const express = require('express');
const app = express();

//Required Packages - for project
const cookieParser = require('cookie-parser');
const path = require('path');
const expressSession = require('express-session')
const flash = require('connect-flash')

//ENV variables
require('dotenv').config();

//Database Connection
const db = require('./config/mongooseConnection')

//Connection to Router
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/usersRouter')
const owersRouter = require('./routes/ownersRouter')
const productsRouter = require('./routes/productsRouter')

//Basic Express Setup
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET
    })
);
app.use(flash())
app.use(express.static(path.join(__dirname, 'public')));

//Connecting to Routes
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/owners', owersRouter)
app.use('/products', productsRouter)

app.listen(5000)