const express=require('express');
const router = express.Router() 
const multer = require('multer');
const path = require('path');

const RequireData = require("../src/Model/requirement");

var storage =   multer.diskStorage({  
    destination: function (req, file, callback) {  
      callback(null, './upload');  
    },  
    filename: function (req, file, callback) {  
      callback(null, file.originalname);  
    }  
  });  
var upload = multer({ storage : storage,fileFilter: function (req, file,cb){var filetypes = /pdf|doc|xls/;
var mimetype = filetypes.test(file.mimetype);
  
var extname = filetypes.test(path.extname(
            file.originalname).toLowerCase());
            if (mimetype && extname) {
                return cb(null, true);
            }
          
            cb("Error: File upload only supports the "
                    + "following filetypes - " + filetypes);

}
});  

router.get("/api/requirements", (req, res) => {
    RequireData.find((error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    });
  });
 router.post('/api/uploadfile', upload.array('myfile'), function (req, res) {
    const { name, area,institution,category,no_of_hours } = req.body;
  let data=req.body;
    const uploadInfo = req.files.map(file => {
      return {data,
        sourceName: file.originalname,
        newName: file.filename
      };
    });
    res.send(uploadInfo);
  });
  module.exports = router
  