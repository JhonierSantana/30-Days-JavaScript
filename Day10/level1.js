const empyArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const setEmpy = new Set(empyArray);

for (const empy of empyArray) {
  setEmpy.add(empy);
}
setEmpy.clear();
console.log(setEmpy);

countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const mapCountry = new Map(countries)

countries.forEach((country) => {
  mapCountry.set(country, country.length);
});

console.log(mapCountry);