import { plans } from "./plans";

const FinishingUp = ({ selectedPlan, showYearlyPrices }) => {
  const handleSubmit = (e) => {
    e.preventDafault();

    cpn;

    const data = new FormData(data.get);
  };

  return (
    <div className="bg-white mr-4 ml-4 px-6 py-8 mb-6 absolute rounded-lg shadow-md">
      <h1 className="title-md text-blue-950 mb-2">Finishing up</h1>
      <p className="text-gray-500 mb-6">
        Double-check everything looks OK before confirming.
      </p>
      <form onClick={handleSubmit}>
        <div className="bg-blue-50 rounded-lg px-4 py-4 mb-4px">
          <div className="flex justify-between text-gray-500 flex justify-between items-center">
            <p className="border-b border-b-full border-b-gray-500 pb-4 mb-4">
              Arcade ({showYearlyPrices === true ? "Yearly" : "Monthly"})
            </p>
          </div>
          <p className="text-gray-500 mt-4 mb-4">Arcade service</p>
          <p className="text-gray-500 mt-4 mb-4">Larger storage</p>
        </div>
        <p className="text-gray-500 px-4 mt-4">Total (per month)</p>
      </form>
    </div>
  );
};

export default FinishingUp;
