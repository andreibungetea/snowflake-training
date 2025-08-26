import { plans } from "./plans";

const Sumary = ({ selectedPlan, showYearlyPrice }) => {
  // selectedPlan: 'pro' -> planData = {id: "pro", name: "pro", ...}
  // selectedPlan: 'arcade' -> planData = {id: "arcade", name: "arcade", ...}
  const planData = plans.find((plan) => plan.id === selectedPlan);

  return (
    <div className="bg-white p-6 mx-4">
      <h1 className="title-md">Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="bg-blue-50 p-6 ">
        <div className="flex justify-between border-b border-gray-500 p-4 mb-4">
          <p>
            {planData.name} ({showYearlyPrice === true ? "Yearly" : "Monthly"})
          </p>
          <p className="text-blue-950">
            {showYearlyPrice === true
              ? `$${planData.yearlyPrice}/yr`
              : `$${planData.monthlyPrice}/mo`}
          </p>
        </div>
        <p className="text-gray-500">Online service</p>
        <p className="text-gray-500">Larger storage</p>
      </div>
    </div>
  );
};

export default Sumary;
