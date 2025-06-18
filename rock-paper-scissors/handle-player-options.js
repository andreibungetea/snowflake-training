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
    // selectedOptionImage.setAttribute("src", `./assets/${selectedOption}.svg`);

    selectedOptionImage.setAttribute("src", `./assets/${selectedOption}.svg`);

    // const randomIndex = Math.floor(Math.random() * 3); //alegerea aleatorie a unui nr si max din care poate alege. Min 0, max2
    // const houseOption = options[randomIndex]; //afisam in consola indexul si pe ce pozitie sta acesta
    // houseOptionImage.setAttribute("src", `./assets/${houseOption}.svg`);

    const randomIndex = Math.floor(Math.random() * 3);
  const houseOption = options[randomIndex];
  houseOptionImage.setAttribute("src", `./assets/${houseOption}.svg`);

    const finalResult = getFinalResult(selectedOption, houseOption);
    finalResultText.innerText = finalResult;  
};