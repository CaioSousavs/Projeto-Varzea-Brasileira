var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
  var email = req.body.email;
  var senha = req.body.senha;

  if (!email || !senha) {
    res.status(400).send("Email ou senha não fornecidos!");
  } else {
    usuarioModel.autenticar(email, senha)
      .then(resultado => {
        if (resultado.length === 1) {
          res.json(resultado[0]);
        } else if (resultado.length === 0) {
          res.status(403).send("Email ou senha inválidos");
        } else {
          res.status(500).send("Mais de um usuário com as mesmas credenciais");
        }
      })
      .catch(erro => {
        console.log("Erro ao autenticar usuário:", erro.sqlMessage , erro);
        res.status(500).json(erro.sqlMessage || erro);
      });
  }
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;
    var fk_jogador = req.body.fk_jogador;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (fk_jogador == undefined) {
        res.status(400).send("Seu jogador a vincular está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, fk_jogador)
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
    autenticar,
    cadastrar
}