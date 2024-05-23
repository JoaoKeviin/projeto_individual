var database = require("../database/config")


function registrarDados(fkUsuario, fkQuiz, pontos) {
    var instrucao = `INSERT INTO resultado (fkUsuario, fkQuiz, pontos) values ('${fkUsuario}','${fkQuiz}','${pontos}')`
    return database.executar(instrucao);
}

module.exports = {
    registrarDados
}