var express = require('express');
var router = express.Router();
var dashUserController= require('../controllers/dashUserController');

router.get("/usuario/:id", function (req, res) {
    dashUserController.buscarMedidasUser(req, res);
});

module.exports = router;
