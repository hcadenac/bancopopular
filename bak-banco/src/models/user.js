const mongoose = require("mongoose");
const userSchema= mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    tipodoc:{
        type:String,
        required:true
    },
    documento:{
        type:Number,
        required:true
    },
    nacimiento:{
        type:Date,
        required: true
    },
    expedicion:{
        type:Date,
        required: true
    },
    ingresos:{
        type:Number,
        required:true
    },
    egresos:{
        type:Number,
        required:true
    }
});

module.exports= mongoose.model('User', userSchema);