import PlanCard from "./PlanCard";
import {plans} from "./plans.js";



// Ce vrem acum?
// 1. daca dau click pe butonul "Arcade" vreau sa actualizez variabila de state selectedPlan a.i. sa fie egala cu "arcade"
// 2. daca dau click pe butonul "Advanced" vreau sa actualizez variabila de state selectedPlan a.i. sa fie egala cu "advanced"
// 3. daca dau click pe butonul "Pro" vreau sa actualizez variabila de state selectedPlan a.i. sa fie egala cu "pro"

const PlanSelection = ({ showYearlyPrices, setShowYearlyPrices, selectedPlan, setSelectedPlan}) => {

  const handleChangeShownPrices = () => {
    const newValue = !showYearlyPrices;
    setShowYearlyPrices(newValue);
  };

  return (
    <div className="bg-white p-6 mx-4">
      <h1 className="title-md">Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <form id="id-plan-selection">
      {plans.map((plan) => (
        <PlanCard plan={plan} showYearlyPrices={showYearlyPrices} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>
      ))}

      <div className="flex gap-6 justify-center items-center">
        <p>Monthly</p>
        <input
          type="checkbox"
          name=""
          id=""
          checked={showYearlyPrices}
          onChange={handleChangeShownPrices}
        />
        <p>Yearly</p>
      </div>
      </form>
    </div>
  );
};

export default PlanSelection;
