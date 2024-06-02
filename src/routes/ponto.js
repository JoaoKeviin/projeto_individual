var express = require('express');
var router = express.Router();
var pontoController = require('../controllers/pontoController');

router.get("/ultimas/", function (req, res) {
    pontoController.buscarUltimasMedidasGlobal(req, res);
});

module.exports = router;
