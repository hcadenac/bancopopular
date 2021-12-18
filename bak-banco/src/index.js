require("dotenv").config();
const cors = require('cors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require("./routes/users");
const solicitudRoutes = require("./routes/solicituds");
const prorrogaRoutes = require("./routes/prorrogas");
const pagoRoutes = require("./routes/pagos");

app.use(express.json());
app.use(cors());

// Configurar cabeceras y cors
app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//endpoints
app.use('/api', userRoutes);
app.use('/api', solicitudRoutes);
app.use('/api', prorrogaRoutes);
app.use('/api', pagoRoutes);

app.get("/", (req, res) => {
    res.send("....API BANCO POPULAR.........")
});


/////**Conexion a la base de datos ******//////
//const port = process.env.PORT||9000
const port = process.env.APP_PORT
app.listen(port, () => console.log('servidor ejecutando en el puerto ', port));

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
mongoose.connection.once('open', function(){
    console.log('Conexion a MONGODB realizada con exito');
  }).on('error', function(error){
      console.log('Error is: ', error);
  });