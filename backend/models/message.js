const mongoose = require('mongoose');

const sendMessage = mongoose.Schema({
    Nom:{type:String , require:true},
    Prénom:{type:String, require:true},
    Email:{type:String, require:true},
    Telephone:{type:String, require:true},
    Message:{type:String , require:true},
    date: { type: Date, default: Date.now },


})
 
module.exports = mongoose.model('Mesg',sendMessage);