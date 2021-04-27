// const { response } = require('express');
// const message = require('../models/message');
const Mesg = require('../models/message');
const nodemailer = require('nodemailer');
// const moment = require("moment")
const smtpTransport = require('nodemailer-smtp-transport');



//send message
exports.sendMessage = async(req,res)=>{
    try {
        const message =new Mesg({
            ...req.body
        })

        const saved = await message.save();
        if(saved) res.status(201).json({message:'data saved ', message})
           
    } 
    catch (error) {
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

//mail
const transporter = nodemailer.createTransport(
    smtpTransport({
      host: 'smtp.gmail.com',
      auth: {
        type: 'custom',
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    })
  );
  exports.replyContact = async (req, res) => {
    const { id } = req.params;
    const { Message } = req.body;
    // console.log(message);
    try {
      const currentContact = await Mesg.findOne({ _id: id });
      if (currentContact) {
        const mailOptions = {
          from: process.env.EMAIL,
          to: currentContact.Email,
          subject: 'Mail',
          text: Message,
        };
        const envoiMail = await transporter.sendMail(mailOptions);
        if (envoiMail) res.status(200).json('Mail sent');
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  };


//send email 
exports.singleContact = async (req ,res) =>{
  const {id}= req.params;
  try {
    const currentContact = await Mesg.findOne({_id: id});
    if(currentContact) return res.status(200).json(currentContact);
  } catch (error) {
    return res.status(500).json(error);
  }
};



//filtr date & mail
exports.findData = async (req, res) => {
  const { date } = req.body;
  const { Email } = req.body;
  // console.log(date);
  // console.log(new Date(date));
  try {
    if (date && Email) {
      const result = await Mesg.find({ Email, date });
      if (result) return res.status(200).json(result);
    } else if (date && !Email) {
      const result = await Mesg.find({ date });
      if (result) return res.status(200).json(result);
    } else if (!date && Email) {
      const result = await Mesg.find({ Email });
      if (result) return res.status(200).json(result);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};


