document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitButton");
    const tableBody = document.querySelector(".table tbody");
    const errorContainer = document.querySelector(".error-message");
    const playerData = JSON.parse(localStorage.getItem("playerData")) || [];

    
    playerData.forEach(function(playerInfo) {
        const playerRow = createPlayerRow(playerInfo);
        tableBody.appendChild(playerRow);
    });

    const containerInput = document.querySelector(".containerInput");
    containerInput.appendChild(errorContainer);

    submitButton.addEventListener("click", function() {
        const inputFields = containerInput.querySelectorAll("input");
        let allFieldsFilled = true;

        inputFields.forEach(function(input) {
            if (input.value === "") {
                allFieldsFilled = false;
                input.classList.add("error");
            } else {
                input.classList.remove("error");
            }
        });

        if (allFieldsFilled) {
            let playerInfo = {};

            inputFields.forEach(function(input, index) {
                playerInfo[input.getAttribute("placeholder")] = input.value;
            });

            const playerRow = createPlayerRow(playerInfo);
            tableBody.appendChild(playerRow);

            
            playerData.push(playerInfo);
            localStorage.setItem("playerData", JSON.stringify(playerData));

            inputFields.forEach(function(input) {
                input.value = "";
            });

            
            errorContainer.textContent = "";
        } else {
            errorContainer.textContent = "All fields are required.";
        }
    });

    function createPlayerRow(playerInfo) {
        const playerRow = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = `${playerInfo["First Name"]} ${playerInfo["Last Name"]}`;
        playerRow.appendChild(nameCell);

        const countryCell = document.createElement("td");
        countryCell.textContent = playerInfo["Country"];
        playerRow.appendChild(countryCell);

        const playerScoreCell = document.createElement("td");
        playerScoreCell.textContent = playerInfo["Player Score"];
        playerRow.appendChild(playerScoreCell);

        const actionsCell = document.createElement("td");

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function() {
            tableBody.removeChild(playerRow);
            const index = playerData.findIndex(function(player) {
                return `${player["First Name"]} ${player["Last Name"]}` === nameCell.textContent;
            });
            if (index !== -1) {
                playerData.splice(index, 1);
                localStorage.setItem("playerData", JSON.stringify(playerData));
            }
        });

        const decreaseButton = document.createElement("button");
        decreaseButton.classList.add("button1")
        decreaseButton.textContent = "-5";
        decreaseButton.addEventListener("click", function() {
            const currentScore = parseInt(playerScoreCell.textContent);
            playerScoreCell.textContent = currentScore - 5;
            
            const index = playerData.findIndex(function(player) {
                return `${player["First Name"]} ${player["Last Name"]}` === nameCell.textContent;
            });
            if (index !== -1) {
                playerData[index]["Player Score"] -= 5;
                localStorage.setItem("playerData", JSON.stringify(playerData));
            }
        });

        const increaseButton = document.createElement("button");
        increaseButton.classList.add("button1")
        increaseButton.textContent = "+5";
        increaseButton.addEventListener("click", function() {
            const currentScore = parseInt(playerScoreCell.textContent);
            playerScoreCell.textContent = currentScore + 5;
            // Actualizar los datos en playerData y el LocalStorage
            const index = playerData.findIndex(function(player) {
                return `${player["First Name"]} ${player["Last Name"]}` === nameCell.textContent;
            });
            if (index !== -1) {
                playerData[index]["Player Score"] += 5;
                localStorage.setItem("playerData", JSON.stringify(playerData));
            }
        });

        actionsCell.appendChild(deleteButton);
        actionsCell.appendChild(decreaseButton);
        actionsCell.appendChild(increaseButton);

        playerRow.appendChild(actionsCell);

        return playerRow;
    }
});