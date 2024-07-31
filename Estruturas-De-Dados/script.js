'use strict';

const restaurante = {
    nome: "Classico Italiano",
    endereco: "Via Angelo Tavanti 23, Firenze, Italia",
    categorias: ["Italiano", "Pizzaria", "Vegetariano", "Organico"],
    menuInicial: ["Focaccia", "Bruschetta", "Pao de alho", "Salada Caprese"],
    menuPrincipal: ["Pizza", "Macarrao", "Risoto"],

    order: function (inicialIndex, principalIndex) {
        return [this.menuInicial[inicialIndex], this.menuPrincipal[principalIndex]];
    }
}

// Desestruturando um Array
const arr = [1, 2, 3];
const [x, y, z] = arr;
// console.log(x);
// console.log(y);
// console.log(z);

const [pedidoInicial, pedidoPrincipal] = restaurante.order(1, 2);
console.log(pedidoInicial);
console.log(pedidoPrincipal);