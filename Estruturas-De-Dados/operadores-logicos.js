'use strict';

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

// Há três operadores de atribuição lógicos que foram introduzidos no ES2021
// Esses operadores são: ??=, ||=, &&=
const rest1 = {
    name: 'Capri',
    // numGuests: 20
    numGuests: 0
}

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi'
}

// Operador de Coalescência Nula
rest2.numGuests ??= 10;
rest1.numGuests ??= 10;
console.log(rest1);
console.log(rest2);


// Operador de Atribuição &&
rest1.owner &&= '<ANONIMO>';
rest2.owner &&= '<ANONIMO>';
console.log(rest1);
console.log(rest2);