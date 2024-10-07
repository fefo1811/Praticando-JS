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
// console.log(staffConjunto);



/**
 * Estruturas de dados: MAP
 */

const question = new Map([
    ['question', 'What is the best programming language in the world?'], 
    [1, 'C'], 
    [2, 'Java'], 
    [3, 'Javascript'], 
    ['correct', 3], 
    [true, 'Correct! ❤️'],
    [false, 'Try Again...']
]);

// console.log(question);

// Convertendo Objeto em um Map
const hoursOpening = new Map(Object.entries(restaurante.horarioAbertura));
// console.log(hoursOpening);

// Convertendo Map em um Array
// console.log([...question]);


// Quiz App
// console.log(question.get('question'));
// for (const [key, value] of question) {
//     typeof(key) === 'number' ? console.log(value) : null;
// }

// const answer = Number(prompt('Your Answer: ')); ---> Só funciona em Browser Web
// question.get('correct') === answer ? console.log(question.get(true)) : console.log(question.get(false));

/**
 * Trabalhando com Strings
 */

const airline = "LATAM Linhas Aéreas";
const plane = 'A321';

// console.log(airline[1]); // Pegando a letra na posição 1
// console.log(airline.length); // Tamanho da String
// console.log(airline.lastIndexOf());
// 
// console.log(airline.slice(4, 6)); // Extraindo parte de uma String.
// 
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Percorre do último índice até onde houver espaçamento. +1 para não pegar o espaço vazio.

const checkMiddleSeat = ( assento ) => {
    // B e C são assentos do meio em uma fileira de assentos.
    assento.slice(-1) == 'B' || assento.slice(-1) == 'E' ? console.log('Você está num assento no meio da fileira') : console.log('Você está num assento lateral');
}

checkMiddleSeat('11E');