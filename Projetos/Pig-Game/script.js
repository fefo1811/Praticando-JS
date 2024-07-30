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

let pontuacaoAtual1 = 0;
let pontuacaoAtual2 = 0;

// Colocando as condições iniciais do jogo
playerScores.score1Elemento.textContent = 0;
playerScores.score2Elemento.textContent = 0;
dice.classList.add('hide');

// Adicionando os dados gerados na tela
const exibirDado = ( nomeArquivo ) => {
    document.querySelector('.dice').setAttribute('src', `./assets/${nomeArquivo}.png`);
    dice.classList.remove('hide');
}

const switchPlayer = ( players ) => {
    if (players.player1.classList.contains('player--active')) {
        players.player1.classList.remove('player--active');
        players.player2.classList.add('player--active');
    } else {
        players.player2.classList.remove('player--active');
        players.player1.classList.add('player--active');
    }
}

const fazPontuacao = ( numeroAleatorio, players ) => {
    if(players.player1.classList.contains('player--active')) {
        pontuacaoAtual1 = pontuacaoAtual1 + numeroAleatorio;
        document.getElementById('current--0').textContent = pontuacaoAtual1;
    } else {
        pontuacaoAtual2 = pontuacaoAtual2 + numeroAleatorio;
        document.getElementById('current--1').textContent = pontuacaoAtual2;
    }

}


// Início do jogo
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