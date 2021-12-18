const express = require("express");
const pagoSchema = require("../models/pago");
const router = express.Router();

//crear pago
router.post('/pagos', (req, res)=>{
    const user= pagoSchema(req.body);
    user
    .save()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))  
});

//obtener  pagos
router.get('/pagos', (req, res)=>{
    pagoSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))  
});

module.exports= router;