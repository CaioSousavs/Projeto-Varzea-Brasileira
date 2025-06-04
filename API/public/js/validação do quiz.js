




const pergunta = [
    {
        pergunta: 'O futebol de várzea é importante para:',
        respostas: [
            { id: 1, text: 'Jovens e crianças', correct: false },
            { id: 2, text: 'Adultos e Jogadores', correct: false },
            { id: 3, text: 'Para todo mundo', correct: false },
            { id: 4, text: 'População periférica', correct: true } 
        ]
    },
    {
        pergunta: 'Quem organiza e mantém os campos e times de várzea?',
        respostas: [
            { id: 1, text: 'Prefeitura', correct: false },
            { id: 2, text: 'Clubes de futebol', correct: false },
            { id: 3, text: 'Federação Brasileira de Futebol', correct: false },
            { id: 4, text: 'Comunidade e voluntários', correct: true } 
        ]
    },
    {
        pergunta: 'Qual desses jogadores profissionais vieram da várzea?',
        respostas: [
            { id: 1, text: 'Neymar Jr', correct: false },
            { id: 2, text: 'David Luiz', correct: true }, 
            { id: 3, text: 'Gabi Gol', correct: false },
            { id: 4, text: 'Adriano Imperador', correct: false }
        ]
    },
    {
        pergunta: 'É possível viver da várzea?',
        respostas: [
            { id: 1, text: 'Não, pois jogadores da várzea não ganham nada por jogo', correct: false },
            { id: 2, text: 'Sim, muitos jogadores vivem do dinheiro da várzea', correct: true }, 
            { id: 3, text: 'Não, a várzea paga muito pouco', correct: false },
            { id: 4, text: 'Sim, todos eles ficam ricos', correct: false }
        ]
    },
    {
        pergunta: 'A várzea é importante:',
        respostas: [
            { id: 1, text: 'Pois incentiva a prática de esportes e ajuda a comunidade', correct: true }, 
            { id: 2, text: 'Pois todo mundo fica rico', correct: false },
            { id: 3, text: 'Pois os jogadores ficam famosos', correct: false },
            { id: 4, text: 'Pois movimenta muito dinheiro', correct: false }
        ]
    },
    {
        pergunta: 'Qual destes elementos é mais característico do futebol de várzea?',
        respostas: [
            { id: 1, text: 'Patrocínio de marcas internacionais', correct: false },
            { id: 2, text: 'Jogadores com empresário', correct: false },
            { id: 3, text: 'Torcida de bairro e churrasco na beira do campo', correct: true }, 
            { id: 4, text: 'Arbitragem com VAR', correct: false }
        ]
    },
    {
        pergunta: 'Qual é o dia mais comum para jogos de futebol de várzea?',
        respostas: [
            { id: 1, text: 'Quarta-feira', correct: false },
            { id: 2, text: 'Domingo', correct: true }, 
            { id: 3, text: 'Sexta-feira', correct: false },
            { id: 4, text: 'Terça-feira', correct: false }
        ]
    },
    {
        pergunta: 'O futebol de várzea no Brasil é mais forte em qual tipo de região?',
        respostas: [
            { id: 1, text: 'Regiões centrais de grandes cidades', correct: false },
            { id: 2, text: 'Áreas rurais', correct: true }, 
            { id: 3, text: 'Bairros periféricos e comunidades', correct: false },
            { id: 4, text: 'Interior de São Paulo', correct: false }
        ]
    }
];

const PerguntaElement = document.getElementById('perguntas'); // gera a pergunta 
const RespostasButtons = document.getElementById('reposta_btn'); // cria os botões de respostas
const ProximoButton = document.getElementById('Proxima_btn'); // Gera o botão para proxima questão

// Variáveis para controlar o índice da pergunta atual e a pontuação do usuário
let QuestaoAtualIndex = 0; // Questão atual     
let pontos = 0; // // vai ser usado para contar os pontos
let erros = 0;


function comecarQuiz() {
    QuestaoAtualIndex = 0; //zera o contador 
    pontos = 0; // zera a pontuação
    ProximoButton.innerHTML = "Próximo"; // Define um botão proximo
    mostrarQuestao(); // Mostra a questão
}


function resetar() { // reseta o quiz 
    ProximoButton.style.display = 'none'; // faz com que o botao proximo suma
    
    while (RespostasButtons.firstChild) {
        RespostasButtons.removeChild(RespostasButtons.firstChild); // remove todas as questoes anteriores
    }
}

function mostrarQuestao() { // mostrar a questão atual
    resetar(); // reseta tudo antes de mostar a proxima pergunta
    let QuestaoAtual = pergunta[QuestaoAtualIndex]; // puxa a questão atual
    let TextQuestao = QuestaoAtualIndex + 1; // calcula o numero da questao
    PerguntaElement.innerHTML = `${TextQuestao}. ${QuestaoAtual.pergunta}`; // Puxa a questao e exibe ela


    QuestaoAtual.respostas.forEach((resposta) => { // cria um botão para cada questão atual
        const botao = document.createElement("button"); // cria um novo botão
        botao.innerHTML = resposta.text; //O forech chama o texto que esta no json
        botao.dataset.id = resposta.id; // O forech puxa o id da questão no json
        botao.classList.add("btn"); // Adiciona o css no botão
        botao.addEventListener("click", selectResposta); // adiciona o efeito ao click
        RespostasButtons.appendChild(botao); // Traz o botão respostas
    });
}


function selectResposta(e) { // função de respostas selecionadas
    const resposta = pergunta[QuestaoAtualIndex].respostas; // puxa a resposta da pergunta atual
    const RespostaCorreta = resposta.filter((reposta) => reposta.correct === true)[0]; // proucura a questão certa

    const btnSelecionado = e.target; // Puxa o botão que foi selecionado
    const Correta = btnSelecionado.dataset.id == RespostaCorreta.id; // ele ve se a resposta esta certa
    if (Correta) {
        pontos++; // Adiciona ponto caso a resposta esteja certa
        btnSelecionado.classList.add("correct"); // adiciona o css
    } else {
        erros++
        btnSelecionado.classList.add("incorrect"); // adiciono o css 
    }

    // Desabilita todos os botões de resposta após uma seleção
    Array.from(RespostasButtons.children).forEach((button) => { // desativa  todos os botões apos a escolha
        button.disabled = true; // desativa o botão 
        if (button.dataset.id == RespostaCorreta.id) {
            button.classList.add("correct"); // marca a quetão correta
        }
    });

    ProximoButton.style.display = "block"; // exibi o botão proximo
}


ProximoButton.addEventListener("click", () => {  // ação para o proximo botão 
    QuestaoAtualIndex++; // Avança para proxima questão 
    if (QuestaoAtualIndex < pergunta.length) {
        mostrarQuestao(); // mostra o proxima questão
    } else {
        resultadoFinal(); // Caso não tenha mais questao ele exibi o resultado 
    }
});


function resultadoFinal() {

    var idUsuario = sessionStorage.ID_USUARIO;
    console.log("ID USUARIO FUNÇÃO: " + idUsuario)
   
    fetch("/quiz/cadastrar", 
        {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        pontosServer: pontos,
        errosServer: erros,
        idUsuarioServer: idUsuario,
      }),
    }).then (function(resposta){
        console.log("CHEGOU NO THEN")
        if(resposta.ok){
            console.log("RESPOSTA OK")
            resposta.json().then(function(resposta){
                console.log(resposta);
                alert('Resposta adicionada no banco')
            })
        }
    })

    resetar(); // Reseta o estado antes de mostrar a pontuação
    PerguntaElement.innerHTML = `Você acertou ${pontos} de ${pergunta.length}!`; // Exibe a pontuação final

    console.log(erros, pontos)


    const SairdoQuiz = document.createElement("button"); // cria o botão de refazer o quiz
    SairdoQuiz.innerHTML = "Sair do Quiz "; // Define o texto do botão
    SairdoQuiz.classList.add("btn"); // Aadicona a class para ser usado no css
    SairdoQuiz.addEventListener("click", () => {
      
        SairdoQuiz.remove(); // remove o botao refazer apos o click
        setTimeout(function () {
                        window.location = "index login.html";
                    }, 1000);// reinicia o quiz
    });

    
    RespostasButtons.appendChild(SairdoQuiz); //adiciona o botao no card
}   
function inserirnobanco(){
    
    fetch()
}


comecarQuiz();


