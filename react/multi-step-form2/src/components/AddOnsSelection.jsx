import FinishingUp from "./FinishingUp";

const addons = [
    {
        id: 1,
        name: "Online service",
        description: "Access to multiplayer games",
        monthlyPrice: 1,
        yearlyPlice: 10,
    },
    {
        id: 2,
        name: "Larger storage",
        description: "Extra 1TB of cloud save",
        monthlyPrice: 1,
        yearlyPlice: 10,
    },
    {
        id: 3,
        name: "Larger storage",
        description: "Extra 1TB of cloud save",
        monthlyPrice: 1,
        yearlyPlice: 10,
    }
]

const AddOnsSelection = ({ showEarlyPrices, setShowEarlyPrices }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        showEarlyPrices(setShowEarlyPrices);

        const data = new FormData(data.get);
    };

  return (
    <>
        <div className="bg-white mr-4 ml-4 px-6 py-8 mb-6 absolute rounded-lg shadow-md">
            <h1 className="title-md mb-2">Pick your add-ons</h1>
            <p className="mb-6">Add-ons help enhance your gaming experiance</p>
            <form onSubmit={handleSubmit} >
                {addons.map((addon) => (
                <label className="addon-container border border-purple-200 py-3 px-4 mb-4 rounded-lg flex">  
                <input type="checkbox" name="" id=""></input>
                <div>
                <h4>{addon.name}</h4>
                <p>{addon.description}</p>
                </div>
                <p>+${addon.yearlyPlice}/yr</p>
                </label>
                ))}
                <button>Submit</button>
            </form>
        </div>
    </>
  )
};

export default AddOnsSelection;