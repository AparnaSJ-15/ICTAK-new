const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var signupSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    password:{
        type:String
    }
   
});

var signupdata = mongoose.model('signup', signupSchema); 

module.exports = signupdata;