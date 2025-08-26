import { useState } from 'react';
import './App.css';

const numbers = [1, 2, 3, 4, 5, 6];
// 1 -> <button>1</button>
// -> <button>2</button>

const App = () => {
  let [selectedRating, setSelectedRating] = useState(0);
  let [dislaySecondStep, setDisplaySecondState] = useState(false); // by default nu afisam al doilea pas

     const handleSelectRating = (newSelectedRating) => {
        setSelectedRating(newSelectedRating);
    };

    const handlesubmit = () => {
      if (selectedRating === 0) {
        return("Please select a rating");
      } else {
        setDisplaySecondState(true);
      }
    };

    const handleReset = () => {
      setDisplaySecondState === false; //revenim la pasul 1. Conditia dislaySecondStep este initial falsa si a notam ca fiind tot falsa pt reset.
      setSelectedRating(0); //deselectam ratingul
    };

  return (
    <div>
        {dislaySecondStep === false ? (
      <div>
        <div>    
          {numbers.map((number) => (
            <button className={`selected-rating-button 
              ${selectedRating === number ? "selected-rating" : ""}`} 
              onClick={() => handleSelectRating(number)}>{number}</button>
            ))}
        </div>
        <button onClick={handlesubmit}>{Submit}</button>
      </div>

        ) : (
        <div className='hide'>
          <p>You selected {selectedRating} out of 5</p>
          <h3>Thank you!</h3>
        </div>

        )}

        <button onClick={handleReset}>Reset</button>

     </div>
  )
}

export default App
