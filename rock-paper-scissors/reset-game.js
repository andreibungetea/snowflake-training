const resetButton = document.querySelector(".reset-button");

const handleResetButton = () => {
    finalResultContainer.classList.add("hide");
    playerOptionsContainer.classList.remove("hide");
};

resetButton.addEventListener("click", handleResetButton);