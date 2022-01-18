document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.btn').addEventListener('click', getCountry);
});

async function getCountry() {
    let country = await fetch("https://restcountries.com/v3.1/name/france");
    country = await country.json();
    document.querySelector('#country')
        .insertAdjacentHTML('afterbegin', `${country[0].name.common}`);
    document.querySelector('#capital')
        .insertAdjacentHTML('afterbegin', `${country[0].capital[0]}`);
}