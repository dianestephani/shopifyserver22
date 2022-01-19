var express = require('express');
var router = express.Router();
// const itemList = require ('./items.json');

//This file will have the routes

/* GET home page. */
// router.get('/', function(req, res) {
//   // res.render('index', { title: 'Express' });
//   res.send(itemList);
// });



module.exports = (router) => {
  router
    .get("/", (req, res) => res.send("GET"))
    .post("/", (req, res) => res.send("POST"));

  return router;
};
