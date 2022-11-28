const express = require('express');
const app = new express();
const logindata = require('./src/Model/login');

const cors = require('cors');
// const jwt = require('jsonwebtoken');
const path = require('path');
var bodyparser = require('body-parser');


app.use(cors());
app.use(bodyparser.json())


const PORT=3000;
app.listen(PORT, function() {
    console.log(`listening to port ${PORT}`);
});