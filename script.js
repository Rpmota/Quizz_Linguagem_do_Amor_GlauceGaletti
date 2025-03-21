// Lista de perguntas, opções e linguagens correspondentes
const perguntas = [
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Me sinto íntimo das pessoas quando conversamos ou fazemos coisas juntos", "Sinto que alguém é meu amigo quando ele não se incomoda ao encostar em mim"], linguagens: ["Tempo de Qualidade", "Toque Físico"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Gosto de receber elogios", "Gosto de receber cafuné"], linguagens: ["Palavras de Afirmação", "Toque Físico"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Gosto de passar o tempo com meu parceiro", "Gosto de receber Presente do meu parceiro"], linguagens: ["Tempo de Qualidade", "Presente"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Gosto de saber que as pessoas que amo querem me ajudar nas minhas tarefas", "Gosto de fazer viagens longas com meu parceiro"], linguagens: ["Atos de Serviço", "Tempo de Qualidade"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Preciso receber toques todos os dias", "Preciso ser elogiado ou receber agradecimentos todos os dias"], linguagens: ["Toque Físico", "Palavras de Afirmação"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Quando me dão um presente, sei que pensam de mim", "Me sinto amado quando me ajudam nas tarefas diárias"], linguagens: ["Presente", "Atos de Serviço"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Me sinto bem quando as pessoas de quem gosto tocam em mim ao passar por perto", "Gosto quando as pessoas me ouvem e realmente se interessam pelo que estou falando"], linguagens: ["Toque Físico", "Tempo de Qualidade"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Gosto de receber Presente inesperados", "Gosto de ouvir palavras gentis sobre mim"], linguagens: ["Presente", "Palavras de Afirmação"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Fico grato quando alguém me ouve e não me interrompe", "Fico feliz quando meu parceiro lembra de datas especiais e me dá Presente"], linguagens: ["Tempo de Qualidade", "Presente"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Me sinto seguro quando sou abraçado por alguém que gosto", "Sinto que sou amado quando outras pessoas fazem trabalhos por mim"], linguagens: ["Toque Físico", "Atos de Serviço"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Gosto quando elogiam minha aparência", "Me sinto amado quando alguém se dedica para entender meus sentimentos"], linguagens: ["Palavras de Afirmação", "Tempo de Qualidade"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Eu reconheço quando alguém que gosto faz algo para mim", "Eu fico realmente feliz quando alguém que gosto faz um presente para mim"], linguagens: ["Atos de Serviço", "Presente"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Gosto quando meu parceiro faz uma massagem em mim", "Gosto quando agradecem por algo que fiz"], linguagens: ["Toque Físico", "Atos de Serviço"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Gosto de como me sinto quando alguém me dá́ atenção", "Gosto de como me sinto quando alguém faz algo por mim"], linguagens: ["Tempo de Qualidade", "Atos de Serviço"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Me sinto lembrado quando recebo Presente", "Me sinto amado quando me falam que me amam"], linguagens: ["Presente", "Palavras de Afirmação"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Gosto de beijar e ser beijado pelas pessoas que gosto", "Receber um presente sem nenhuma razão especial me deixa feliz"], linguagens: ["Toque Físico", "Presente"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Sempre escolho me sentar perto das pessoas que gosto", "Amo quando dizem que sou bonito"], linguagens: ["Tempo de Qualidade", "Palavras de Afirmação"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Os Presente que recebo das pessoas que amo são sempre especiais para mim", "Me sinto bem quando recebo carinho das pessoas que amo"], linguagens: ["Presente", "Toque Físico"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Gosto de passar um tempo sozinho com meu parceiro", "Me sinto amado quando me oferecem ajuda"], linguagens: ["Tempo de Qualidade", "Atos de Serviço"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Me sinto amado quando recebo algum presente em meu aniversário", "Me sinto amado ao receber uma mensagem bonita em meu aniversário"], linguagens: ["Presente", "Palavras de Afirmação"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Me sinto amado quando alguém faz algo para me ajudar", "Me sinto amado quando recebo carinho"], linguagens: ["Atos de Serviço", "Toque Físico"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Fico feliz quando elogiam minhas realizações", "Sei que uma pessoa me ama quando ela faz algo para mim que não faria para si mesma"], linguagens: ["Palavras de Afirmação", "Atos de Serviço"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Me sinto amado quando alguém que amo me abraça", "Me sinto amado quando alguém que admiro me dá́ um presente"], linguagens: ["Toque Físico", "Presente"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Gosto quando ganho Presente", "Gosto de ficar com meus amigos, sem pressa para ir embora"], linguagens: ["Presente", "Tempo de Qualidade"] },
    { texto: "Qual dessas frases te representam mais?", opcoes: ["Eu me sinto amado quando dizem que eu sou querido ou importante", "Gosto que as pessoas olhem para mim durante a conversa"], linguagens: ["Palavras de Afirmação", "Tempo de Qualidade"] }
];

// Total de perguntas por linguagem
const totalPerguntasPorLinguagem = {
    "Tempo de Qualidade": 10,
    "Toque Físico": 10,
    "Palavras de Afirmação": 10,
    "Presente": 10,
    "Atos de Serviço": 10
};

// Variáveis para controlar o quiz
let indiceAtual = 0; // Índice da pergunta atual
let respostas = { // Objeto para armazenar as respostas
    "Tempo de Qualidade": 0,
    "Toque Físico": 0,
    "Palavras de Afirmação": 0,
    "Presente": 0,
    "Atos de Serviço": 0
};

// Seleciona os elementos do HTML
const quizContainer = document.getElementById('quiz');
const perguntasContainer = document.getElementById('perguntas');
const resultadoContainer = document.getElementById('resultado');
const btnIniciar = document.getElementById('btn-iniciar');
const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');
const perguntaTitulo = document.getElementById('pergunta-titulo');
const opcoesForm = document.getElementById('opcoes');
const contador = document.getElementById('contador');
const mensagemResultado = document.getElementById('mensagem-resultado');

// Função para exibir a pergunta atual
function exibirPergunta() {
    const pergunta = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaTitulo.textContent = pergunta.texto; // Define o título da pergunta
    opcoesForm.innerHTML = ''; // Limpa as opções anteriores

    // Cria as opções de resposta
    pergunta.opcoes.forEach((opcao, index) => {
        const label = document.createElement('label'); // Cria um label para cada opção
        label.className = 'opcao'; // Adiciona a classe "opcao"
        label.innerHTML = `
            <input type="radio" name="opcao" value="${index}"> <!-- Input do tipo radio -->
            ${opcao} <!-- Texto da opção -->
        `;
        opcoesForm.appendChild(label); // Adiciona o label ao formulário
    });

    // Atualiza o contador de perguntas
    contador.textContent = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;

    // Mostra ou esconde os botões de navegação
    btnAnterior.classList.toggle('hidden', indiceAtual === 0); // Esconde "Anterior" na primeira pergunta
    btnProximo.textContent = indiceAtual === perguntas.length - 1 ? 'Finalizar' : 'Próximo'; // Altera o texto do botão
}

// Função para capturar a resposta do usuário
function capturarResposta() {
    const opcaoSelecionada = document.querySelector('input[name="opcao"]:checked'); // Pega a opção selecionada
    if (opcaoSelecionada) {
        const linguagem = perguntas[indiceAtual].linguagens[opcaoSelecionada.value]; // Pega a linguagem correspondente
        respostas[linguagem]++; // Incrementa a contagem da linguagem
        return true; // Resposta capturada com sucesso
    }
    return false; // Nenhuma resposta selecionada
}

// Função para exibir o resultado final
function exibirResultado() {
    let resultadoHTML = ""; // Cria o HTML do resultado

    // Soma todas as respostas dadas
    const totalRespondidas = Object.values(respostas).reduce((a, b) => a + b, 0);

    // Cria um array com as linguagens e suas porcentagens
    const resultados = Object.entries(respostas).map(([linguagem, pontos]) => {
        const porcentagem = totalRespondidas > 0 ? ((pontos / totalRespondidas) * 100).toFixed(2) : 0; // Calcula a porcentagem
        return { linguagem, porcentagem, descricao: obterDescricaoLinguagem(linguagem) }; // Retorna um objeto com os dados
    });

    // Ordena os resultados pela porcentagem (da maior para a menor)
    resultados.sort((a, b) => b.porcentagem - a.porcentagem);

    // Itera sobre os resultados ordenados
    resultados.forEach(({ linguagem, porcentagem, descricao }) => {
        // Adiciona a barra de porcentagem e a descrição ao HTML
        resultadoHTML += `
            <div class="barra-container">
                <div class="barra" style="width: ${porcentagem}%;">${porcentagem}%</div>
            </div>
            <p><strong>${linguagem}:</strong></p>
            <p class="descricao-linguagem">${descricao}</p>
        `;
    });

    // Exibe o resultado na tela
    mensagemResultado.innerHTML = resultadoHTML;
    resultadoContainer.classList.remove('hidden'); // Mostra a tela de resultado
    perguntasContainer.classList.add('hidden'); // Esconde a tela de perguntas
}

// Função para obter a descrição da linguagem
function obterDescricaoLinguagem(linguagem) {
    const descricoes = { // Descrições para cada linguagem
        "Tempo de Qualidade": "Sua linguagem de amor é Tempo de Qualidade! Você valoriza profundamente passar momentos significativos com as pessoas que ama. Para você, estar presente e compartilhar atividades juntos é uma forma essencial de demonstrar carinho.",
        "Toque Físico": "Sua linguagem de amor é Toque Físico! Você se sente amado quando há contato físico, como abraços, beijos, ou simples toques. O toque é a sua principal maneira de receber e expressar amor.",
        "Palavras de Afirmação": "Sua linguagem de amor é Palavras de Afirmação! Você se sente especial e amado quando recebe elogios, palavras gentis e expressões de afeto. As palavras têm um grande impacto sobre você.",
        "Presente": "Sua linguagem de amor é Presente! Você valoriza receber Presente, não apenas pelo objeto, mas pelo significado e o cuidado que a outra pessoa coloca no gesto. Para você, Presente são uma forma poderosa de expressar amor.",
        "Atos de Serviço": "Sua linguagem de amor é Atos de Serviço! Você se sente amado quando alguém faz algo por você, como ajudar com tarefas ou proporcionar facilidades no seu dia a dia. Ações falam mais alto do que palavras para você."
    };
    return descricoes[linguagem] || "Descrição não disponível."; // Retorna a descrição ou uma mensagem padrão
}

// Evento para iniciar o quiz
btnIniciar.addEventListener('click', () => {
    quizContainer.classList.add('hidden'); // Esconde a tela inicial
    perguntasContainer.classList.remove('hidden'); // Mostra a tela de perguntas
    exibirPergunta(); // Exibe a primeira pergunta
});

// Evento para próxima pergunta
btnProximo.addEventListener('click', () => {
    if (!capturarResposta()) { // Se nenhuma resposta for selecionada
        alert("Por favor, selecione uma opção antes de avançar.");
        return;
    }

    if (indiceAtual < perguntas.length - 1) { // Se não for a última pergunta
        indiceAtual++; // Avança para a próxima pergunta
        exibirPergunta(); // Exibe a nova pergunta
    } else {
        exibirResultado(); // Exibe o resultado final
    }
});

// Evento para pergunta anterior
btnAnterior.addEventListener('click', () => {
    if (indiceAtual > 0) { // Se não for a primeira pergunta
        indiceAtual--; // Volta para a pergunta anterior
        exibirPergunta(); // Exibe a pergunta
    }
});