var database = require("../database/config")

function listar() {
    var instrucao = 
   `select u.nome, q.pontuacao
from quiz q
inner join usuario u on u.id = q.fk_usuario;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function Pizza(idUsuario) {
    var instrucao = 
   ` select u.nome, q.acertos as Acertos, q.erros as Erros
 from quiz q 
 inner join usuario u on u.id = q.fk_usuario
 where u.nome = '${idUsuario}'  `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function conferir(idUsuario) {
    var instrucao = 
   `select * from quiz where fk_usuario = ${idUsuario};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrar(pontos, erros, idUsuario) {
    
    var instrucao = 
    `insert into quiz (acertos, erros, pontuacao, data_realizada, fk_usuario)
    values (${pontos}, ${erros}, ${pontos}, NOW(), ${idUsuario});`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar, 
    Pizza,
    listar,
    conferir
};