import { useState } from 'react';
import './App.css'

const App = () => {

  let [displayFirstNumberError, setDisplayFirstNumberError] = useState(false);
  let [displaySecondNumberError, setDisplaySecondNumberError] = useState(false);
  let [displayOperatorError, setDisplayOperatorError] = useState(false);
  let [calculatorResult, setCalculatorResult] = useState("-");
  let [reset, setReset] = useState(false);

  let numberOfError = 0;
 
  const handleSubmit = (e) => {
      e.preventDefault();

      // isSubmitted === true;

      const data = new FormData(e.target);

      validateFirstNumber(data.get("first-number"));
      validateSecondNumber(data.get("second-number"));
      validateOperator(data.get("operator"));
      // handleResetButton(data.get(reset));

      if(numberOfError === 0) {

        const firstNumber = Number(data.get("first-number")); //"3"-convertim data.get la number
        const secondNumber = Number(data.get("second-number"));//"5"-convertim data.get la number
        const operator = data.get("operator");

        let result;

        if (operator === "+") {
            result = firstNumber + secondNumber; //"3"+"5"="35" - cand js vede 2 "" le ueste. convertite la Number => 8
        } else if (operator === "-") {
            result = firstNumber - secondNumber;
        } else if (operator === "*") {
            result = firstNumber * secondNumber;
        } else if (operator === "/") {
            result = firstNumber / secondNumber;
        }

        setCalculatorResult(result);
      }
  };

const validateFirstNumber = (number) => {
    
    if (number.length === 0) {
        setDisplayFirstNumberError(true);
        numberOfError++;
  } else {
        setDisplayFirstNumberError(false);
    }
};

const validateSecondNumber = (number) => {
      
    if(number.length === 0) {
        setDisplaySecondNumberError(true);
        numberOfError++;
    } else {
        setDisplaySecondNumberError(false);
    }
};

const validateOperator = (operator) => {
      
    if (operator.length === 0) {
        setDisplayOperatorError(true);
    } else {
        setDisplayOperatorError(false);
    }
};

// const handleResetButton = (reset) => {
//     setDisplayFirstNumberError(false);
//     setDisplaySecondNumberError(false);
//     setCalculatorResult(false);
//     setDisplayOperatorError(false);

//     setReset(reset);

    // resetFirstNumber.value = "";
    // resetSecondNumber.value = "";
    // resetOperator.value = "";
    // resetResultContent.value = "-";
  

    // firstNumberError.classList.add("hide");
    // secondNumberError.classList.add("hide");
    // operatorError.classList.add("hide");

    // isSubmitted === false;
// };

  return (
    <section>
      <h1>Very simple calculator</h1>
      <form onSubmit={handleSubmit} className="calculator-form">
        <label htmlFor="first-number">First number</label>
        <br />
        <input type="number" id="first-number" name="first-number" />
        {displayFirstNumberError === true ? (
        <p
          className="hide calculator-form-error first-number-error error-appearance"
        >
          This field is required
        </p>
        ) : null}
        <br />
        <label htmlFor="operator">Operator</label>
        <br />
        <select id="operator" name="operator">
          <option value="">Select one</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        {displayOperatorError === true ? (
        <p className="hide calculator-form-error operator-error error-appearance">
          This field is requiered
        </p>
        ) : null}
        <br />
        <label htmlFor="second-number">Second-number</label>
        <br />
        <input type="number" id="second-number" name="second-number" />
        {displaySecondNumberError === true ? (
        <p
          className="hide calculator-form-error second-number-error error-appearance"
        >
          This field is requiered
        </p>
        ) : null}
        <br />
        <button className="calculate-button">Calculate</button>
      </form>
      
      <hr />
      <br />
      <p className="result-content">Result</p>
      <p className="calculator-form-result">{calculatorResult}</p>
      <br />
      <button className="reset-button">RESET</button>
    </section>
  );
};

export default App
