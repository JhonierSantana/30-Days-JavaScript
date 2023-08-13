function createBarElement(label, value, maxValue) {
  const barElement = document.createElement("div");
  barElement.classList.add("bar");

  const labelElement = document.createElement("div");
  labelElement.classList.add("bar-label");
  labelElement.textContent = label;

  const valueElement = document.createElement("div");
  valueElement.classList.add("bar-value");
  
  const normalizedValue = (value / maxValue) * 100;
  valueElement.style.width = `${normalizedValue}%`;

  const valueTextElement = document.createElement("div");
  valueTextElement.classList.add("bar-value-text");
  valueTextElement.textContent = value.toLocaleString();

  valueElement.appendChild(valueTextElement);

  barElement.appendChild(labelElement);
  barElement.appendChild(valueElement);

  return barElement;
}

function createChart(title, data) {
  const chartContainer = document.getElementById("chartContainer");
  chartContainer.innerHTML = `<h2>${title}</h2>`;

  const maxValue = Math.max(...data.map(item => item.value));

  for (let item of data) {
    const barElement = createBarElement(item.name, item.value, maxValue);
    chartContainer.appendChild(barElement);
  }
}

function showChart(chartType) {
  if (chartType === "population") {
    const topPopulatedCountries = countries_data
      .sort((a, b) => b.population - a.population)
      .slice(0, 10);
    createChart("Top 10 Most Populated Countries", topPopulatedCountries.map(country => ({
      name: country.name,
      value: country.population
    })));
  } else if (chartType === "languages") {
    const topSpokenLanguages = countries_data
      .flatMap(country => country.languages.map(language => language))
      .reduce((languageCount, language) => {
        languageCount[language] = (languageCount[language] || 0) + 1;
        return languageCount;
      }, {});
    
    const topLanguages = Object.entries(topSpokenLanguages)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
      
    createChart("Top 10 Most Spoken Languages", topLanguages.map(language => ({
      name: language[0],
      value: language[1]
    })));
  }
}

showChart("population");
