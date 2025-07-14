// console.log("Test start")

// setTimeout(() => console.log("0 sec timer"), 0)
// Promise.resolve("Resolved promise 1").then(res => console.log(res))
// Promise.resolve("Resolved promise 2").then(res => console.log(res))
// console.log("Test end")

const lottery_promise = new Promise(function(resolve, reject) {
    if(Math.random() >= 0.5) {
        resolve("Win")
    } else {
        reject("Lose")
    }
})

lottery_promise.then(res => console.log(res)).catch(e => console.error(e))