var database = require("../configs/database/connection.js")

function cadastrar(representante, razaoSocial, email, telefone, descricao) {
    var instrucao = `
        INSERT INTO prospect (representante, nomeEmpresa, email, telefone, descricao) VALUES ('${representante}', '${razaoSocial}', '${email}', '${telefone}', '${descricao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.execute(instrucao);
}

module.exports = {
    cadastrar
};