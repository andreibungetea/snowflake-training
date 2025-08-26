const increaseButtoon = document.querySelector(".increase-button");
const currentNumber = document.querySelector(".current-number");

let counter = 0;

const handleIncreaseNumber = () => {
    counter++;
    currentNumber.innerText = counter;
};

increaseButtoon.addEventListener("click", handleIncreaseNumber);