import { useState } from 'react'; 4.6k (gzipped: 1.9k)
import './App.css';

const App = () => {
  // let counte = 0;
 let [counter, setCounter] = useState(0); //->0 -> 1 -> 2

 const handleIncreaseNumber = () => {
  // counter++
  setCounter(counter + 1);
  // console.log(counter);
 };

 const handleaDecreaseNumber = () => {
  setCounter(counter - 1);
 };

  return (
      <div>
        {/* daca conter >=5
        <p className={counter >= 5 ? "high-number"></p>
        altfel 
        <p></p>
         */}
      <p 
      // --- varinata 1
      // className={counter >= 5 ? "high-number counter-number" : "counter-number"}
      //  ---varinat 2
      className = {`counter-number ${counter >= 5 ? "high-number" : ""}`}
     >
        {counter}
        </p>
        <button onClick={handleIncreaseNumber}>Increase</button>
        <button onClick={handleaDecreaseNumber}>Decrease</button>
      </div>
  );  
};

export default App;
