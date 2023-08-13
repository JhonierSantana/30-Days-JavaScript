const fetch = require('node-fetch');
const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
  .then(response => response.json())
  .then(catBreeds => {
    const weights = catBreeds.map(cat => parseFloat(cat.weight.metric));
    const totalWeight = weights.reduce((total, weight) => total + weight, 0);
    const averageWeight = totalWeight / weights.length;
    console.log(`Average weight of cats in metric units: ${averageWeight} kg`);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
 
  });




fetch(countriesAPI)
  .then(response => response.json())
  .then(countries => {
    countries.sort((a, b) => b.area - a.area);
    const largestCountries = countries.slice(0, 10).map(country => country.name);
    console.log('10 Largest Countries:');
    console.log(largestCountries);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });



fetch(countriesAPI)
  .then(response => response.json())
  .then(countries => {
    const officialLanguages = countries.reduce((languages, country) => {
      if (country.languages && country.languages.length > 0) {
        languages.push(...country.languages.map(lang => lang.name));
      }
      return languages;
    }, []);
    const totalLanguages = new Set(officialLanguages).size;
    console.log(`Total number of languages used as officials in the world: ${totalLanguages}`);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
