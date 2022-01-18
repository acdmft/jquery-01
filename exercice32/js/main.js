document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.btn').addEventListener('click', getCountry);
});

async function getCountry() {
    let country = await fetch("https://restcountries.com/v3.1/name/france");
    country = await country.json();
    console.log(country[0].name.common, country[0].capital[0]);
}