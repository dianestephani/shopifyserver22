const express = require('express');
const router = express.Router();
const itemList = require ('./items.json');

//2. Via home route, sends message back to client.
router.get('/', function(req, res, next) {
    res.send(itemList);
});

module.exports = router;