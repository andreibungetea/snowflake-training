import { useState } from "react";
import "./App.css";
import iconDollar from "./assets/icon-dollar.svg";
import iconPerson from "./assets/icon-person.svg";
import logo from "./assets/logo.svg";
import tailwindcss from '@tailwindcss/vite';

const tips = [5, 10, 15, 25, 50];

// Descriere variabila errors

// Caz 1: nu exista erori in formular
// errors = {}

// Caz 2: primul input contine un numar negativ sau zero
// errors = {
//    bill: "Must be greater than 0"
// }

// Caz 3: primul input nu contine nimic
// errors = {
//    bill: "Required"
// }

// Caz 4: primul input nu contine nimic, al doilea input nu contine nimic
// errors = {
//    bill: "Required",
//    custom-tip: "Required"
// }

// userul selecteaza in tip de 10%

const initialCalculatorData = {
    bill: 0,
    selectedTip: 0, 
    customTip: 0,
    numberOfPeople: 0
  }

const initialCalculatorResult = {
    tipAmountPerPerson: 0,
    totalPerPerson: 0,
}

const App = () => {
  
  const [calculatorData, setCalculatorData] = useState(initialCalculatorData);
  const [errors, setErrors] = useState({});
  const [calculatorResult, setCalculatorResult] = useState(initialCalculatorResult);

  console.log(calculatorResult);

  // batching
  const handleSelectTip = (newSelectedTip) => {
        setCalculatorData({
          ...calculatorData,
          selectedTip: newSelectedTip,
          customTip:0
        })
    // setSelectedTip(newSelectedTip);
    // setCustomTip(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    validateBill(data.get("bill"));

    setErrors({});

    const billIsValid = 
    const customTipIsValid = validateCustomTip(data.get("custom-tip"));
    const numberOfPeopleIsValid = validateNumberOfPeople(data.get("number-of-people"));
  };

  if (
    billIsValid === false || 
    customTip === false || 
    numberOfPeople === false
  ) 
    
    return;

    // tipAmountPerPerson = (bill * percentTip / 100) / numberOfPeople;
    const tipPercentage = 
    calculatorData.selectedTip === 0  
        ? calculatorData.customTip 
        : calculatorData.selectedTip;
        
    const bill = Number(data.get("bill"));
    const numberOfPeople = Number(data.get("number-of-people"));
    const tipAmountPerPerson = (bill * tipPercentage) / 100 / 100;

    // total per person = (bill / numberOfPeople) + tipAmountPerPerson
    const totalPerPerson = (bill / numberOfPeople) + tipAmountPerPerson;

    setCalculatorResult({
      tipAmountPerPerson, //cand numele proprietatii este = cu numele constantei, putem scrie doar numele proprietatii si ",": tipAmountPerPerson = tipAmountPerPerson -> tipAmountPerPerson,
      totalPerPerson,
    });
  

  const validateBill = (bill) => {
      // --- varianta mea ---
    if (bill === "") {
      setErrors((prev) => ({
        ...prev,
        bill: "Required",
      }));
      return false; 
    }

    if (Number(bill) <= 0) {
      setErrors((prev) => ({
        ...prev,
        bill: "Must be greater than 0",
      }));
      return false;
    }

    return true;
  };

  const validateCustomTip = (customTip) => {
    if (customTip !== "" && Number(customTip) <= 0) {
      setErrors((prev) => ({
        ...prev,
        "custom-tip": "Must be greater than 0",
      }));
      return false;
    }
    return true;
  };

  const validateNumberOfPeople = (numberOfPeople) => {
    if (numberOfPeople === "") {
      setErrors((prev) => ({
        ...prev,
        "number-of-people": "Required",
      }));
      return false;
    }
    
    if (Number(numberOfPeople) <= 0) {
      setErrors((prev) => ({
        ...prev,
        "number-of-people": "Must be greater than 0",
      }));
      return false;
    }
    return true;
  };

  // userul tasteaza in input 2 -> handleCustomTip() -> setCustomTip(2) -> componenta se re-randeaza ->
  // customTip va fi egal cu 2 -> customTip il inseram in input
  const handleCustomTip = (e) => {
    setCalculatorData({
      ...calculatorData,
      selectedTip: 0,
      customTip: Number(e.target.value)
    })
    // setSelectedTip(0); //aducem val la 0 pt a putea ca butonul sa se deselecteze cand alegem val pt custom
    // setCustomTip(Number(e.target.value)); //primim un "" cu ce introduce userul /- il modif la number
  };

  const handleBillChange = (e) => {
    setCalculatorData({
        ...calculatorData,
      selectedTip: 0,
      bill: Number(e.target.value)
    });
  };

  const handleNNumberOfPeopleChange = (e) => {
    setCalculatorData({
        ...calculatorData,
      selectedTip: 0,
      numberOfPeople: Number(e.target.value)
    });
  };

  const handleReset = () => {
    setCalculatorData(initialCalculatorData);
    setCalculatorResult(initialCalculatorResult);
  };

  return (
    <>
      <img src={logo} className="mp-9 mx-autp w-100" /> 
      <section>
        {/* -------- Calculator Form -------- */}
        <form onSubmit={handleSubmit} className="calculator-form">
          {/* --- Bill Input --- */}
          <div>
            <div className="label-container">
              <label className="standard-label" htmlFor="bill">
                Bill
              </label>
              {/* 
                errors.bill = undefined
                errors.bill = 'Must be greater than 0'
                errors.bill = 'Required'
              */}
              {errors.bill !== undefined ? (
                <p className="standard-input-error bill-input-error">
                  {errors.bill}
                </p>
              ) : null}
            </div>
            <div className="input-container">
              <input
                className="standard-input with-left-side-icon"
                type="number"
                name="bill"
                id="bill"
                onChange={handleBillChange}
                value={calculatorData-bill}
              />
              <img className="left-side-icon" src={iconDollar} />
            </div>
          </div>
          {/* --- Tip Section --- */}
          <div>
            <div className="label-container">
              <label className="standard-label">Select Tip %</label>
              {errors["custom-tip"] !== undefined ? (
                <p className="standard-input-error bill-input-error">
                  {errors["custom-tip"]}
                </p>
              ) : null}
            </div>
            <div>
              {/* [5, 10, 15, 25, 50]; */}
              {tips.map((tip) => (
                <button
                  key={tip}
                  className={`tip-button ${
                    calculatorData.selectedTip === tip ? "selected-tip" : ""
                  }`}
                  type="button"
                  onClick={() => handleSelectTip(tip)}>
                  {tip}%
                </button>
              ))}
              <input
                className="standard-input"
                type="number"
                name="custom-tip"
                id="custom-tip"
                placeholder="Custom"
                onChange={handleCustomTip}
                value={customTip === 0 ? "" : customTip} //input controlat - are un value si onChange
              />
            </div>
          </div>
          {/* --- Number of people --- */}
          <div>
            <div className="label-container">
              <label className="standard-label" htmlFor="number-of-people">
                Number of People
              </label>
              {errors["number-of-people"] !== undefined ? (
                <p className="standard-input-error bill-input-error">
                  {errors["number-of-people"]}
                </p>
              ) : null}
            </div>
            <div className="input-container">
              <input
                className="standard-input with-left-side-icon"
                type="number"
                name="number-of-people"
                id="number-of-people"
                onChange={handleNNumberOfPeopleChange}
              />
              <img className="left-side-icon" src={iconPerson} />
            </div>
          </div>
          <button type="submit">CALCULATE</button>
        </form>
        {/* -------- Result -------- */}
          <div>
            <p className="tip-per-person">
              ${calculatorResult.tipAmountPerPerson}
              </p>
            <p className="total-per-person">${calculatorResult.totalPerPerson}</p>
          <button onClick={handleReset} className="reset-button">
            RESET
            </button>
        </div>
      </section>
    </>
  );
};

export default App;
