// //Sa se gaseasca maximul de numere dintr-un array.
// // [1800, 2000, 2100, 1700, 3000]

//     let peak = [1800, 2000, 2100, 1700, 3000];
//     let max = peak[0];
//     for (let i = 1; i < peak.lenght; i++) {
//         if (peak[i] > max) { //2000 > 1800 - true; 2100 > 2000 true; 1700 > 2100 - false; 3000 > 2100 - true
//             max = peak[i]; //2000; 2100; 2100; 3100
//         }
//     }
//  console.log(max);

//  let peaks = [1800, 2000, 2100, 1700, 3000];
// let max2 = peaks[0];

// // == Varianta scalabila --- contine un for --  max
// for (let i = 1; i < peaks.length; i++) {
//     if (peaks [i] > max2) {
//         max2 = peaks [i];
//     }
// } console.log(max2);

// // min
//  let min = 0;
//  for (let i = 1; i < peak.length; i++) {
//     if (peak[i] < min) {
//         min = peak[i];
//     }
//  } console.log(min);

//  let min2 = 0;
// for (let i = 1; i < peaks.length; i++) {
//     if (peaks[i] < min2) {
//         min2 = peaks[i];
//     }
// } console.log(min2);

// For every good kata idea there seem to be quite a few bad ones! 
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
// If there are no good ideas, as is often the case, return 'Fail!'.
const goodIdeas = (ideas) => {
    let counter = 0;
    ideas.forEach((idea) => {
        if (idea === "good") {
            counter++;
        }
    });

    if (counter === 0) return 'Fail!';

    if (counter > 1 && counter < 3) return 'Publish!';

    if (counter > 2) return 'I smell a series!';
}; 
let ideas = ['good', 'bad'];
console.log(goodIdeas(ideas));

let numbers = [1,2,4,5,6,87,12];
let newMax = [];
let newMin = [];
let counter = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > newMax) { 
        newMax = numbers[i];
    }
}; 
console.log(newMax);

const newMaxs = (newMax) => {

    for (let i = 0; i < newMax.length; i++) { 
        if (newMax > 0 ) {
            counter++;
        }
    }
    
}

console.log(newMaxs([1,2,4,5,6,87,12]));
