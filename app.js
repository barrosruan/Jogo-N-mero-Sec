let numeroSecreto = gerarNumeroAleatorio();

function exibirtextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirtextoNaTela("h1", "Jogo do número secreto");
exibirtextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
  console.log(numeroSecreto);
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
