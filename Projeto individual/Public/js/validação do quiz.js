const pergunta = [
    {
        pergunta :' O futebol de várzea é importante para:',
        respostas: [
        { id: 1, text: 'Jovens e crianças', correct:false},
        { id: 2, text: 'Adultos e Jogadores', correct:false} ,  
        { id: 3, text: 'Para todo mundo', correct:false} , 
        { id: 4, text: 'População periferica', correct:true}  
     ] 
    },
    {
        pergunta :'Quem organiza e mantém os campos e times de várzea?',
        respostas: [
        { id: 1, text: 'Prefeitura', correct:false},
        { id: 2, text: 'Clubes de futebol', correct:false} ,  
        { id: 3, text: 'Federação de Brasileira de Futebol', correct:false} , 
        { id: 4, text: 'Comunidade e voluntarios', correct:true}  
     ] 
    },
    {
        pergunta :' Qual desses jogadores profissionais vinheram da várzea?',
        respostas: [
        { id: 1, text: 'Neymar Jr', correct:false},
        { id: 2, text: 'ADavid Luiz', correct:true} ,  
        { id: 3, text: 'Gabi Gol', correct:false} , 
        { id: 4, text: 'Adriano imperador', correct:false}  
     ] 
    },
    {
        pergunta :'É possivel viver da várzea?',
        respostas: [
        { id: 1, text: 'Não, pois jogadores da várzea não ganham nada por jogo', correct:false},
        { id: 2, text: 'Sim, muitos jogadores vivem do dinheiro da várzea', correct:true} ,  
        { id: 3, text: 'Não, a várzea paga muito pouco', correct:false} , 
        { id: 4, text: 'Sim, todos eles ficam são ricos', correct:false}  
     ] 
    },
    {
        pergunta :' A várzea é importante:',
        respostas: [
        { id: 1, text: 'Pois incentiva a pratica de esportes e ajuda a comunidade', correct:true},
        { id: 2, text: 'Pois todo mundo fica rico', correct:false} ,  
        { id: 3, text: 'Pois os jogadores ficam famosos', correct:false} , 
        { id: 4, text: 'Pois movimenta muito dinheiro', correct:false}  
     ] 
    },
    {
        pergunta :'Qual destes elementos é mais característico do futebol de várzea?',
        respostas: [
        { id: 1, text: 'Patrocinio de marcas internacionais', correct:false},
        { id: 2, text: 'AJogadores com empresario', correct:false} ,  
        { id: 3, text: 'Torcida de bairro e churrasco na beira do campo', correct:true} , 
        { id: 4, text: 'Arbitragem com VAR', correct:false}  
     ] 
    },
    {
        pergunta :'Qual é o dia mais comum para jogos de futebol de várzea',
        respostas: [
        { id: 1, text: 'Quarta-feira', correct:false},
        { id: 2, text: 'Domingo', correct:true} ,  
        { id: 3, text: 'Sexta-feira', correct:false} , 
        { id: 4, text: 'Terça-feira', correct:false}  
     ] 
    },
    {
        pergunta :'O futebol de várzea no Brasil é mais forte em qual tipo de região?',
        respostas: [
        { id: 1, text: 'Regiões centrais de grandes cidades', correct:false},
        { id: 2, text: 'Áreas rurais', correct:true} ,  
        { id: 3, text: 'Bairros periféricos e comunidades', correct:false} , 
        { id: 4, text: 'Interior de São Paulo', correct:false}  
     ] 
    }
]

const PerguntaElement = document.getElementById('perguntas');
const RespostasButtons = document.getElementById('reposta_btn');
const ProximoButtom = document.getElementById('Proxima_btn');

let QuestaoAtualIndex = 0;
let Pontos = 0;
let Erros = 0;

function startsQuiz(){
    QuestaoAtualIndex = 0;
    Pontos = 0;
    ProximoButtom.innerHTML = "Proximo"
    showQuestion();
}

function resetar(){
    ProximoButtom.style.display = 'none'
    while(RespostasButtons.firstChild){
        RespostasButtons.removeChild(RespostasButtons.firstChild);
    }
}
function showQuestion(){
    resetar()
    let QuestaoAtual = pergunta[QuestaoAtualIndex];
    let TextQuestao = QuestaoAtualIndex + 1;
    PerguntaElement.innerHTML = `${TextQuestao} . ${QuestaoAtual.pergunta}`

  QuestaoAtual.respostas.forEach((resposta) => {
    const botao = document.createElement("button");
    botao.innerHTML = resposta.text;
    GamepadButton.dataset.id = resposta.id;
    botao.classList.add("btn");
    botao.addEventListener("click", selectResposta)
    RespostasButtons.appendChild(botao);
});

function selectResposta(){
    resposta = pergunta[QuestaoAtualIndex].respostas
    const RespostaCorreta =  resposta.filter((reposta) => reposta.correct == true)[0];

    const btnSelecionado = e.target;
    const Correta = btnSelecionado.dataset.id == RespostaCorreta.id;
    if(Correta){
        Pontos++
    } else {
        Erros++
    }
     Array.from(RespostasButtons.children).forEach((botao) => {
        botao.disabled = true;
    });
}

}
startsQuiz();










