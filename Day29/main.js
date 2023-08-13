const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeTextColors() {
    let newText1 = "";
    let newText2 = "";

    for (let i = 0; i < text1.textContent.length; i++) {
        const color = getRandomColor();
        newText1 += `<span style="color:${color}">${text1.textContent[i]}</span>`;
    }

    for (let i = 0; i < text2.textContent.length; i++) {
        const color = getRandomColor();
        newText2 += `<span style="color:${color}">${text2.textContent[i]}</span>`;
    }

    text1.innerHTML = newText1;
    text2.innerHTML = newText2;
}

function changeBackgroundColor() {
    const background = document.body.style;
    background.backgroundImage = `linear-gradient(to bottom, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
}

setInterval(() => {
    changeTextColors();
    changeBackgroundColor();
}, 1000);

changeTextColors();
changeBackgroundColor();
