const express = require('express');
const Model = require('../models/userModel');


const router = express.Router();

router.post('/add', (req, res) => {
  console.log(req.body);
  new Model(req.body).save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    })

});
//getall
router.get('/getall',(req, res) => {
  Model.find()
    .then((result) => {
      res.status(200).json(result);

    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);

    });

});
router.get('/getbycity/:city', (req, res) => {
  Model.find()
    .then((result) => {
      res.status(200).json(result);

    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

})
//getbyid
router.get('/getbyid/:id', (req, res) => {
  Model.findById()
   .then((result) => {
    res.status(200).json(result);
    
   }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
   });
});

//delete
router.delete('/delete/:id', (req, res) => {
  Model.findByIdAndDelete()
  .then((result) => {
    res.status(200).json(result);
    
   }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
   });
});

//update
router.put('/update/:id', (req, res) => {
  Model.findByIdAndUpdate()
  .then((result) => {
    res.status(200).json(result);
    
   }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
   });
 
});



module.exports = router;