var resultadoModel = require("../models/resultadoModel");

function registrarDados(req, res){
    var pontos = req.body.scoreServer
    var fkUsuario = req.params.fkUsuario
    var fkQuiz = req.body.quizServer
    
    console.log(`Pontos aqui` + pontos)
    resultadoModel.registrarDados(fkUsuario, fkQuiz, pontos)
    .then(
        function (resultado) {
            res.status(201).send({})
        }
    )
}

module.exports = {
    registrarDados
}