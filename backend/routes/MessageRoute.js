const express = require('express');
const route = express.Router();
const messageControll = require('../controllers/messageControll')

route.post('/sendMessage',messageControll.sendMessage);
route.get('/list', messageControll.list);
route.post('/reply/:id', messageControll.replyContact);
route.post('/singlecontact/:id',messageControll.singleContact);
route.post('/find', messageControll.findData);

module.exports= route;