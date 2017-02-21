var express = require('express');

var nodemailer = require('nodemailer');

var router = express.Router();

require('dotenv').config();


function handleSayHello(req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'andrew.dallas.portfolio@gmail.com',
            pass: process.env.PASS
        }
    });
    var mailOptions = {
    from: req.body.email,
    to: 'adal1@live.com',
    subject: req.body.subject,
    text: req.body.message
  };
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
  });
  return next();
}

module.exports = {
  handleSayHello
}
