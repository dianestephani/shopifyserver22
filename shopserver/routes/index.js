var express = require('express');
var router = express.Router();

//This file will have the routes

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('Responding to home route call')
});



module.exports = router;
