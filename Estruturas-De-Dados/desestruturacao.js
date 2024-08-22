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

restaurante.orderDelivery({
    hora: '22:30',
    endereco: 'Via del Sole, 21',
    principalIndex: 2,
    inicialIndex: 2
})

/**
 * Códigos referentes a aula sobre Desestruturação de Arrays
 */
/* const arr = [1, 2, 3];
const [x, y, z] = arr;

// console.log(x);
// console.log(y);
// console.log(z);

const [pedidoInicial, pedidoPrincipal] = restaurante.order(1, 2);
console.log(pedidoInicial);
console.log(pedidoPrincipal);
*/

/**
 * Códigos referentes a aula sobre Desestruturação de Objetos
 */

const { nome: nomeRestaurante, horarioAbertura: horarioDeFuncionamento, categorias: tags } = restaurante;
// console.log(nomeRestaurante, horarioDeFuncionamento, tags);

// Desestruturando objetos aninhados
const { sabado: {abre, fecha} } = horarioDeFuncionamento;
// console.log(abre, fecha); // Assim conseguimos pegar os dois valores 

/**
 * Códigos referentes a aula sobre Rest Pattern e Parâmetros
 */

// O Rest Pattern é usado para passarmos vários valores em uma função e convertê-los em um array.
// Possui a sintaxe igual ao operador spread

const [a, b, ...outros] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(a, outros); // Será impresso o valor armazenado em a (1) e em outros conterá os valores restantes dentro de um outro array de nome outros

const { sabado, ...diaDaSemana } = restaurante.horarioAbertura;
// c onsole.log(diaDaSemana);

const add = function (...numbers) {
    console.log(numbers);
}

restaurante.orderPizza("Cogumelos", 'Cebola', 'Queijo', 'Calabresa')