const express = require("express");
const prorrogaSchema = require("../models/prorroga");
const router = express.Router();

//crear prorroga
router.post('/prorrogas', (req, res)=>{
    const user= prorrogaSchema(req.body);
    user
    .save()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))  
});

//obtener  prorrogas
router.get('/prorrogas', (req, res)=>{
    prorrogaSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))  
});

module.exports= router;