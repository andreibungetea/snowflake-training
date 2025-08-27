import { useState } from "react";

const UserInfo = ({ setCurrentStep }) => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    setErrors({});

    // Caz 1: primul input, al doilea input si al treilea input nu contin nimic:
    // errors = {
    //    name: "This fiels is required",
    //    email: "This fiels is required"
    //    phone: "This fiels is required"
    // }
    // Caz 2: primul input contine mai mult de 256 de catactere:
    // errors = {
    //    name: "Maximum number of characters is 256"
    // }
    // Caz 2: primul input contine frobidenCharacters:
    // errors = {
    //    name: "Must contain only letters"
    // }
    // Caz 4: al doilea input trebuie sa contina @:
    // errors = {
    //    email: "Must containe "@" "
    // }
    // Caz 5: al treilea input trebuie sa contina maxim 10 caractere:
    // errors = {
    //    phone: "Maximum number of characters is 10"
    // }

    const nameIsValid = validateName(data.get("name"));
    const emailIsValid = validateEmail(data.get("email"));
    const phoneIsValid = validatePhone(data.get("phone"));

    if (
      nameIsValid === false ||
      emailIsValid === false ||
      phoneIsValid === false
    )
      return;

    const validateName = (name) => {
      if (name === "") {
        setErrors((prev) => ({
          ...prev,
          name: "This fiels is requiered",
        }));
      }

      if (name.lenght >= 256) {
        setErrors((prev) => ({
          ...prev,
          name: "Maximum number of characters is 256",
        }));
      }

      const forbidenCharacters = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
      ];

      for (let i = 0; i < name.length; i++) {
        if (forbidenCharacters.includes(name[i])) {
          setErrors.name = "Must contain only letters";
        }
      }
    };

    const validateEmail = (email) => {
      if (email === "") {
        setErrors((prev) => ({
          ...prev,
          email: "This field is requierd",
        }));
      }

      if (!email.includes("@")) {
        setErrors.email((prev) => ({
          ...prev,
          email: "Must containe @",
        }));
      }
    };

    const validatePhone = (phone) => {
      if (phone === "") {
        setErrors.phone((prev) => ({
          ...prev,
          phone: "This fiels is requiered",
        }));
      }

      if (phone.length >= 10) {
        setErrors.phone((prev) => ({
          ...prev,
          phone: "Maximum number of characters is 10",
        }));
      }
    };

    setCurrentStep(2);
  };

  return (
    <div className="bg-white mr-4 ml-4 px-6 py-8 mb-6 absolute rounded-lg shadow-md">
      <h1 className="title-md pb-2 text-blue-950">Personal info</h1>
      <p className=" w-full mb-6 text-gray-500 mb-6">
        Please provide your name, email address, and phone number.
      </p>

      <form id="personal-info-form" onSubmit={() => handleSubmit}>
        <div>
          <label htmlFor="name" className="label body-sm">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input"
            placeholder="e.g. Stephen King"
          />
          {errors.name && <p className="text-red-500 bold">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="label body-sm">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="input"
            placeholder="e.g. stephenking@lorem.com"
          />
          {errors.mail && <p className="text-red-500 bold">{errors.mail}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="label body-sm">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="input text-center"
            placeholder="e.g. +1 234 567 890"
          />
          {errors.phone && <p className="text-red-500 bold">{errors.phone}</p>}
        </div>
      </form>

      {/* Footer */}
      {/* <div className="bg-white mr-4 ml-4 4 flex justify-end fixed bottom-0 w-full ">
      <button form="personal-info-form" className="border-4 py-4 px-">Next Step</button>
    </div> */}
    </div>
  );
};

export default UserInfo;
