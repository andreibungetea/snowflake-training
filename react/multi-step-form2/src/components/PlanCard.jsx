import { useState } from "react";

const PlanCard = ({
  plan: { id, icon, name, yearlyPrice, monthlyPrice, numberOfFreeMonths },
  showYearlyPrices,
}) => {
  const [selectedPlan, setSelectedPlan] = useState("arcade");

  const handleChangeSelectedPlan = (newPlan) => {
    setSelectedPlan(newPlan);
  };

  return (
    <button
      onClick={() => handleChangeSelectedPlan(id)}
      className={`flex gap-4 border mb-2 w-full rounded-lg p-4 ${
        id === selectedPlan ? "border-purple-600" : "border-purple-200"
      }`}>
      <img src={icon} />
      <div>
        <h4>{name}</h4>
        <p>
          {showYearlyPrices === true
            ? `$${yearlyPrice}/yr`
            : `$${monthlyPrice}/mo`}
        </p>
        {showYearlyPrices === true ? (
          <p>{numberOfFreeMonths} months free</p>
        ) : null}
      </div>
    </button>
  );
};

export default PlanCard;