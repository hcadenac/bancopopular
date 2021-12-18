const mongoose = require("mongoose");
const solicitudSchema= mongoose.Schema({
    documento:{
        type:Number,
        required:true
    },
    valor:{
        type:Number,
        required:true
    },
    tiempo:{
        type:Number,
        required:true
    }
});

module.exports= mongoose.model('solicitud', solicitudSchema);