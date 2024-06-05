// Dados do quiz
var quizPerguntas = [
    {
        pergunta: "Qual o nome do principal órgão afetado pela entorse em jogadores de futebol?",
        a: "Músculo",
        b: "Ligamentos",
        c: "Ossos",
        d: "Pulmão",
        correto: "b",
    },
    {
        pergunta: "O que os jogadores devem fazer antes de um jogo para evitar lesões?",
        a: "Alongamento",
        b: "Beber refrigerante",
        c: "Descansar",
        d: "Meditar",
        correto: "a",
    },
    {
        pergunta: "Qual a bebida mais recomendada para os jogadores durante um jogo?",
        a: "Guaravita",
        b: "Café",
        c: "Suco de frutas",
        d: "Água",
        correto: "d",
    },
    {
        pergunta: "O que é avaliado no Teste de Cooper?",
        a: "Aptidão aeróbica",
        b: "Força muscular",
        c: "Flexibilidade",
        d: "Agilidade",
        correto: "a",
    },
    {
        pergunta: "Qual a importância da alimentação na saúde dos jogadores?",
        a: "Ajuda na recuperação muscular",
        b: "Não é importante",
        c: "Causa problemas de saúde",
        d: "Causa Instabilidade na partida",
        correto: "a",
    },
  
];

// Elementos DOM
var startContainer = document.getElementById('start');
var startBtn = document.getElementById('start-btn');
var quizContainer = document.getElementById('quiz');
var respostaEls = document.querySelectorAll('.answer');
var perguntaEl = document.getElementById('question');
var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');
var submitBtn = document.getElementById('submit');
var ID_USUARIO = sessionStorage.getItem("ID_USUARIO");
var fkQuiz = 1;

var quizAtual = 0;
var pontuacao = 0;

// Iniciar quiz
startBtn.addEventListener('click', function() {
    startContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    carregarQuiz();
});

// Carregar pergunta e respostas
function carregarQuiz() {
    desmarcarRespostas();
    var perguntaAtual = quizPerguntas[quizAtual];
    perguntaEl.innerText = perguntaAtual.pergunta;
    a_text.innerText = perguntaAtual.a;
    b_text.innerText = perguntaAtual.b;
    c_text.innerText = perguntaAtual.c;
    d_text.innerText = perguntaAtual.d;
}

// Desmarcar todas as respostas
function desmarcarRespostas() {
    for (var i = 0; i < respostaEls.length; i++) {
        respostaEls[i].checked = false;
    }
}

// Obter resposta selecionada
function obterSelecionada() {
    var resposta;
    for (var i = 0; i < respostaEls.length; i++) {
        if (respostaEls[i].checked) {
            resposta = respostaEls[i].id;
        }
    }
    return resposta;
}

// Calcular pontuação média
function calcularPontuacaoMedia(pontuacao, totalPerguntas) {
    return (pontuacao / totalPerguntas) * 100;
}

// Enviar resposta e carregar próxima pergunta
submitBtn.addEventListener('click', function() {
    var resposta = obterSelecionada();
    if (resposta) {
        if (resposta == quizPerguntas[quizAtual].correto) {
            pontuacao++;
        }
        quizAtual++;
        if (quizAtual < quizPerguntas.length) {
            carregarQuiz();
        } else {
            // Calcular a pontuação média
            var pontuacaoMedia = calcularPontuacaoMedia(pontuacao, quizPerguntas.length);

            // Enviar resultado ao servidor
            fetch(`/resultado/registrar/${ID_USUARIO}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    scoreServer: pontuacao, 
                    quizServer: fkQuiz
                }),
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log("Resultado registrado com sucesso:", data);
                quizContainer.innerHTML = `
                    <h2 style="margin-top: 130px;">Você respondeu corretamente ${pontuacao}/${quizPerguntas.length} perguntas.</h2>
                    <h3>Sua pontuação média é de: ${pontuacaoMedia.toFixed(0)}%</h3>
                    <button onclick="location.reload()">Recomeçar</button>
                `;
            })
            .catch(function(error) {
                console.error("Erro ao registrar o resultado:", error);
                quizContainer.innerHTML = `
                    <h2 style="margin-top: 120px;">Você respondeu corretamente ${pontuacao}/${quizPerguntas.length} perguntas.</h2>
                    <h3>Sua pontuação média é de: ${pontuacaoMedia.toFixed(0)}%</h3>
                    <button onclick="location.reload()">Recomeçar</button>
                `;
            });
        }
    }
});
