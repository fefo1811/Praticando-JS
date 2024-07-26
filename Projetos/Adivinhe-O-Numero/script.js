'use strict';

/**
 * O método Math.random()*20 irá retornar números aleatórios, com casas decimais, entre 0 e 19
 * O método Math.trunc() irá remover as casas decimais
 * Por fim, o + 1 irá adicionar mais um número para que o número possa chegar até o 20
 * */
let numeroSecreto = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

/**
 * Função que ao passar o nome do seletor, captura o elemento correspondente e como segundo parâmetro recebe uma mensagem que será exibida no elemento.
 * */
const mostrarMensagem = ( seletor, mensagem ) => {
    document.querySelector(`${seletor}`).textContent = mensagem;
}

document.querySelector('.score').textContent = score;


document.querySelector('.check').addEventListener('click', () => {
    const tentativa = Number(document.querySelector('.guess').value);

// Quando o jogador não digita um número
    if (!tentativa) {
        mostrarMensagem(".message", "No number!");
    }
// Quando o jogador acerta o número secreto
    else if (tentativa === numeroSecreto) {
        // document.querySelector('.message').textContent = "Congratulations!"
        mostrarMensagem(".message", "Congratulations");
        document.querySelector('body').style.backgroundColor = 'green';
        // document.querySelector('.number').textContent = numeroSecreto;
        mostrarMensagem(".number", numeroSecreto);

        if (score > highscore) {
            highscore = score;
            // document.querySelector('.highscore').textContent = highscore;
            mostrarMensagem(".highscore", highscore);
        }
    }

// Quando a tentativa for diferente do número secreto
    else if ( tentativa !== numeroSecreto ) {
        if(score > 1) {
            // document.querySelector('.message').textContent = tentativa > numeroSecreto ? "Too high!" : "Too low!";
            mostrarMensagem(".message", tentativa > numeroSecreto ? "Too high!" : "Too low!" );
            score--; // Pontuação diminui
            // document.querySelector('.score').textContent = score;
            mostrarMensagem(".score", score);
        } else {
            // Quando a pontuação chega a 0 o jogo acaba
            // document.querySelector('.message').textContent = "You lost the game!";
            mostrarMensagem(".message", "You lost the game!");

            // document.querySelector('.score').textContent = 0;
            mostrarMensagem(".score", 0);
        }
    }
})

// Resetando os valores e dados
document.querySelector('.again').addEventListener('click', () => {
    score = 20
    numeroSecreto = Math.trunc(Math.random()*20) + 1;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = null;


})