import { useState } from "react";
import Stepper from "./components/Stepper";
import UserInfo from "./components/UserInfo";
import PlanSelection from "./components/PlanSelection";
import AddOnsSelection from "./components/AddOnsSelection";
import FinishingUp from "./components/FinishingUp";
import ThankYou from "./components/ThankYou";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showYearlyPrices, setShowYearlyPrices] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("arcade");
  const [selectAddons, setSelectAddons] = useState([]);
  const [isLoading, setIsLoading] = useState(false); //spinner

  const handleNavigateBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleNavigateForword = () => {
    setCurrentStep(currentStep + 1);
    setIsLoading(false);
  };

  return (
    <main>
      <section className="md:flex ">
        {/* ------- Stepper -------  */}
        <Stepper currentStep={currentStep} />
        {/* ------- Content -------  */}
        <div className="bg-purple-200 md:min-h-150 bg-white relative z-1 -mt-20">
          {currentStep === 1 ? (
            <>
              <UserInfo setCurrentStep={setCurrentStep} />
              <div className="bg-white p-4 flex justify-end fixed bottom-0 w-full border border-purple-200">
                <button
                  onClick={handleNavigateForword}
                  form="personal-info-form"
                  className="button-content"
                >
                  Next Step
                </button>
              </div>
            </>
          ) : null}
          {currentStep === 2 ? (
            <>
              <PlanSelection
                showYearlyPrices={showYearlyPrices}
                setShowYearlyPrices={setShowYearlyPrices}
                handleNavigateForword={handleNavigateForword}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
              />
              <div className="bg-white p-4 flex justify-between items-center fixed bottom-0 w-full">
                <button
                  onClick={handleNavigateBack}
                  className="button-no-border"
                >
                  Go back
                </button>
                <button
                  onClick={handleNavigateForword}
                  form="plan-selection-form"
                  className="button-content"
                >
                  Next Step
                </button>
              </div>
            </>
          ) : null}
          {currentStep === 3 ? (
            <>
              <AddOnsSelection
                showYearlyPrices={showYearlyPrices}
                setShowYearlyPrices={setShowYearlyPrices}
                selectAddons={selectAddons}
                setSelectAddons={setSelectAddons}
                handleNavigateForword={handleNavigateForword}
              />
              <div className="bg-white p-4 flex justify-between items-center fixed bottom-0 w-full">
                <button
                  onClick={handleNavigateBack}
                  className="button-no-border"
                >
                  Go back
                </button>
                <button
                  className="button-content"
                  form="addon-selection-form"
                  disabled={isLoading === true}
                >
                  {isLoading === true ? <div className="spinner"></div> : null}
                  Next Step
                </button>
              </div>
            </>
          ) : null}
          {currentStep === 4 ? (
            <>
              <FinishingUp
                selectedPlan={selectedPlan}
                showYearlyPrices={showYearlyPrices}
              />
              <div className="bg-white p-4 flex justify-between items-center fixed bottom-0 w-full">
                <button
                  onClick={handleNavigateBack}
                  className="button-no-border"
                >
                  Go back
                </button>
                <button
                  // onClick={handleNavigateForword}
                  form="finishingp-form"
                  className="button-content"
                >
                  Confirm
                </button>
              </div>
            </>
          ) : null}
          {currentStep === 5 ? <ThankYou /> : null}
        </div>
      </section>
    </main>
  );
};

export default App;
