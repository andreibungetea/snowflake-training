

import { useState } from 'react';
import './App.css'

// const numbers = [1, 2, 3, 4, 5];
// // 1 -> <button>1</button>
// // 2 -> <button>2</button>
// // 3 -> <button>3</button>
// // Andrei -> <button>Andrei</button>

// const App = () => {
//  console.log("test");
//   let [selectedRating, setSelectedRating] = useState(0);
//   let [displaySecondStep, setDisplaySecondstep] = useState(false);


//   const handleSelectRating = (newSelectedRating) => {

//       setSelectedRating(newSelectedRating);
//   };

//   const handleSubmit = () => {
//     if (selectedRating === 0) {
//       alert("Please select a rating");
//     } else {
//       setDisplaySecondstep(true);
//     }
//   };

//   const handleReset = () => {
//     setDisplaySecondstep(false);
//     setSelectedRating(0);
//   };
 
  // return (
    // <div>
    //   {displaySecondStep === false ? (
    //      <div>
    //       <div>
    //         {numbers.map((number) => (
    //           <button 
    //           className={`select-rating-button ${
    //             selectedRating === number ? "selected-rating" : ""
    //           }`}
    //           onClick={() => handleSelectRating(number)}>
    //             {number}
    //           </button>
    //           ))}
    //       </div>
    //         <button onClick={handleSubmit}>Submit</button>
    //       </div>

    //   ) : (

    //     <div>
    //       <h1>You selected {selectedRating} out of 5</h1>
    //       <h3>Thank you!</h3>
    //       <button onClick={handleReset}>Reset</button>
    //     </div>
    //   )}      
       
    // </div>

const numbers = [1, 2, 3, 4, 5];

 
const App = () => {
 
  let [selectedButton, setSelectedButton] = useState(0);
  let [selectRating, setSelectRating] = useState(false);
  
  // const handleSelectedButtonOne = () => {
  //     setSelectedButton(1);
  // };
  // const handleSelectedButtonTwo = () => {
  //     setSelectedButton(2);
  // };
  // const handleSelectedButtonThree = () => {
  //     setSelectedButton(3);
  // };
  // const handleSelectedButtonFour = () => {
  //     setSelectedButton(4);
  // };
  // const handleSelectedButtonFive = () => {
  //     setSelectedButton(5);
  // };

  const handleSelectButton = (newSelectedButton) => {
      setSelectedButton(newSelectedButton);
  };

  const handleSubmit = () => {
     if (selectedButton === 0 ) {
      alert(
        "Please choose a number"
      );
     } else setSelectRating(true);
  }; 

  const handleReset = () => {
      setSelectRating(false);
      setSelectedButton(0);
  };



  return (
    <div>
      {selectRating === false ? (
        <div>
          <div>
            {numbers.map((number) => ( 
            <butoon 
            className={`select-rating-number ${selectedButton === number ? "selected-rating" : ""}`} 
            onClick={() => handleSelectButton(number)}>{number}</butoon>
            ))}
          </div>
          <div>
              <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        ) : (
        <div>
          <h2>You have selected {selectedButton} out of 5</h2>
          <h3>Thank you!</h3>
          <button onClick={handleReset}>Reset</button>
        </div>
        )}
    </div>

  );
};

export default App






