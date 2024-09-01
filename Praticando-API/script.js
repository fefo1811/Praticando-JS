function createCountryCard(country) {
    const card = document.createElement('div');
    card.classList.add('country');

    const countryName = country.name.common;
    const name = document.createElement('h2');
    name.textContent = countryName;

    const flag = document.createElement('img');
    flag.src = country.flags.png;
    flag.alt = country.flags.alt;

    card.append(name, flag);
    document.querySelector('.main__container').append(card);

}

// Trabalhando com requisições GET
async function getCountry() {
    const resposta = await fetch('https://restcountries.com/v3.1/name/brazil');
    const country = await resposta.json();
    console.log(country);

    country.forEach(createCountryCard);
}

getCountry();