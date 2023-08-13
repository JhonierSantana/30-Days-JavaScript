document.addEventListener("DOMContentLoaded", function () {

  setInterval(function () {
    const year = document.querySelector("h1");
    year.style.color = getRandomColor();
  }, 1000);

  setInterval(function () {
    const dateTime = document.querySelector("h2");
    dateTime.style.backgroundColor = getRandomColor();
  }, 1000);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const challenges = document.querySelectorAll("li");
  challenges.forEach((challenge) => {
    const status = challenge.textContent.split(" ")[1];
    switch (status) {
      case "Done":
        challenge.style.backgroundColor = "green";
        break;
      case "Ongoing":
        challenge.style.backgroundColor = "yellow";
        break;
      case "Coming":
        challenge.style.backgroundColor = "red";
        break;
      default:
        break;
    }
  });
});
