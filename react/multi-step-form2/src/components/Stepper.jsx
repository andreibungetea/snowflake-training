import Step from "./Step";
import steps from "./steps";

// const homes = [
//   {
//     name: "Apartment in Sector 2",
//     startDate: "2024-12-26 14:00:00",
//     endDate: "2024-12-28 10:00:00",
//     pricePerNight: 207,
//     numberOfNights: 2,
//   },
// ];

const Stepper = ({ currentStep }) => {
  return (
    <div className="h-43 bg-[url(./src/assets/images/bg-sidebar-mobile.svg)] bg-cover bg-no-repeat md:h-screen md:bg-[url(./src/assets/images/bg-sidebar-desktop.svg)] md:rounded-xl md:bg-cover md:relative md:w-[40%] md:p-8h-43 bg-no-repeat bg-cover bg-[url(/src/assets/bg-sidebar-mobile.svg)] md:bg-[url(/src/assets/bg-sidebar-desktop.svg)] md:min-h-150 md:w-1/3 md:rounded-xl">
      <div className="flex gap-4 justify-center pt-8">
        {/* --- Randare dinamica --- */}
        {steps.map((step) => (
          <Step currentStep={currentStep} step={step} />
        ))}
      </div>
    </div>
  );
};

export default Stepper;

// Destructuring-ul creeaza in spate cate o constanta pentru fiecare proprietate pe care o scoti din obiectul tau.
// in exemplul de mai jos:
// se creeaza o constanta "name" care este egala cu "Cristian"
// se creeaza o constanta "age" care este egala cu 23
// se creeaza o constanta "isAdmin" care este egala cu true
// se creeaza o constanta "address" care este egala cu obiectul de mai jos
const {
  name,
  age,
  isAdmin,
  address: {
    street: { name: streetName },
  },
} = {
  name: "Cristian",
  age: 23,
  isAdmin: true,
  address: {
    street: {
      name: "Lascar Catargiu",
      number: 83,
    },
    city: "Bucharest",
    country: "Romania",
  },
};

name;
age;
isAdmin;
streetName; // "Lascar Catargiu"
