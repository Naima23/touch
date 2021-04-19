// const { response } = require('express');
// const message = require('../models/message');
const Mesg = require('../models/message');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

let transporter = nodemailer.createTransport(smtpTransport({
    host: 'smtp.gmail.com', 
    auth: { 
        type:'custom',
         user: process.env.EMAIL,
         pass: process.env.PASS,
    }
}));

//send message
exports.sendMessage = async(req,res)=>{
    try {
        const message =new Mesg({
            ...req.body
        })

        const saved = await message.save();
        if(saved) res.status(201).json({message:'data saved ', message})
        
//sned email
        const mailOptions = {
            from: process.env.EMAIL,
            to: req.body.Email,
            subject: 'reponse',
            html: `<div><h1> Hello 😎:</h1><p>This is response from server!</p></div>`
          };
        return transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
                
              console.log('Email sent: ' + info.response);

            }
          });

        
    } catch (error) {
        return res.status(500).json({err:'error server'})
    }
}

//Sow the list of message
exports.list = (req, res ,next)=>{
    Mesg.find()
    .then(response => {res.json({response})
    })
    .catch(error =>{
        res.json({message:error})
    })
}


