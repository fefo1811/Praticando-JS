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

// for (const item of menu) console.log(item);

// Forma de pegar o índice em um loop for...of
for (const [i, el] of menu.entries()) {
    // console.log(`${i + 1}: ${el}`);
}

// console.log(...menu.entries()) // Loga no Terminal arrays contendo o índice e o valor


/**
 * Encadeamento opcional
 */

//console.log(restaurante.horarioAbertura.segunda?.abre);


/**
 * Loop de Objetos: Object.keys, Object.values, Object.entries
 */

// const propriedades = Object.keys(restaurante.horarioAbertura);  // --> Retorna as CHAVES do objeto
// const propriedades = Object.values(restaurante.horarioAbertura); //   --> Retorna os VALORES contidos nas chaves do Objeto
const propriedades = Object.entries(restaurante.horarioAbertura);
// console.log(propriedades);

// for (let elemento of propriedades) {
//     console.log(elemento);
// }

// Object.entries Loop
// for ( let [ chave, valor ] of propriedades ) {
//     console.log(`Dia: ${chave} -- Horário de Funcionamento: das ${valor.abre}h às ${valor.fecha}h`);
// }


/**
 * Estruturas de dados: SET
 */

const ordersSet = new Set(['Macarrão', 'Pizza', 'Risoto', 'Macarrão', 'Pizza', 'Pizza']);
// console.log(ordersSet);

// console.log(ordersSet.size);         // ---> Tamanho de um conjunto
// console.log(ordersSet.has('Pizza')); // ---> Verifica se há determinado valor no conjunto
// console.log(ordersSet.has('Pão'));
ordersSet.add('Pão de alho');           // ---> Adiciona valores novos ao conjunto
// console.log(ordersSet);
ordersSet.delete('Pão de alho')         // ---> Remove valor de um conjunto

const staff = ['Garçom', 'Chef', 'Gerente', 'Garçom', 'Garçom', 'Chef'];
const staffConjunto = [ ...new Set(staff) ];
console.log(staffConjunto);