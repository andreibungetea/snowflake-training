const playerOptionsContainer = document.querySelector(".player-options-container");

const finalResultContainer = document.querySelector(".final-result-container");
const selectedOptionImage = document.querySelector(".selected-option-image");
const houseOptionImage = document.querySelector(".house-option-image");
const finalResultText = document.querySelector(".final-result-text");

const optionButtons = document.querySelectorAll(".player-options-container button");

let selectedOption;
const options = ["scissors", "paper", "rock"];

const handleChooseOption = (e) => {
    const clickedButton = e.target.parentNode;
    selectedOption = clickedButton.getAttribute("value");

    moveToFinalResult();
    
    updateFinalResult();
};

optionButtons.forEach((optionButton) => {
  optionButton.addEventListener("click", handleChooseOption);
});

// ------ Final resut -----------
const moveToFinalResult = () => {
    playerOptionsContainer.classList.add("hide");
    finalResultContainer.classList.remove("hide");
};

const updateFinalResult = () => {
    
    selectedOptionImage.setAttribute("src", `./assets/${selectedOption}.svg`);

    const randomIndex = Math.floor(Math.random() * 3);
    const houseOption = options[randomIndex];
    houseOptionImage.setAttribute("src", `./assets/${houseOption}.svg`);

    const finalResult = getFinalResult(selectedOption, houseOption);
    finalResultText.innerText = finalResult;  
};

// ---------- Rules ----------
const rulesButton = document.querySelector(".rules-button");
const modal = document.querySelector(".modal");
const modalRules = document.querySelector(".modal-rules");
const closeImage = document.querySelector(".close-image");



const handleRulesButtonModal = () => {
    modal.classList.remove("hide");
};

rulesButton.addEventListener("click", handleRulesButtonModal);

const handleResetImageClose = () => {
    modal.classList.add("hide");
}

closeImage.addEventListener("click", handleResetImageClose);