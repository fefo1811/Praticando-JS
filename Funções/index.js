const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightNumber, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`)
        this.bookings.push({
            flight: `${this.iataCode}${flightNumber}`,
            name
        })
    }
}
lufthansa.book(239, "Felipe")
console.log(lufthansa.bookings)

const eurowings = {
    name: "Eurowings",
    iataCode: "EW",
    bookings: [],
}

const swiss = {
    name: "Swiss Airlines",
    iataCode: "LX",
    bookings: []
}

const book = lufthansa.book
/**
 * Call method will call a function and will be referecing a object settled as
 * the first argument of this method.
 * 
 * The others arguments will be the arguments to the function that will be
 * executed.
 */
book.call(eurowings, 23, "Felipe") 
book.call(lufthansa, 53, "Valentin")
book.call(swiss, 543, "Nenem")

/**
 * This method acts just like Call method. This method is not use anymore.
 * It receives as arguments the name of an object and an array of arguments 
 */
const flight_data = [543, "George Cooper"]
book.apply(swiss, flight_data)
book.call(swiss, ...flight_data) // <-- A good way to use .call

/**
 * Its another way to execute one function using properties from any objects.
 * The .bind method returns a new array and then are passed arguments when calling this new function.
 * This method can receive the arguments when binding to an object, but will not be executed right at the moment.
 */
const book_EW = book.bind(eurowings)
const book_LH = book.bind(lufthansa, 234, "Fefo")
const book_LX = book.bind(swiss)
book_EW(879, "Steven Williams")
book_LH()