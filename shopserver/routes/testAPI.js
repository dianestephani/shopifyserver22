const express = require('express');
const router = express.Router();
import itemList from './items.json';

//2. Via home route, sends message back to client.
router.get('/', function(req, res, next) {
    res.send(itemList);
});

module.exports = router;