var pontoModel = require("../models/pontoModel");

function selecionarPonto(req, res){
    var pontos = req.body.scoreServer
    var fkUsuario = req.body.fkUsuario

    
    console.log(`Pontos aqui` + pontos)
    pontoModel.selecionarPonto(fkUsuario, pontos)
    .then(
        function (resultado) {
            res.status(201).send({})
        }
    )
}

module.exports = {
    selecionarPonto
}