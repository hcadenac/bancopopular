const mongoose = require("mongoose");

const pagoSchema= mongoose.Schema({
    documento:{
        type:Number,
        required:true
    },
    fecha:{
        type:Date,
        required:true
    },
    referencia:{
        type:Number,
        required:true
    },
    valor:{
        type:Number,
        required:true
    }
});

module.exports= mongoose.model('pago', pagoSchema);