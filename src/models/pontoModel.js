var database = require("../database/config");

function buscarUltimasMedidasGlobal(limite_linhas) {

    var instrucaoSql = `SELECT nome, max(pontos) AS pontuacao FROM usuario 
                    JOIN resultado ON idUsuario = fkUsuario 
                    GROUP BY idUsuario`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidasGlobal,
 
}

