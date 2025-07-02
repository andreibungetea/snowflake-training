const form = document.querySelector(".card-form");
const cardHolderNameError = document.querySelector(".cardholder-name-error");
const cardholderNumberError = document.querySelector(".cardholder-number-error");
const forbiderCharactersNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9,"];
const forbiderCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"];

let isSubmited = false; //ne folosim de varibila pt a verifica daca un formular a fost submited

const handleSubmit = (e) => {
    e.preventDefault(); //nu mai face refresh automat
    isSubmited === true;
    
    const data = new FormData(e.target);
    
// ---- Cardholder name ---------
    const cardholderName = data.get("cardholder-name"); //preluam info din input

    validateName(cardholderName);
 
}

form.addEventListener("submit", handleSubmit);

// // ---- Cardholder name input  ---------
const cardHolderNameInput = document.querySelector("#cardholder-name");
const cardFrontName = document.querySelector(".card-front-name");

const handleCardholderNameChange = () => {
    
    if (cardHolderNameInput.length === 0) {
        cardFrontName.innerText = "JANE APPLESEED";
    } else {
        cardFrontName.innerText = cardHolderNameInput.value;
    }

    if (isSubmited === true){
        validateName(cardHolderNameInput.value);
    }

}

cardHolderNameInput.addEventListener("input", handleCardholderNameChange);

const validateName = (name) => {
    cardHolderNameError.classList.add("hide"); //eroarea este ascunsa de la inceput
    // 1. requiered
    if (name.length === 0) {
        cardHolderNameError.classList.remove("hide");
        cardHolderNameError.innerText = "This field is requiered";
    }
    // 2. verificare caractere interzise prin for
    for (let i = 0; i < name.length; i++) {
        if (forbiderCharactersNumbers.includes(name[i])) {
            cardHolderNameError.classList.remove("hide");
            cardHolderNameError.innerText = "Must contain only letters";
            break;
        }
    }
    // 3. limita maxima de 256 caractere
    if (name.length > 256){
        cardHolderNameError.classList.remove("hide");
        cardHolderNameError.innerText = "Maximum number of characters is 256";
    }

    if (cardHolderNameInput === false){
        form.classList.add("hide");
    }
}

// ---- Cardholder number ---------
cardholderNumberError.classList.add("hide");
const cardholderNumber = document.querySelector("#cardholder-number");

const handleCardHolderNumberChange = (e) => {
    const data = new FormData(e.target);

    const cardholderNumber = data.get("cardholder-number");//preluam info din input
   
    //1. requiered
    if (cardholderNumber === 0) {
        cardholderNumberError.classList.remove("hide");
        cardholderNumberError.innerText = "Wrong format, number only"
    }
    //2. spacial characters
    for (let i = 0; i < cardholderNumber.length; i++) {
        if (forbiderCharacters.includes(cardholderNumber[i]));
    }

    //3. max lenghth
    if (cardholderNumber > 19)
        cardholderNumberError.classList.remove("hide");
        cardholderNumberError.innerText = "Maximum length is 19 characters";

    };
    
    cardholderNumber.addEventListener("input", handleCardHolderNumberChange);
    
    // ---- Cardholder number input ---------
    const cardholderNumberInput = document.querySelector("#cardholder-number");
    const cardFrontNumber = document.querySelector(".card-front-number");
    
    const handleCardHolderNumberInput = () => {
    // cardFrontNumber.innerText = cardholderNumber.input;
 console.log("tr");
};

cardholderNumberInput.addEventListener("input", handleCardHolderNumberInput);



