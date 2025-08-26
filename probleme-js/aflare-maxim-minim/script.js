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
// const goodIdeas = (ideas) => {
//     let counter = 0;
//     ideas.forEach((idea) => {
//         if (idea === "good") {
//             counter++;
//         }
//     });

//     if (counter === 0) return 'Fail!';

//     if (counter > 1 && counter < 3) return 'Publish!';

//     if (counter > 2) return 'I smell a series!';
// }; 
// let ideas = ['good', 'bad'];
// console.log(goodIdeas(ideas));

// let numbers = [1,2,4,5,6,87,12];
// let newMax = [];
// let newMin = [];
// let counter = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > newMax) { 
//         newMax = numbers[i];
//     }
// }; 
// console.log(newMax);

// const newMaxs = (newMax) => {

//     for (let i = 0; i < newMax.length; i++) { 
//         if (newMax > 0 ) {
//             counter++;
//         }
//     }
    
// }

// console.log(newMaxs([1,2,4,5,6,87,12]));


// [4, 10, 10,9] -> [10, 9]
// [4, 9]
// const twoHighest = (arr) => {
//     // pasul 1. gaseste maximul din arr
//     let max1 = arr[0];
//     for (let i = 1; i < arr.length; i++)
//         if(arr[i] > max1) {
//             max1 = arr[i];
//         }
//     // pasul 2. elimina maximul din arr
// const arrWithoutMax = arr.filter((number) => number !== max1); //[4, 9]
//     // pasul 3. gaseste noul maxim din arr
//     let max2 = arrWithoutMax[0];
//     for (let i = 1; i < arrWithoutMax.length; i++) {

//         if(arrWithoutMax[i] > max2) {
//             max2 = arrWithoutMax[i];
//         } 
//     }
//     // pasul 4. returneaza cele 2 maxime
//     return [max1, max2];

// }; console.log(twoHighest([4, 10, 10, 9]));


const capMe = (names) => {
  let result = [];
  
//   for (let i = 0; i < names.lenght - 1; i++) {
//     const name = names[i];
//     const formattedName = name[0].toUpperCase() + name.substring(1, name.length - 1).toLowerCase;
// } 
     names.forEach((name) => {
       result.push(name[0].toUpperCase() + name.slice(1).toLowerCase());
    }); 
 return result;
     
}; console.log(capMe(['raplh', 'georgia', 'christina']));

const capMe3 = (names) => names.map((name) => (name[0].toUpperCase + name.slice(1).toLowerCase));

 console.log(capMe(['raplh', 'georgia', 'christina']));

 const capMe1 = (names) => {
    let newName1 = [];

    for (let i = 0; i < names.length - 1; i++) {
        const name = names[i];

        const formattedName = name[0].toUpperCase + name[0].substring(1, names.length-1).toLowerCase;
    } return formattedName;
}; console.log(capMe(['raplh', 'georgia', 'christina']));
 