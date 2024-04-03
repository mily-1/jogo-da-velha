var jogadorAtual = "X";
var casasMarcadas = [];

function jogar(casa) {
  if (casasMarcadas.includes(casa)) {
    return;
  }

  casasMarcadas.push(casa);

  var elementoCasa = document.getElementById(casa);
  elementoCasa.textContent = jogadorAtual;

  if (verificarVitoria(jogadorAtual)) {
    exibirMensagem("Jogador " + jogadorAtual + " venceu!");
    return;
  }

  if (casasMarcadas.length === 9) {
    exibirMensagem("Empate!");
    return;
  }

  trocarJogador();
}

function trocarJogador() {
  jogadorAtual = jogadorAtual === "X" ? "O" : "X";
  exibirJogadorAtual();
}

function verificarVitoria(jogador) {
  var combinacoesVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (var i = 0; i < combinacoesVencedoras.length; i++) {
    var combinacao = combinacoesVencedoras[i];
    if (combinacao.every(function(casa) {
      return casasMarcadas.includes(casa) && document.getElementById(casa).textContent === jogador;
    })) {
      return true;
    }
  }

  return false;
}

function exibirMensagem(mensagem) {
  var elementoMensagem = document.getElementById("mensagem");
  elementoMensagem.textContent = mensagem;
}

function reiniciar() {
  jogadorAtual = "X";
  casasMarcadas = [];
  var elementosCasa = document.querySelectorAll(".casa");
  for (var i = 0; i < elementosCasa.length; i++) {
    elementosCasa[i].textContent = "";
  }
  exibirMensagem("");
}

function exibirJogadorAtual() {
  var elementoMensagem = document.getElementById("mensagem");
  elementoMensagem.textContent = "Jogador atual: " + jogadorAtual;
}

// Exibir jogador atual na inicialização
exibirJogadorAtual();
