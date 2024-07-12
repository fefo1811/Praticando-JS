function soma (...args) {
    let valor = 0
    for (let i in args) {
        valor += args[i]
    }   

    console.log(valor)
} soma(1, 2, 3, 5, 7, 8)