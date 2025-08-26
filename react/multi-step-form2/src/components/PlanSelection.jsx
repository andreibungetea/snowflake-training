import PlanCard from "./PlanCard";
import { plans } from "./plans";

// Ce vrem acum?
// 1. daca dau click pe butonul "Arcade" vreau sa actualizez variabila de state selectedPlan a.i. sa fie egala cu "arcade"
// 2. daca dau click pe butonul "Advanced" vreau sa actualizez variabila de state selectedPlan a.i. sa fie egala cu "advanced"
// 3. daca dau click pe butonul "Pro" vreau sa actualizez variabila de state selectedPlan a.i. sa fie egala cu "pro"

const PlanSelection = ({ showYearlyPrices, setShowYearlyPrices }) => {
  const handleChangeShownPrices = () => {
    const newValue = !showYearlyPrices;
    setShowYearlyPrices(newValue);
  };

  return (
    <div className="bg-white mr-4 ml-4 px-6 py-8 mb-6 absolute rounded-lg shadow-md">
      <h1 className="title-md mb-2">Select your plan</h1>
      <p className="text-gray-500 mb-6">
        You have the option of monthly or yearly billing.
      </p>
      {plans.map((plan) => (
        <PlanCard plan={plan} showYearlyPrices={showYearlyPrices} />
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
    </div>
  );
};

export default PlanSelection;
