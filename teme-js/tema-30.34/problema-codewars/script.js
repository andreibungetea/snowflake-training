// For every good kata idea there seem to be quite a few bad ones!
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
// If there are no good ideas, as is often the case, return 'Fail!'.

const well = (x) => {
let numberOfGoodIdeas = 0;
  
    for (let i = 0; i < x.lenght; i++) {
      if (x[i] === "good") {
        numberOfGoodIdeas++;
      }
      if (numberOfGoodIdeas === 0) return "Fail!";
      if (numberOfGoodIdeas === 1 || numberOfGoodIdeas === 2) return "Publish!";
      if (numberOfGoodIdeas > 2) return "I smell a series!";
    }
};
console.log(x(['good', 'bad', 'bad']));