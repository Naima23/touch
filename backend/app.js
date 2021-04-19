require('dotenv').config()
const express = require('express');
const app = express();
const port = 3011;
const mongoose = require('mongoose');
const MessageRoute = require('./routes/MessageRoute');

app.use(express.json()); // for data json
app.use(express.urlencoded({extended:false})); // for  data http

mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>console.log('connection success'))
.catch(()=>console.log('error connection'))

app.use('/api',MessageRoute);


app.listen(port ,()=> console.log('http://localhost:'+port));