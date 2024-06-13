var prospectModel = require("../models/prospectModel.js")

function cadastrar(req, res) {
    representante = req.body.representanteServer;
    email = req.body.emailServer;
    descricao = req.body.descricaoServer;
    razaoSocial = req.body.razaoSocialServer;
    telefone = req.body.telefoneServer;

    // Faça as validações dos valores
    if (representante == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (descricao == undefined) {
        res.status(400).send("Sua descricao está undefined!");
    } else if (representante == undefined){
        res.status(400).send("Representante está undefined!")
    } else if (razaoSocial == undefined){
        res.status(400).send("Razão social está undefined!")
        
    } else if (telefone == undefined){
        res.status(400).send("Telefone está undefined!")
    }else{

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        prospectModel.cadastrar(representante, razaoSocial, email, telefone, descricao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

module.exports = {
    cadastrar
}