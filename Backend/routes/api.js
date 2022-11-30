const express = require('express')
const router = express.Router() //routing function
const jwt = require('jsonwebtoken');

const logindata = require('../src/Model/login');
const signupdata = require('../src/Model/signup');

function verifyToken(req,res,next){
    console.log("🚀 ~ file: app.js ~ line 38 ~ verifyToken ~ req.headers.authorization", req.headers.authorization)
    if(!req.headers.authorization)
    {
        return res.status(401).send("UnAuthorized Request")

    }
    let token = req.headers.authorization.split(' ')[1];
    if(token === "null")
    {
        return res.status(401).send("UnAuthorized Request")
    }
    let payload = jwt.verify(token,"secretkey")
    console.log("🚀 ~ file: app.js ~ line 49 ~ verifyToken ~ payload", payload)
    if(!payload)
    {   
        return res.status(401).send("UnAuthorized Request");
        
    }
    req.userId = payload.subject;
    console.log(req.userId);
    next();
}

//signup
router.post('/signup',async(req,res)=>{
 res.header("Access-Control-Allow-Origin","*");
 res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH");
var user ={
    username: req.body.user.username,
    password: req.body.user.password
}    

var user = new signupdata(user);
const saveduser=await user.save();
console.log('saved data : ',saveduser)
})
router.get('/signuplist',(req,res)=>{
    try{
            signupdata.find().then(function(data){
            res.send(data);
        })
    }
    catch(error){
        console.log(error)
    }
})



//login
router.post((req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH");
    let name = req.body.user.username;
    let password = req.body.user.password;
    logindata.findOne({username:req.body.user.username, password:req.body.user.password},(err,user)=>{
        if(err)
        console.log(err)
         if(user)
             {
            let payload = {subject:name+password};
            let token = jwt.sign(payload,"secretkey");
            console.log("🚀 ~ file: app.js ~ line 104 ~ logindata.findOne ~ token", token)
            console.log("🚀 ~ file: app.js ~ line 104 ~ logindata.findOne ~ payload", payload)
            console.log(token);
            res.send();
        }
        else
        res.status(401).json({
            message:"Invalid credentials"
        });
    });
})



module.exports = router