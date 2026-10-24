
const perguntas = [
  {
    pergunta: "Onde nossos caminhos começaram a se cruzar?",
    opcoes: [
      "Em uma vigília na igreja ",
      "Em um culto dos adolecentes",
      "Na escola",
      "Em um jogo de futebol"
    ],
    correta: 0,
    explicacao: "Nossa história tem um começo especial. "
  },
  {
    pergunta: "Qual é o nome da ursinha do nosso primeiro beijo? 🧸",
    opcoes: [
      "Soberana",
      "Belinha",
      "Mel",
      "Amora"
    ],
    correta: 1,
    explicacao: "A Belinha tem um lugar especial na nossa história!"
  },
  {
    pergunta: "Em qual data aconteceu nosso primeiro beijo?",
    opcoes: [
      "12/10/2024",
      "04/12/2024",
      "14/10/2024 ",
      "14/11/2024"
    ],
    correta: 2,
    explicacao: "Uma lembrança para guardar com carinho. 💗"
  },
  {
    pergunta: "Como Voce deu um passinho para se aproximar de mim?",
    opcoes: [
      "Mandou uma carta",
      "Pegou meu zap",
      "Me encarou no culto",
      "Seguiu no Instagram "
    ],
    correta: 3,
    explicacao: "De uma pequena atitude começa uma grande história!"
  },
  {
    pergunta: "Quantos filhos a gente pretende ter?",
    opcoes: [
      " 2 filhos ",
      " 1 filho",
      " 3 filhos ",
      " 5 filhos"
    ],
    correta: 0,
    explicacao: "Um menino e uma menininha com sua cara."
  },
  {
    pergunta: "Com quantos anos a gente deu o primeiro beijo?",
    opcoes: [
      "16 anos ",
      "17 anos ",
      "14 anos",
      "18 anos"
    ],
    correta: 1,
    explicacao: "Foi dificil sair o primeiro beijo de lingua KKKKK"
  },
  {
    pergunta: "Em qual restaurante fomos no seu aniversario de 18 anos?",
    opcoes: [
      "Mequizin",
      "BK",
      "Zé do Hamburguer ",
      "Madeiro "
    ],
    correta: 2,
    explicacao: "No zezinho"
  },
  {
    pergunta: "Qual parte do seu corpo eu acho mais lindo?",
    opcoes: [
      "Peito",
      "Todas as partes",
      "Olhos",
      "Bunda"
    ],
    correta: 3,
    explicacao: "Brincadeira amor, são TODAS AS PARTES MINHA GOSTOSA"
  },
  {
    pergunta: "Qual é uma lembrança marcante do nosso passeio juntos?",
    opcoes: [
      "Jogo do São Paulo",
      "Vila Lobos",
      "Todos os Sitios ",
      "Todas as alternativas"
    ],
    correta: 0,
    explicacao: "Que venham muitas outras lembranças para guardar!"
  },
  {
    pergunta: "Qual o dia em que fizemos aquilo pela primeira vez? sx ",
    opcoes: [
      "12 de julho",
      "3 de julho",
      "3 de junho",
      "3 de janeiro"
    ],
    correta: 1,
    explicacao: "Não vejo a hora de coisar de novooooo"
  },
  {
    pergunta: "Qual seria o nosso programa mais romântico?",
    opcoes: [
      "Disputar quem lava a louça",
      "Fazer uma reunião de trabalho",
      "Criar novas memórias juntinhos ",
      "Ficar brigando pelo controle"
    ],
    correta: 2,
    explicacao: "O simples fica especial quando estamos juntos."
  },
  {
    pergunta: "E a pergunta mais importante: o que quero continuar fazendo?",
    opcoes: [
      "Esquecer nossas histórias",
      "Parar de tirar fotos",
      "Nunca mais sair juntos",
      "Construir mais capítulos da nossa história "
    ],
    correta: 3,
    explicacao: "Nossa história ainda tem muita coisa bonita pela frente!"
  }
];

let indice = 0;
let pontos = 0;
let respondida = false;

const inicio = document.getElementById("inicio");
const jogo = document.getElementById("jogo");
const resultado = document.getElementById("resultado");
const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const feedbackEl = document.getElementById("feedback");
const proximaBtn = document.getElementById("proxima");
const pontosEl = document.getElementById("pontos");
const numeroEl = document.getElementById("numero");
const barra = document.getElementById("barra-progresso");

document.getElementById("comecar").addEventListener("click", () => {
  inicio.classList.add("escondido");
  jogo.classList.remove("escondido");
  mostrarPergunta();
});

function mostrarPergunta() {
  respondida = false;
  const atual = perguntas[indice];

  numeroEl.textContent = `Pergunta ${indice + 1} de ${perguntas.length}`;
  pontosEl.textContent = `❤️ ${pontos} pontos`;
  perguntaEl.textContent = atual.pergunta;
  feedbackEl.textContent = "";
  proximaBtn.classList.add("escondido");
  opcoesEl.innerHTML = "";

  barra.style.width = `${(indice / perguntas.length) * 100}%`;

  atual.opcoes.forEach((opcao, i) => {
    const botao = document.createElement("button");
    botao.className = "opcao";
    botao.textContent = opcao;
    botao.addEventListener("click", () => responder(i));
    opcoesEl.appendChild(botao);
  });
}

function responder(escolha) {
  if (respondida) return;
  respondida = true;

  const atual = perguntas[indice];
  const botoes = opcoesEl.querySelectorAll("button");

  botoes.forEach((botao, i) => {
    botao.disabled = true;

    if (i === escolha) {
      botao.classList.add("selecionada");
    }
  });

  if (escolha === atual.correta) {
    pontos++;
    feedbackEl.textContent = "Acertou!  " + atual.explicacao;
  } else {
    feedbackEl.textContent = "Errooou!  " + atual.explicacao;
  }

  pontosEl.textContent = `❤️ ${pontos} pontos`;
  barra.style.width = `${((indice + 1) / perguntas.length) * 100}%`;

  proximaBtn.textContent =
    indice === perguntas.length - 1
      ? "Ver minha surpresa 💌"
      : "Próxima pergunta 💕";

  proximaBtn.classList.remove("escondido");
}

proximaBtn.addEventListener("click", () => {
  if (!respondida) return;

  indice++;

  if (indice < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
});

function mostrarResultado() {
  jogo.classList.add("escondido");
  resultado.classList.remove("escondido");

  document.getElementById("pontuacao-final").textContent =
    `Você fez ${pontos} de ${perguntas.length} pontos!`;

  let mensagem = "O mais importante é tudo que vivemos juntos. ❤️";

  if (pontos >= 10) {
    mensagem = "Você conhece muito bem nossas lembranças! 🥰";
  } else if (pontos >= 6) {
    mensagem = "Mandou bem, amor! Ainda temos muitas memórias para criar. 💗";
  }

  document.getElementById("mensagem-final").textContent = mensagem;
  document.getElementById("surpresa").classList.remove("escondido");
}

document.getElementById("jogar-novamente").addEventListener("click", () => {
  indice = 0;
  pontos = 0;
  respondida = false;

  resultado.classList.add("escondido");
  document.getElementById("surpresa").classList.add("escondido");
  inicio.classList.remove("escondido");
});
