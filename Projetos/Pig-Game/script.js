'use strict';

// Recebendo os elementos
const playerScores = {
    score1Elemento: document.getElementById('score--0'),
    score2Elemento: document.getElementById('score--1'),
}
const dice = document.querySelector('.dice');
const btn = {
    btnNew: document.querySelector('.btn--new'),
    btnRoll: document.querySelector('.btn--roll'),
    btnHold: document.querySelector('.btn--hold'),
}

const players = {
    player1: document.querySelector('.player--0'),
    player2: document.querySelector('.player--1')
}

let pontuacaoTotal = [0, 0];

let pontuacaoAtual1 = 0;
let pontuacaoAtual2 = 0;


const resetGame = () => {
    playerScores.score1Elemento.textContent = 0;
    playerScores.score2Elemento.textContent = 0;

    dice.classList.add('hide');

    pontuacaoTotal = [0, 0];

    pontuacaoAtual1 = 0;
    pontuacaoAtual2 = 0;


    if ( players.player2.classList.contains('player--active') ) {
        players.player2.classList.remove('player--active');
        players.player1.classList.add('player--active');
    }

    if ( players.player1.classList.contains('player--winner') ) {
        players.player1.classList.remove('player--winner');
    } else if ( players.player2.classList.contains('player--winner') ) {
        players.player2.classList.toggle('player--winner');
    }

    if ( btn.btnRoll.hasAttribute('disabled') && btn.btnHold.hasAttribute('disabled') ) {
        btn.btnRoll.removeAttribute('disabled');
        btn.btnHold.removeAttribute('disabled');
    }
}

// Colocando as condições iniciais do jogo
playerScores.score1Elemento.textContent = 0;
playerScores.score2Elemento.textContent = 0;
dice.classList.add('hide');

// Adicionando os dados gerados na tela
const exibirDado = ( nomeArquivo ) => {
    document.querySelector('.dice').setAttribute('src', `./assets/${nomeArquivo}.png`);
    dice.classList.remove('hide');
}

// Função que faz a troca de turno entre os jogadores
const switchPlayer = ( players ) => {
    if (players.player1.classList.contains('player--active')) {
        players.player1.classList.remove('player--active');
        players.player2.classList.add('player--active');
        pontuacaoAtual1 = 0;
        document.getElementById('current--0').textContent = pontuacaoAtual1;
    } else {
        players.player2.classList.remove('player--active');
        players.player1.classList.add('player--active');
        pontuacaoAtual2 = 0;
        document.getElementById('current--1').textContent = pontuacaoAtual2;
    }
}

// Função que pega o valor do Dado e adiciona na pontuação atual do jogador
const fazPontuacao = ( numeroAleatorio, players ) => {
    if(players.player1.classList.contains('player--active')) {
        pontuacaoAtual1 = pontuacaoAtual1 + numeroAleatorio;
        document.getElementById('current--0').textContent = pontuacaoAtual1;
    } else {
        pontuacaoAtual2 = pontuacaoAtual2 + numeroAleatorio;
        document.getElementById('current--1').textContent = pontuacaoAtual2;
    }

}


// Início do jogo: Valores sortido através dos dados
btn.btnRoll.addEventListener('click', () => {
    let numeroAleatorio = Math.trunc(Math.random()*6) + 1

    switch( numeroAleatorio ) {
        case 1:
            exibirDado("dice-1");
            switchPlayer( players );
            break
        case 2:
            exibirDado("dice-2");
            fazPontuacao( numeroAleatorio, players );
            break
        case 3:
            exibirDado("dice-3");
            fazPontuacao( numeroAleatorio, players );
            break
        case 4:
            exibirDado("dice-4");
            fazPontuacao( numeroAleatorio, players );
            break
        case 5:
            exibirDado("dice-5");
            fazPontuacao( numeroAleatorio, players );
            break
        case 6:
            exibirDado("dice-6");
            fazPontuacao( numeroAleatorio, players );
            break
        default:
            console.log("Não deu certo não");
    }
})

// Função em que o jogador armazena os pontuação total acumulada nas jogadas dos dados
btn.btnHold.addEventListener('click', () => {
    if (pontuacaoTotal[0] < 100 && pontuacaoTotal[1] < 100) {
        if ( players.player1.classList.contains('player--active') ) {
            pontuacaoTotal[0] += pontuacaoAtual1;
            document.getElementById('score--0').textContent = pontuacaoTotal[0];
            pontuacaoAtual1 = 0;
            switchPlayer( players );
        } else {
            pontuacaoTotal[1] += pontuacaoAtual2;
            document.getElementById('score--1').textContent = pontuacaoTotal[1];
            pontuacaoAtual2 = 0;
            switchPlayer( players );
        }
    }

    // Caso a pontuação total exceda 100 pontos, encerra o jogo e o jogador vence
    if ( pontuacaoTotal[0] >= 100 ) {
        document.querySelector('.player--0').classList.add('player--winner');
        btn.btnRoll.setAttribute('disabled', 'disabled');
        btn.btnHold.setAttribute('disabled', 'disabled');
    } else if (pontuacaoTotal[1] >= 100) {
        document.querySelector('.player--1').classList.add('player--winner');
        btn.btnRoll.setAttribute('disabled', 'disabled');
        btn.btnHold.setAttribute('disabled', 'disabled');
    }
})

btn.btnNew.addEventListener('click', resetGame);