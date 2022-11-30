const express = require('express');
const app = new express();
require('./middleware/mongodb') //to init mongoDB

const cors = require('cors');
const path = require('path');
var bodyparser = require('body-parser');
var cors=require("cors");

const logger = require('morgan') // for seeing api calls in terminal
app.use(logger('dev'))

//Express Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname +"/FrontEnd")));

//api

const api = require('./api')
app.use('/api',api)













//connection to server
const PORT=3000;
app.listen(PORT, function() {
    console.log(`listening to port ${PORT}`);
});