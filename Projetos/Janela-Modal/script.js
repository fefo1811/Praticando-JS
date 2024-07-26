'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

// Função para esconder o Modal
const hideModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Loop para poder adicionar o EventListener em cada um dos 3 botões da tela
for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', () => {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}

closeBtn.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', (event) => {
    if ( event.key === 'Escape' && !modal.classList.contains('hidden') ) {
        hideModal();
    }
})
