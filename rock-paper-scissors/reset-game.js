const resetButton = document.querySelector(".reset-button");
const finalResutText = document.querySelector(".final-result-text");

const handleResetButton = () => {
    finalResultContainer.classList.add("hide");
    playerOptionsContainer.classList.remove("hide");
    finalResutText.classList.remove("hide");
};

resetButton.addEventListener("click", handleResetButton);