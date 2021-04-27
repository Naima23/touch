const mongoose = require('mongoose');

const d = new Date();
let month = d.getMonth() + 1;
if (month < 10) month = `0${month}`;
const dt = `${d.getFullYear()}-${month}-${d.getDate()}`;

const sendMessage = mongoose.Schema({
 
    Nom:{type:String , require:true},
    Prenom:{type:String, require:true},
    Email:{type:String, require:true},
    Telephone:{type:String, require:true},
    Message:{type:String , require:true},
    date: { type: String, default: dt  },


})
 
module.exports = mongoose.model('Mesg',sendMessage);
