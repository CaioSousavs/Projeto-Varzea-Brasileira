var database = require("../database/config")

function listar(idUsuario) {
    var intrucao = 
       `select u.nome, q.pontuacao, q.erros
    from quiz q
    inner join usuario u on u.id = q.fk_usuario;`;
    console.log("Executando a instrução SQL: \n" + intrucao);
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
    listar
};