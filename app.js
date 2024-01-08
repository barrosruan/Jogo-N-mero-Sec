function exibirtextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirtextoNaTela("h1", "Jogo do número secreto");
exibirtextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
  console.log(" o botão foi clicado");
}
