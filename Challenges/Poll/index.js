// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:

// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)

const poll = {
    question: "Whats is your favorite programming language?",
    options: [
        "0: JavaScript",
        "1: Python",
        "2: Rust",
        "3: C++"
    ],
    answers: new Array(4).fill(0),

    registerNewAnswer() {
        // 1.1. Display a prompt window for the user to input the number of the
        // selected option. The prompt should look like this:
        // What is your favourite programming language?
        // 0: JavaScript
        // 1: Python
        // 2: Rust
        // 3: C++
        let is_input_ok = true
        while(is_input_ok) {
            const user_answer = window.prompt(`${this.question}\n${this.options.map(el => `\n${el}`)}`)

            if (typeof(user_answer) != Number) {

            }

            if (user_answer > 3 || user_answer < 0) {
                console.log("Select a valid option")
                is_input_ok = true
            } else {
                is_input_ok = false
            }
        }

    }
}

// poll.registerNewAnswer()

