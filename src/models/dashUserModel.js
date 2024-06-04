var database = require("../database/config");

function buscarMedidasUser(idUsuario) {

    var instrucaoSql = `SELECT nome, pontos AS pontuacao
    FROM usuario 
    JOIN resultado ON usuario.idUsuario = resultado.fkUsuario
    WHERE usuario.idUsuario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarMedidasUser,
 
}