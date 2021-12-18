const express = require("express");
const userSchema = require("../models/user");
const router = express.Router();

//crear usuario
router.post('/users', (req, res)=>{
    const user= userSchema(req.body);
    user
    .save()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))  
});

//obtener  usuarios
router.get('/users', (req, res)=>{
    userSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))  
});

//obtener  usuario especifico
router.get('/users/:id', (req, res)=>{
    const {id}= req.params;
    userSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))  
});


//actualizar usuario
router.put('/users/:id', (req, res)=>{
    const {id}= req.params;
    const {nombre, tipodoc, documento, nacimiento, expedicion, ingresos, egresos }= req.body;
    userSchema
    .updateOne({_id:id},{$set:{nombre, tipodoc, documento, nacimiento, expedicion, ingresos, egresos}})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))  
});

//eliminar usuario
router.delete('/users/:id', (req, res)=>{
    const {id}= req.params;
    userSchema
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))  
});
module.exports= router;