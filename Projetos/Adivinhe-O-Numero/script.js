'use strict';

document.querySelector('.check').addEventListener('click', () => {
    const tentativa = Number(document.querySelector('.guess').value);

    if (!tentativa) {
        document.querySelector('.message').textContent = "No number!"
    }
})