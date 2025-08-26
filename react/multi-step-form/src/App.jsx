import { useState } from "react";
import AddonsSelection from "./components/AddonsSelection";
import PlanSelection from "./components/PlanSelection";
import Stepper from "./components/Stepper";
import Sumary from "./components/Sumary";
import UserInfo from "./components/UserInfo";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showYearlyPrices, setShowYearlyPrices] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("arcade");
  const [selectedAddons, setSelectedAddons] = useState({});

  console.log(selectedAddons);

  const handleNavigateBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleNavigateForward = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <main>
      <section className="md:flex">
        {/* ------- Stepper -------  */}
        <Stepper currentStep={currentStep} />
        {/* ------- Content -------  */}
        <div className="md:min-h-150 margin-4 bg-white">
          {currentStep === 1 ? (
            <>
              <UserInfo setCurrentStep={setCurrentStep} />
              <div className="bg-white p-4 flex justify-end fixed bottom-0 w-full">
                <button form="personal-info-form">Next Step</button>
              </div>
            </>
          ) : null}
          {currentStep === 2 ? (
            <>
              <PlanSelection
                showYearlyPrices={showYearlyPrices}
                setShowYearlyPrices={setShowYearlyPrices}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
              />
              <div className="bg-white p-4 flex justify-between items-center fixed bottom-0 w-full">
                <button onClick={handleNavigateBack}>Go back</button>
                <button onClick={handleNavigateForward}>Next Step</button>
              </div>
            </>
          ) : null}
          {/* {currentStep === 3 ? (
            <>
              <AddonsSelection
                showYearlyPrices={showYearlyPrices}
                handleNavigateForword={handleNavigateForword}
                selectedAddons={selectedAddons}
                setSelectedAddons={setSelectedAddons}
              />
              <div className="bg-white p-4 flex justify-between items-center fixed bottom-0 w-full">
                <button onClick={handleNavigateBack}>Go back</button>
                <button form="addons-selection-form">Next Step</button>
              </div>
            </>
          ) : null} */}
          {currentStep === 3 ? (
            <>
              <AddonsSelection
                showYearlyPrices={showYearlyPrices}
                handleNavigateForward={handleNavigateForward}
                selectedAddons={selectedAddons}
                setSelectedAddons={setSelectedAddons}
              />
              <div className="bg-white p-4 flex justify-between items-center fixed bottom-0 w-full">
                <button onClick={handleNavigateBack}>Go Back</button>
                <button form="addons-selection-form">Next Step</button>
              </div>
            </>
          ) : null}
          {currentStep === 4 ? (
            <>
              <Sumary
                selectedPlan={selectedPlan}
                showYearlyPrices={showYearlyPrices}
                handleNavigateForword={handleNavigateForward}
              />
              <div className="bg-white p-4 flex justify-between items-center fixed bottom-0 w-full">
                <button onClick={handleNavigateBack}>Go back</button>
                <button onClick={handleNavigateForward}>Confirm</button>
              </div>
            </>
          ) : null}
        </div>
      </section>
    </main>
  );
};

export default App;
