// Reverse Geocoding
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

// Latitude -23.5317
// Longitude -46.7899
document.getElementById("btn").addEventListener("click", () => whereAmI("-23.5317", "-46.7899"))

/**
 * Getting user location by latitude and longitude
 * @param {number} lat 
 * @param {number} lng 
 */
const whereAmI = (lat, lng) => {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
    .then((response) => response.json())
    .then((data) => getCountry(data))
}
/**
 * Getting user's country information by country name
 * @param {object} data 
 */
const getCountry = (data) => {
    const {countryName, locality} = data
    fetch(`https://restcountries.com/v3.1/name/${countryName.toLowerCase()}`)
    .then((response) => response.json())
    .then((data) => {
        renderCountry(data[0], locality);
        return `You are in ${data[0].name.common}`
    })
}
/**
 * Rendering user's country information and location
 * @param {object} data 
 * @param {string} locality 
 */
const renderCountry = (country, locality) => {
    console.log(country)
    document.querySelector(".country_container").style.display = "block"
    countryContainer = document.querySelector(".country_container")
        const html = `
    <article class="country">
    <img class="country_img" src="${country.flags.svg}"/>
    <div class="country_data">
        <div class="country_title">
            <h3 class="country_name">${country.name.common}</h3>
            <h4 class="country_region">${country.region}</h4>
        </div>

        <p class="country_row"><span>👫</span>${(+country.population / 1000000).toFixed(1)}</p>
        <p class="country_row"><span>🗣️</span>${country.languages.por}</p>
    </div>
    </article>
    `;

    countryContainer.insertAdjacentHTML("beforeend", html)

}
// whereAmI(19.037, 72.873)

/**
 * Consuming Promises with Async/Await
 */
const whereAmI2 = async (country) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country.toLowerCase()}`);
    const data = await response.json();
    console.log(data);
    renderCountry(data[0]);
    return `You are in ${data[0].name.common}`;
}
// whereAmI2("Portugal");

/**
 * Returning values from Async functions
 */
// console.log("1: Will get location");
// const user_location = whereAmI2("Brazil");
// console.log(user_location);
// whereAmI2("Brazil").then(res => console.log(res)).catch(e => console.log(e));
// console.log("2: Finished getting location");

/**
 * Running Promises in parallel
 */

/**
 * A function that does Fetch API requests and return the responses in JSON format
 * @param {string} url 
 * @param {string} errorMsg 
 * @returns Object
 */
const getJSON = (url, errorMsg = "Something went wrong") => {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    })
};
const getCountries = async (c1,c2,c3) => {
    try {
        // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1.toLowerCase()}`);
        // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2.toLowerCase()}`);
        // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3.toLowerCase()}`);
        // Executing Promises that aren`t related in parallel
        const data = await Promise.all([
            getJSON(`https://restcountries.com/v3.1/name/${c1.toLowerCase()}`),
            getJSON(`https://restcountries.com/v3.1/name/${c2.toLowerCase()}`),
            getJSON(`https://restcountries.com/v3.1/name/${c3.toLowerCase()}`)
        ])
        console.log(data.map(([country]) => country.capital[0]))
    }catch(e) {
        console.error(e);
    }
};

// getCountries("Brazil", "Portugal", "Peru");

/**
 * Promises combinators: .race, .allSettled, .any
 */

/**
 * Will execute requests and return the first resolved.
 * If has a rejected response, resolved ones will be ignored.
 */
(async function() {
    const response = await Promise.race([
            getJSON(`https://restcountries.com/v3.1/name/italy`),
            getJSON(`https://restcountries.com/v3.1/name/brazil`),
            getJSON(`https://restcountries.com/v3.1/name/egypt`)
    ])
    console.log(response[0].name)
})()
/**
 * Creating a timeout
 * @param {number} sec 
 */
const timeout = (sec) => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Request took too long!"))
        }, sec * 1000)
    })
}
Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    timeout(1)
]).then(res => {
    console.log(res[0])
}).catch(e => console.error(e))
/**
 * Do the same as .all
 * The difference is .allSettled return all responses even if have a rejected one.
 */
Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Error"),
    Promise.resolve("Success"),
]).then(res => console.log(res))
/**
 * Execute all requests, catch the first resolved and ignore the rejected ones
 */
Promise.any([
    Promise.resolve("Success"),
    Promise.reject("Error"),
    Promise.resolve("Another Success"),
]).then(res => console.log(res))
/**
 * CODING CHALLENGE #3
 */