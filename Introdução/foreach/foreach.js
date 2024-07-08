// Repetição Foreach

let funcionarios = [
    'Viviane',
    'Rosângela',
    'Miguel',
    'Lucas',
    'Fernanda'
]

// Callback do foreach pode receber nessa ordem (valor, índice, array)
funcionarios.forEach((valor, indice, array) => {
    console.log(`Índice: ${indice} e Valor: ${valor}`)

    if(valor == 'Lucas'){
        array[indice] = 'Um novo valor'
    }
})

console.log(funcionarios)


// for
console.log(convidados)
for (let x = 0 ; x < convidados.length ; x++) {
    if(convidados[x] == 'José') {
        convidados[x] = 'Um novo valor'
    }
}
console.log(convidados)