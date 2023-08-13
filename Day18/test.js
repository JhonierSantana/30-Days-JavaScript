const fetch = require('node-fetch');

const countriesAPI = 'https://restcountries.com/v2/all'

fetch(countriesAPI)
    .then(response => response.json())
    .then(countries => {
        countries.forEach(country => {
            const {name, capital,  languages, population, area} = country;
            console.log(`Cuntry: ${name}`);
            console.log(`Capital ${capital}`);
            console.log(`Languages ${languages.map(lang => lang.name).join(', ')}`);
            console.log(`Population ${population}`);
            console.log(`Area: ${area}`)
            console.log('------------------------------');
        })
    })
    .catch(error => {
        console.error('error fetching data:', error);
    })

const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI)
    .then(response => response.json())
    .then(cats => {
        const catsNames = cats.map(cat => cat.name);
        console.log(catsNames);
    })
    .catch(err => {
        console.error('Error fetching data:', err);
    })