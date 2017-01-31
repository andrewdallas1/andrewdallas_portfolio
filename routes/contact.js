var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('../views/contact.ejs');
});


module.exports = router;
