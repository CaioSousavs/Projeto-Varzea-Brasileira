var database = require("../database/config")

function listar(idUsuario) {
    var intrucao = 
    ` select q.acertos as Acertos, q.erro as Erros,
    q.dataRealizada as Data_realizada,  s.nome as Nomes
    from quiz_usuario qu
    inner join usuario s on qu.fk_usuario = s.id
    inner join quiz q on qu.fk_quiz = q.id
    where s.id = ${idUsuario}`;
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