// const addons = [
//   {
//     id: 1,
//     name: "Online service",
//     description: "Access to multiplayer games",
//     monthlyPrice: 1,
//     yearlyPrice: 10,
//   },
//   {
//     id: 2,
//     name: "Larger storage",
//     description: "Extra 1TB of cloud save",
//     monthlyPrice: 1,
//     yearlyPrice: 10,
//   },
//   {
//     id: 3,
//     name: "Larger storage",
//     description: "Extra 1TB of cloud save",
//     monthlyPrice: 1,
//     yearlyPrice: 10,
//   },
// ];

// const AddOnsSelection = ({
//   showYearlyPrices,
//   handleNavigateForword,
//   selectAddons,
//   setSelectAddons,
// }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = new FormData(e.target);

//     console.log(data.get("1"));
//     console.log(data.get("2"));
//     console.log(data.get("3"));

//     handleNavigateForword();
//   };

//   // exemplul 1:
//   // - selectez primul addon => selectedAddons = [1]
//   // - selectez al doilea addon => selectedAddons = [1, 2]
//   // - deselectez primul addon => selectedAddons = [2]
//   const handleChange = (e, addonId) => {
//     if (e.target.checked === true) {
//       setSelectAddons([...selectAddons, addonId]);
//     } else {
//       setSelectAddons([...selectAddons.filter((id) => id !== addonId)]);
//     }
//   };

//   return (
//     <>
//       <div className="bg-white mr-4 ml-4 px-6 py-8 mb-6 absolute rounded-lg shadow-md">
//         <h1 className="title-md mb-2">Pick your add-ons</h1>
//         <p className="mb-6">Add-ons help enhance your gaming experiance</p>
//         <form onSubmit={handleSubmit} id="addon-selection-form">
//           {addons.map((addon) => (
//             <label className="addon-container border border-purple-200 py-3 px-4 mb-4 rounded-lg flex text-left gap-4">
//               <input
//                 type="checkbox"
//                 name={addon.id}
//                 id=""
//                 onChange={(e) => handleChange(e, addon.id)}
//               />
//               <div>
//                 <h4>{addon.name}</h4>
//                 <p>{addon.description}</p>
//               </div>
//               <p>
//                 {showYearlyPrices === true
//                   ? `+$${addon.yearlyPrice}/yr`
//                   : `+$${addon.monthlyPrice}/mo`}
//               </p>
//             </label>
//           ))}
//         </form>
//       </div>
//     </>
//   );
// };

// export default AddOnsSelection;
const addons = [
  {
    id: 1,
    name: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: 2,
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: 3,
    name: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

const AddonsSelection = ({
  showYearlyPrices,
  handleNavigateForward,
  selectedAddons,
  setSelectedAddons,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    console.log(data.get("1"));
    console.log(data.get("2"));
    console.log(data.get("3"));

    handleNavigateForward();
  };

  // exemplul 1:
  // - selectez primul addon => selectedAddons = [1]
  // - selectez al doilea addon => selectedAddons = [1, 2]
  // - deselectez primul addon => selectedAddons = [2]
  const handleChange = (e, addonId) => {
    if (e.target.checked === true) {
      setSelectedAddons([...selectedAddons, addonId]);
    } else {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    }
  };

  return (
    <div className="bg-white p-6 mx-4">
      <h1 className="title-md">Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <form onSubmit={handleSubmit} id="addons-selection-form">
        {addons.map((addon) => (
          <label className="addon-container border border-purple-200 py-3 px-4 flex">
            <input
              type="checkbox"
              name={addon.id}
              id=""
              onChange={(e) => handleChange(e, addon.id)}
            />
            <div>
              <h4>{addon.name}</h4>
              <p>{addon.description}</p>
            </div>
            <p>
              {showYearlyPrices === true
                ? `+$${addon.yearlyPrice}/yr`
                : `+$${addon.monthlyPrice}/mo`}
            </p>
          </label>
        ))}
      </form>
    </div>
  );
};

export default AddonsSelection;
