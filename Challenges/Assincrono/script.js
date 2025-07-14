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
    .then((data) => renderCountry(data[0], locality))
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