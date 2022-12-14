const express=require('express');
const router = express.Router(); 
const {upload} =require('../middlewares/upload')
const RequireData = require("../src/Model/requirement");

router.get("/api/requirements", (req, res) => {
    RequireData.find((error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    });
  });
router.post('/api/uploadfile',upload.single('file'), async (req, res) => {
    try{
        
        const file = new RequireData({
            name: req.body.name,
            area: req.body.area,
            institution: req.body.institution,
            category:req.body.category,
            no_of_hours:req.body.no_of_hours,
          reference:req.file.originalname
        });
        await file.save();
        res.status(201).send('File Uploaded Successfully');
        console.log(file)
    }catch(error) {
        res.status(400).send(error.message);
    }
})

router.get("/search/:name",async(req,res,next)=>{
  let name=req.params.name
  console.log(req.params.name)
  RequireData.find({name:name})
  .then(result=>{
      res.status(200).json(result)
  })
  .catch(err=>{
      console.log(err)
      res.status(500).json(err)
  })
})

  module.exports = router
  