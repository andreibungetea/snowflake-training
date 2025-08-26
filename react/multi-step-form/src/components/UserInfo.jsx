import { useState } from "react";

const UserInfo = ({ setCurrentStep }) => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    setErrors({});

    // de implementat validarile
    // ...

    // daca validarile au fost cu success, trecem pe pasul urmator
    // if (daca nu sunt eopri) {
    // }
    setCurrentStep(2);
  };

  return (
    <div className="p-6 mb-6">
      <h1 className="title-md">Personal info</h1>
      <p className=" w-full mb-6">Please provide your name, email address, and phone number.</p>
      <form id="personal-info-form" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="name">Name</label>
          <input type="text" name="" id="" className="input" />
        </div>
        <div className="">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" className="input" />
        </div>
        <div className="">
          <label htmlFor="phone">Phone Number</label> 
          <br/>
          <input type="tel" name="phone" id="phone" className="input" />
        </div>
      </form>
    {/* Footer */}
    <div className="bg-white p-4 flex justify-end fixed bottom-0 w-full">
      <button>Next Step</button>
    </div>
    </div>
  );
};

export default UserInfo;