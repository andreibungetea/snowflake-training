import iconThankYou from "/src/assets/icon-thank-you.svg";

// const icon = [
//     {
//         icon: iconThankYou,
//     }
// ]

const ThankYou = () => {
  return (
    <div className="bg-white mr-4 ml-4 px-6 py-8 mb-6 absolute rounded-lg shadow-md">
    <img src={iconThankYou} className="size-14 mt-12 flex mx-auto mb-6"></img>
    <h1 className="title-md text-center text-center mb-2">Thank you!</h1>
    <p className="text-center mb-12">Thanks for confirming your subscription! 
        We hope you have fun using our platform. 
        If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  );
};

export default ThankYou;