const planetImages = {
    Mercury: "images/mercurio.jpg",
    Venus: "images/venus.jpg",
    Mars: "images/mars.webp",
    Jupiter: "images/jupiter.jpg",
    Saturn: "images/saturno.jpg",
    Uranus: "images/uranus.jpg",
    Neptune: "images/neptune.jpg"
  };
  
  const planetImageElement = document.getElementById("planetImage");
  const resultTextElement = document.getElementById("resultText");
  const planetInfoContainer = document.getElementById("planetInfo");
  const planetResultContainer = document.getElementById("planetResultContainer");
  const selectedPlanetImageElement = document.getElementById("selectedPlanetImage");
  
  function showSelectedPlanetImage() {
    const selectedOption = document.getElementById("planet").options[
      document.getElementById("planet").selectedIndex
    ];
    const selectedPlanetImage = selectedOption.getAttribute("data-image");
    if (selectedPlanetImage) {
      selectedPlanetImageElement.src = selectedPlanetImage;
      document.getElementById("planetResultContainer").style.display = "block";
      const weight = parseFloat(document.getElementById("weight").value);
      const planet = parseFloat(selectedOption.value);
      if (!isNaN(weight) && !isNaN(planet)) {
        const weightOnPlanet = (weight * planet).toFixed(2);
        resultTextElement.textContent = `Peso en este planeta es de ${weightOnPlanet} kg.`;
      } else {
        resultTextElement.textContent = "Por favor, ingresa un peso válido.";
      }
    } else {
      selectedPlanetImageElement.src = "";
      document.getElementById("planetResultContainer").style.display = "none";
    }
  }


