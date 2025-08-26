const PlanCard = ({
  plan: { id, icon, name, yearlyPrice, monthlyPrice, numberOfFreeMonths },
  showYearlyPrices,
  selectedPlan,
  setSelectedPlan,
}) => {
  const handleChangeSelectedPlan = (n) => {
    setSelectedPlan(id);
  };

  return (
    <button
      // onClick={() => handleChangeSelectedPlan(id)} nu mai avem nevoie de parametru pt ca il putem transmite prin f setSelectedPlan()
      onClick={() => handleChangeSelectedPlan(id)}
      className={`flex gap-4 border mb-2 w-full ${
        id === selectedPlan ? "border-purple-600" : "border-purple-200"
      }`}
    >
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
