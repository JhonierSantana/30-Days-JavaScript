const countries = require('./countries_data');

function mostSpokenLanguages(countries, numLanguages) {
    const languageCounts = {};
  
    countries.forEach((country) => {
      if (country.languages) {

        country.languages.forEach((language) => {
          if (languageCounts[language]) {
            languageCounts[language]++;
          } else {
            languageCounts[language] = 1;
          }
        });
      }
    }); 

    const sortedLanguages = Object.keys(languageCounts).sort(
        (a, b) => languageCounts[b] - languageCounts[a]
      );

      const topLanguages = sortedLanguages.slice(0, numLanguages).map((language) => ({
        country: language,
        count: languageCounts[language],
      }));

      return topLanguages;
}


const topSpokenLanguages = mostSpokenLanguages(countries, 10);
console.log(topSpokenLanguages);
