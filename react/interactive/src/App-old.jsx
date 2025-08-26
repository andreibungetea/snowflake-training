
import { useState } from 'react';
import './App.css'

const App = () => {
//  console.log("test");
  let [selectedRating, setSelectedRating] = useState(0);

  const handleSelectRatingOne = () => {
      setSelectedRating(1); //useState primeste valoarea 1
  };
  const handleSelectRatingTwo = () => {
      setSelectedRating(2);
  };
  const handleSelectRatingThree = () => {
      setSelectedRating(3);
  };
  const handleSelectRatingFour = () => {
      setSelectedRating(4);
  };
  const handleSelectRatingFive = () => {
      setSelectedRating(5);
  };

  return (

    <div>
      <div>
        <button className={`select-rating-button ${
          selectedRating === 1 ? "selected-rating" : ""}`} 
          onClick={handleSelectRatingOne}>1</button>
        <button className={`select-rating-buton ${
          selectedRating === 2 ? "selected-rating" : ""}`} 
        onClick={handleSelectRatingTwo}>2</button>
        <button className={`select-rating-button ${
          selectedRating === 3 ? "selected-rating" : ""}`} 
        onClick={handleSelectRatingThree}>3</button>
        <button className={`select-rating-button ${
          selectedRating === 4 ? "selected-rating" : ""}`} 
        onClick={handleSelectRatingFour}>4</button>
        <button className={`select-rating-button ${
          selectedRating === 5 ? "selected-rating" : ""}`} 
        onClick={handleSelectRatingFive}>5</button>
      </div>
    </div>


  );
};

export default App
