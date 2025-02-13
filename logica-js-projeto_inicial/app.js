let listaDeNumerosSorteados = []
let numeroMaximo = 100
let numeroSecreto = gerarNumeroAleatorio();
console.log(`${numeroSecreto}`);
let tentativas = 1

//função exibir texto na tela
function exibirTextoNaTela(tag,texto) {
   let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

//botão chutar
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `o número secreto é menor que ${chute} `);
        } else{
                exibirTextoNaTela('p', `o número secreto é maior que ${chute}`);
            }
        tentativas++;
        limparCampo()
    }
};

//função de criar um numero aleatorio
function gerarNumeroAleatorio(){   
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1)
    let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length

    if (quantidadeDeNumerosSorteados == numeroMaximo){
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
};
//funçao de limpar o campo de escrever dps de uma tentativa
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//funçao para reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto)
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
//sim 2

