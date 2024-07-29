'use strict';

// Recebendo os elementos de pontuação de cada jogador
const playerScores = {
    score1Elemento: document.getElementById('score--0'),
    score2Elemento: document.getElementById('score--1'),
}

const dice = document.querySelector('.dice');

// Colocando as condições iniciais do jogo
playerScores.score1Elemento.textContent = 0;
playerScores.score2Elemento.textContent = 0;
dice.classList.add('hide');
