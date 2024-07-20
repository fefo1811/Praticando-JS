function exibirTermometro(arr) {
    // let counter = 0
    //
    // while(counter < arr.length) {
    //     console.log(`${arr[counter]}ºC in ${counter + 1} days`);
    //     counter++
    // }
    // console.log('============')

    for (let i = 0; i < arr.length; i++) {
        let word = (i + 1) < 2 ? "day" : "days";


        console.log(`${arr[i]}ºC in ${i + 1} ${word}`);
    }
    console.log('============')
}

exibirTermometro([17, 21, 23]);
exibirTermometro([12, 5, -5, 0, 4]);
