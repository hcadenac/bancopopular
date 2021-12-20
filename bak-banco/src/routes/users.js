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

//login usuario
router.post('/login', async (req, res) => {

    const { documento, contrasena } = req.body;

    let user = await userSchema.findOne({
        documento        
    }); 
    
    if (!user)
        return res.status(400).json({
            message: "Usuario no existe"
        });

      const isMatch = await bcrypt.compare(contrasena, user.contrasena);
      if (!isMatch)
        return res.status(400).json({
          message: "contrasena incorrecta"
        });

      const payload = {
        user: {
          id: user.id
        }
     };

     jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: 3600
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token
          });
        }
      );

});

module.exports= router;