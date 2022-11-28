const mongoose = require('mongoose');

const dbUrl = "mongodb+srv://Maya1994:Maya1994@cluster0.je1xiwd.mongodb.net/project?retryWrites=true&w=majority";
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(dbUrl, connectionParams)
    .then(() => {
        console.log("login Database connected");
    })
    .catch(() => {
        console.log("error");
    })
const Schema = mongoose.Schema;

var loginSchema = new Schema({
   
});

var logindata = mongoose.model('login', loginSchema); 

module.exports = logindata;