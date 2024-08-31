'use strict';

// Base de Dados
const restaurante = {
    nome: "Classico Italiano",
    endereco: "Via Angelo Tavanti 23, Firenze, Italia",
    categorias: ["Italiano", "Pizzaria", "Vegetariano", "Organico"],
    menuInicial: ["Focaccia", "Bruschetta", "Pao de alho", "Salada Caprese"],
    menuPrincipal: ["Pizza", "Macarrao", "Risoto"],
    horarioAbertura: {
        quinta: {
            abre: 12,
            fecha: 22,
        },
        sexta: {
            abre: 11,
            fecha: 23,
        },
        sabado: {
            abre: 0, // Aberto 24 horas
            fecha: 24
        }
    },

    order: function (inicialIndex, principalIndex) {
        return [this.menuInicial[inicialIndex], this.menuPrincipal[principalIndex]];
    },

    orderDelivery : function ({ inicialIndex, principalIndex, hora, endereco }) {
        console.log(`Pedido recebido! ${this.menuInicial[inicialIndex]} e ${this.menuPrincipal[principalIndex]} serão entregues em ${endereco} às ${hora}`);
    },

    orderPizza : function (ingredientePrincipal, ...outrosIngredientes) {
        console.log(ingredientePrincipal);
        console.log(outrosIngredientes)
    }
}

const menu = [ ...restaurante.menuInicial, ...restaurante.menuPrincipal];

for (const item of menu) console.log(item);

// Forma de pegar o índice em um loop for...of
for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}

//console.log(...menu.entries()) // Loga no Terminal arrays contendo o índice e o valor