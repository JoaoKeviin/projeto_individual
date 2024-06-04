var dashUserModel = require("../models/dashUserModel");

function buscarMedidasUser(req, res) {

  var idUsuario = req.params.id;

    // var idAquario = req.params.idAquario;

    console.log(`Recuperando os dados do usuário com ID ${idUsuario}`);

    dashUserModel.buscarMedidasUser(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    buscarMedidasUser,
    //buscarMedidasEmTempoReal

}