
import { useState } from 'react';
import './App.css'

const App = () => {
  
  // let counter = 0;
  let [counter, setCounter] = useState(0);

const handleIncreaseButton = () => {
  setCounter(counter + 1);

};

const handleDecreaseButton = () => {

  setCounter(counter-1); 
};

  return (
  <div>

    {/* varianta 1 */}
    {/* <p className={counter >= 5 ? "number-modified bigger-size" : ""}>{counter}</p> */}

    {/* varianta 2 */}
    <p className={`bigger-size ${counter >= 5 ? "number-modified" : ""}`}>{counter}</p>
    <button onClick={handleIncreaseButton}>Increase</button>
    <button onClick={handleDecreaseButton}>Decrease</button>
  </div>
  
  );
};

export default App;
