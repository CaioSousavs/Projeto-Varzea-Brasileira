var quizModel = require("../models/quizModel");

function listar(req, res) {
    quizModel.listar().then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function Pizza(req, res) {
    var idUsuario = req.params.idUsuario

    quizModel.Pizza(idUsuario).then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function conferir(req, res) {
    var idUsuario = req.params.idUsuario

    quizModel.conferir(idUsuario).then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar (req, res) {
    console.log("ENTROU NO CADASTRAR")
    var idUsuario = req.body.idUsuarioServer;
    var pontos = req.body.pontosServer;
    var erros = req.body.errosServer;

    console.log("ID USUARIO: " + idUsuario);
    console.log("PONTOS :" + pontos)


    if(pontos == undefined || erros == undefined){
        res.status(400).send("Sua Pontuação nãõ foi definida")
    }

    quizModel.cadastrar(pontos, erros, idUsuario).then(function(resposta){
        res.status(200).send("Pontos inseridos com sucesso");
    }).catch(function(erro){
        console.log(erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    Pizza,
    conferir,
    cadastrar
}