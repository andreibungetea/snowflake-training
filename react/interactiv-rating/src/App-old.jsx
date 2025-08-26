import { useState } from 'react';
import './App.css'

const App = () => {
  let [selectedRating, setSelectedRating] = useState(0);

  // console.log("test");

    const handleSelectRatingOne = () => {
        setSelectedRating(1);
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
        {/* butonul primeste clasa selected-rating-button si afiseaza toate datele notate la var selectRating declarata mai sus:se pune conditia
        daca selectRating === 1,2,3,4 sau 5 atunci se aplica clasa selected-rating(fundal rosu), altfel nu se aplica nimic
        {`selected-rating-button selectRating: 1 === 1 ? "select-rating" ->fundal rosu
                                               0 === 1 : ""} */}
        <button 
        className={`selected-rating-button ${selectedRating === 1 ? "selected-rating" : ""}`} onClick={handleSelectRatingOne}>1</button>
        <button 
        className={`selected-rating-button ${selectedRating === 2 ? "selected-rating" : ""}`} onClick={handleSelectRatingTwo}>2</button>
        <button 
        className={`selected-rating-button ${selectedRating === 3 ? "selected-rating" : ""}`} onClick={handleSelectRatingThree}>3</button>
        <button 
        className={`selected-rating-button ${selectedRating === 4 ? "selected-rating" : ""}`} onClick={handleSelectRatingFour}>4</button>
        <button
        className={`selected-rating-button ${selectedRating === 5 ? "selected-rating" : ""}`} onClick={handleSelectRatingFive}>5</button>
      </div>
    </div>
  )
}

export default App
