const countriesContainer = document.getElementById("countriesContainer");
const searchInput = document.getElementById("searchInput");
const startingWordButton = document.getElementById("startingWordButton");
const anyWordButton = document.getElementById("anyWordButton");
const searchInfo = document.getElementById("searchInfo");

const displayCountries = (filteredCountries) => {
    countriesContainer.innerHTML = "";
    filteredCountries.forEach(country => {
        const countryBox = document.createElement("div");
        countryBox.className = "country-box";
        countryBox.textContent = country;
        countriesContainer.appendChild(countryBox);
    });
    if (searchInput.value.trim() !== "") {
        searchInfo.textContent = `Countries start with '${searchInput.value}' are ${filteredCountries.length}`;
    } else {
        searchInfo.textContent = "";
    }
}
const updateSearchInfo = (filteredCount) => {
    const searchType = startingWordButton.classList.contains("active") ? "Starting Word" : "Search with any word";
    const searchLetter = searchInput.value.trim();
    const pluralSuffix = filteredCount === 1 ? "" : "s";

    searchInfo.textContent = `${searchType} "${searchLetter}" are ${filteredCount} country${pluralSuffix}.`;
}
const filterCountries = (letter) => {
    const filteredCountries = countries.filter(country => 
        country.toLowerCase().startsWith(letter.toLowerCase())
    );
    displayCountries(filteredCountries);
}


startingWordButton.addEventListener("click", () => {
    filterFunction = (country) => country.toLowerCase().startsWith(searchInput.value.toLowerCase());
    startingWordButton.classList.add("active");
    anyWordButton.classList.remove("active");
    displayCountries(countries.filter(filterFunction));
});

anyWordButton.addEventListener("click", () => {
    filterFunction = (country) => country.toLowerCase().includes(searchInput.value.toLowerCase());
    anyWordButton.classList.add("active");
    startingWordButton.classList.remove("active");
    displayCountries(countries.filter(filterFunction));
});

searchInput.addEventListener("input", () => {
    displayCountries(countries.filter(filterFunction));
});
displayCountries(countries);


