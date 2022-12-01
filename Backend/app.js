const express = require('express');
const mongoose = require('mongoose');
const app = new express();
require('./middleware/mongodb') //to init mongoDB

const cors = require('cors');

var bodyparser = require('body-parser');


const logger = require('morgan') // for seeing api calls in terminal
app.use(logger('dev'))

//Express Middlewares
app.use(cors());//to connect frontend and backend without any disturbance
app.use(express.json());
app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}));


//api

const api = require('./routes/api');
app.use('/api',api);
const requirement = require('./routes/requirement');
app.use('/requirement',requirement);
//connection to server
const PORT=3000;
app.listen(PORT, function() {
    console.log(`listening to port ${PORT}`);
});

//frontend connection

const path = require('path');
app.use(express.static(path.join(__dirname +"/FrontEnd")));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/FrontEnd/index.html'));
    });