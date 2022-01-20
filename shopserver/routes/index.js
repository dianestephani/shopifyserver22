var express = require('express');
var router = express.Router();


module.exports = (router) => {
  router
    .get("/", (req, res) => res.send("GET"))
    .post("/", (req, res) => res.send("POST"))
    .delete("/", (req, res) => res.send("DELETE"));

  return router;
};
