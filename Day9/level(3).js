const countries = require('./countries_data');

function getTenMostPopulatedCountries() {
  
  const sortedCountries = countries.sort((a, b) => b.population - a.population);

  
  const tenMostPopulatedCountries = sortedCountries.map(country => ({
    country: country.name,
    population: country.population,
  }));

  return tenMostPopulatedCountries;
}


const tenMostPopulatedCountries = getTenMostPopulatedCountries();
console.log(tenMostPopulatedCountries.slice(0, 10));
