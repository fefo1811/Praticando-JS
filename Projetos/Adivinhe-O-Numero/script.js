'use strict';

/**
 * O método Math.random()*20 irá retornar números aleatórios, com casas decimais, entre 0 e 19
 * O método Math.trunc() irá remover as casas decimais
 * Por fim, o + 1 irá adicionar mais um número para que o número possa chegar até o 20
 * */
const numeroSecreto = Math.trunc(Math.random()*20) + 1;
let score = 20;

document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = numeroSecreto;


document.querySelector('.check').addEventListener('click', () => {
    const tentativa = Number(document.querySelector('.guess').value);

// Quando o jogador não digita um número
    if (!tentativa) {
        document.querySelector('.message').textContent = "No number!"
    }
// Quando o jogador acerta o número secreto
    else if (tentativa === numeroSecreto) {
        document.querySelector('.message').textContent = "Congratulations!"
        document.querySelector('body').style.backgroundColor = 'green';
    }

// Quando a tentativa for maior do que o número secreto
    else if (tentativa > numeroSecreto) {

        if(score > 1) {
            document.querySelector('.message').textContent = "Too high!";
            score--; // Pontuação diminui
            document.querySelector('.score').textContent = score;
        } else {
            // Quando a pontuação chega a 0 o jogo acaba
            document.querySelector('.message').textContent = "You lost the game!";
            document.querySelector('.score').textContent = 0;
        }

// Quando a tentativa for menor do que o número secreto
    } else if (tentativa < numeroSecreto) {

        if (score > 1) {
            document.querySelector('.message').textContent = "Too low!"
            score--; // Pontuação diminui
            document.querySelector('.score').textContent = score;
        } else {
            // Quando a pontuação chega a 0 o jogo acaba
            document.querySelector('.message').textContent = "You lost the game!";
            document.querySelector('.score').textContent = 0;
        }
    }

    // if (tentativa === numeroSecreto) {
    //     document.querySelector('.message').textContent = "Congratulations!"
    // }
    //
    // if (tentativa > numeroSecreto) {
    //     document.querySelector('.message').textContent = "Too high!"
    // }
    //
    // if (tentativa < numeroSecreto) {
    //     document.querySelector('.message').textContent = "Too low!"
    // }
})