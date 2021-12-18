const { text } = require("express");
const mongoose = require("mongoose");

const prorrogaSchema= mongoose.Schema({
    documento:{
        type:Number,
        required:true
    },
    valor:{
        type:Number,
        required:true
    },
    cuotas:{
        type:Number,
        required:true
    },
    razon:{
        type:String,
        required:true
    }
});

module.exports= mongoose.model('prorroga', prorrogaSchema);