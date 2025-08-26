import axios from 'axios'
import './App.css'
import { useState } from 'react'
import { Toaster, toast } from 'sonner'


const initialAdviceData = {
    id: 117,
    advice: 
    "It is easy to site up and take notice, what's difficult is getting up and taking action.",
  };

const App = () => {
  
  let [adviceData, setAdviceData] = useState(initialAdviceData); //notam info din initialAdviceData intr-o const separat pt ca in situatia in care avem mai multe info
  // sa nu aglomeram state-ul
  let [isLoading, setIsLoading] = useState(false);

  const handleFetchAdvice = async () => {
      setIsLoading(true);

      try { 
        // throw new Error();
        const response = await axios.get("https://api.adviceslip.com/advice2"); //prin comanda aceasta ne "legam" la bibliteca axios
        setAdviceData(response.data.slip);
      } catch {
        toast.error('An error has occurd while generating advice');
      } finally {
        setIsLoading(false);
      }

  };

  return (
    <>
    <Toaster />
      <p>ADVICE #<span className="advice-id">{adviceData.id}</span></p> 
      <p className="advice-content">
        {adviceData.advice}
      </p>
      <button 
      onClick={handleFetchAdvice} 
      className="generate-button" 
      disabled={isLoading === true}>
        {isLoading === true ? (
          <div className="spinner"></div>
        ) : null}
        Generate
      </button>
    </>
  )
};

export default App;
