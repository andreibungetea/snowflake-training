const form = document.querySelector(".calculator-form");
const firstNumberError = document.querySelector(".first-number-error");
const operatorError = document.querySelector(".operator-error");
const formResult = document.querySelector(".calculator-form-result");

let isSubmitted = false;

const handleSubmit = (e) => {
    e.preventDefault();

    isSubmitted = true;    

    validateFirstNumber(); //apelam f si nu mai scriem tot codul: "Don't repeat your self"
    validateOperator();
    validateSeccondNumber();
    
    const calculatorFormError = document.querySelector(
        ".calculator-form-error:not(.hide)"
    );

    if (calculatorFormError === null) { //in cazull in care nu avem eroare
    const data = new FormData(form); //extragem datele din formular

    const firstNumber = Number(data.get("first-number")); //"3"-convertim data.get la number
    const seccondNumber = Number(data.get("second-number"));//"5"-convertim data.get la number
    const operator = data.get("operator");

    let result;

    if (operator === "+") {
        result = firstNumber + seccondNumber; //"3"+"5"="35" - cand js vede 2 "" le ueste. converite la Number => 8
    } else if (operator === "-") {
        result = firstNumber - seccondNumber;
    } else if (operator === "*") {
        result = firstNumber * seccondNumber;
    } else if (operator === "/") {
        result = firstNumber / seccondNumber;
    }

    formResult.innerText = result;
  }
};

form.addEventListener("submit", handleSubmit);

const firstNumberInput = document.querySelector("#first-number");

const handleFirstNumberInputChange = () => {
    if (isSubmitted === true) { //validam f doar dc nu s-a introdus nimic
        validateFirstNumber();
    }
};

firstNumberInput.addEventListener("input", handleFirstNumberInputChange);

firstNumberInput.addEventListener("input", handleFirstNumberInputChange);

const validateFirstNumber = () => {
    
    const data = new FormData(form); //preluam info din formular
    
    // function-scoped: se fol doar in f in care este creata
    const firstNumber = data.get("first-number");
    
    if (firstNumber.length === 0) {
        firstNumberError.classList.remove("hide");
  } else {
        firstNumberError.classList.add("hide");
  }
};

// ---- Second number error----
const seccondNumberError = document.querySelector(".second-number-error");
const seccondNumberInput = document.querySelector("#second-number");

const handleseccondNumberInputChange = () => {
    if (isSubmitted === true) {
        validateSeccondNumber();
    }
};

seccondNumberInput.addEventListener("input", handleseccondNumberInputChange);

const validateSeccondNumber = () => {
    const data = new FormData(form);
    
    const seccondNumber = data.get("second-number");
    
    if(seccondNumber.length === 0) {
        seccondNumberError.classList.remove("hide");
    } else {
        seccondNumberError.classList.add("hide");
    }
};

// ----- Operator -----
const validateOperator = () => {
    const data = new FormData(form);

    const operator = data.get("operator");
    
    if (operator.length === 0) {
        operatorError.classList.remove("hide");
    } else {
        operatorError.classList.add("hide");
    }
};

// ------- Reset button -----
const resetButton = document.querySelector(".reset-button");

const handleResetButton = () => {
    const resetFirstNumber = document.querySelector("#first-number");
    const resetSeccondNumber = document.querySelector("#second-number");
    const resetOperator = document.querySelector("#operator");
    const resetResultContent = document.querySelector(".result-content");

    resetFirstNumber.value = "";
    resetSeccondNumber.value = "";
    resetOperator.value = "";
    resetResultContent.value = "-";

    // form.reset();
    // formResult.innerHTML = "-";

    firstNumberError.classList.add("hide");
    seccondNumberError.classList.add("hide");
    operatorError.classList.add("hide");

    isSubmitted === false;
};

resetButton.addEventListener("click", handleResetButton);