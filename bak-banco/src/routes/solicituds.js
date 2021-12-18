const express = require("express");
const solicitudSchema = require("../models/solicitud");
const router = express.Router();

//crear usuario
router.post('/solicituds', (req, res)=>{
    const user= solicitudSchema(req.body);
    user
    .save()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))  
});

//obtener  usuarios
router.get('/solicituds', (req, res)=>{
    solicitudSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))  
});

module.exports= router;