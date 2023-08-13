const countriesContainer = document.getElementById("countriesContainer");

countries.forEach((country) => {
  const countryBox = document.createElement("div");
  countryBox.classList.add("country-box");
  countryBox.textContent = country;
  countriesContainer.appendChild(countryBox);
});