const increaseButton = document.querySelector(".incraese-button");
const currentNumber = document.querySelector(".curent-number");



const handleIncreaseButton = () => {
    counter++;
    currentNumber.innerText = counter++;
};

increaseButton.addEventListener("click", handleIncreaseButton);