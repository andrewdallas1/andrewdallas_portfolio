var express = require('express');
var router = express.Router();
const emailHelper = require('../emails/mailHelper');
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
  res.render('../views/contact.ejs');
});

router.post('/sendMail', emailHelper.handleSayHello ,(req, res, next) => {
  console.log('trying')

  res.redirect('/');
});

module.exports = router;
