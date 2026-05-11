var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const now = new Date();
    res.json({
        fecha: now.toLocaleDateString(),
        hora: now.toLocaleTimeString()
    });
});

module.exports = router;