var database = require("../database/config")


function selecionarPonto(fkUsuario) {
    var instrucao = `select pontos from resultado where fkUsuario = ${fkUsuario};`
    return database.executar(instrucao);
}

module.exports = {
    selecionarPonto
}