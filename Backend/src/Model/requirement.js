const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RequireSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    institution:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    no_of_hours:{
        type:Number,
        required:true
    },
    reference:{
        data: Buffer,
        contentType: String,
       
    },
    comments:{
        type:String,
        required:true
    },
    file: {
        data: Buffer,
        contentType: String,
      
    }

})


let RequireData = mongoose.model('requirements', RequireSchema)

module.exports = RequireData