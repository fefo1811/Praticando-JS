// Trabalhando com laços de repetição
for(let y = 1; y <= 10; y++) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${y} x ${i} = ${y * i}`)
    }
    console.log('==========')
}

// while
let x = 1;
while(x <= 10) {
    let y = 0;
    while (y <= 10) {
        console.log(`${x} x ${y} = ${x * y}`)
        y++
    }
    console.log('===========')
    x++
}