let numeroSecreto = gerarNumeroAleatorio();
let = tentativas = 1;

function exibirtextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirtextoNaTela("h1", "Jogo do número secreto");
exibirtextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirtextoNaTela("h1", "Acertou!");
    let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemtentativas = ` Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
    exibirtextoNaTela("p", mensagemtentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirtextoNaTela("p", "O número secreto é menor");
    } else {
      exibirtextoNaTela("p", "O número secreto é maior");
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}
