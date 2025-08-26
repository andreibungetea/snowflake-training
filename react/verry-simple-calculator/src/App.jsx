import { useState } from 'react';
import './App.css';

const App = () => {

  let [displayFirstNumberError, setFirstNumberError] = useState(false);
  let [displayOperatotError, setDisplayOperatorError] = useState(false);
  let [displaySecondNumberError, setDisplaySecondNumberError] = useState(false); 
  let [calculatorResult, setCalculatorResult] = useState("-"); //rezultatul initial este "-"

  let numberOfErros = 0;

 
  const handleSubmit = (e) => {
    e.preventDefault;

    const data = new FormData(e.target);

    validateFirstNumber(data.get("first-number")); //f ii transmit ce contine primul input
    validateOperator(data.get("operatot"));
    validateSecondNumber(data.get("seccond-number"));

    if (numberOfErros === 0) {
    const firstNumber = Number(data.get("first-number")); //"3"-convertim data.get la number
    const secondNumber = Number(data.get("second-number"));//"5"-convertim data.get la number
    const operator = data.get("operator");

    let result;

    if (operator === "+") {
        result = firstNumber + secondNumber; //"3"+"5"="35" - cand js vede 2 "" le ueste. converite la Number => 8
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
      numberOfErros++;
        setFirstNumberError(true);
  } else {
        setFirstNumberError(false);
  }
};

  const validateSecondNumber = (number) => {
    if(number.length === 0) {
      numberOfErros++;
        setDisplaySecondNumberError(true);
    } else {
        setDisplaySecondNumberError(false);
    }
};

  const validateOperator = (operator) => {
    
      if (operator.length === 0) {
      numberOfErros++;
        setDisplayOperatorError(true);
    } else {
        setDisplayOperatorError(false);
    }
};

  return (
    <section>
      <h1>Very simple calculator</h1>
      <form onClick={handleSubmit} className="calculator-form">
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
       {/* daca nu este adevarata conditia punem null */}
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
        {displayOperatotError === true ? (
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
        <button class="calculate-button">Calculate</button>
      </form>
      <hr />
      <br />
      <p className="result-content">Result</p>
      <p className="calculator-form-result">{calculatorResult}</p>
      <br />
      <button clasName="reset-button">RESET</button>
    </section>
  )
}

export default App;
