const Step = ({ currentStep, step: { number, name } }) => {
  const stepClasses =
    "body-md-bold h-8 w-8 flex items-center justify-center rounded-full";
  const activeClasses = "text-blue-950 bg-blue-200";
  const inactiveClasses = "text-white border border-white";

  return (
    <div>
      <p
        className={`${stepClasses} ${
          currentStep === number ? activeClasses : inactiveClasses
        }`}>
        {number}
      </p>
      <div className="hidden md:block">
        <p>STEP {number}</p>
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default Step;