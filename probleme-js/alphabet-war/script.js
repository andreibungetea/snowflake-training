// const alphabetWar = (fight) => {
// //  let result = "";
//  let leftSide = [];
//  let rightSide = [];

//     for (let i = 0; i < fight.length; i++) {
//         if (i === "w" || i === "p" || i === "b" || i === "s") {
//             leftSide += 4;
//         }
//         else if (i === "m" || i === "q" || i === "d" || i === "z") {
//             rightSide += 4;
//         }   
//     }
//         if (i === "w" || i === "p" || i === "b" || i === "s") {
//             leftSide.push(fight[i]);
//         }
//         if (i === "m" || i === "q" || i === "d" || i === "z") {
//             rightSide.push(fight[i]);
//         }
           
//     if (leftSide === rightSight) return "Let's fight again!";
//     if (leftSide > rightSide) return "Left side wins!";
//     if (rightSide > leftSide) return "Right side wins!";

//     // return result = ("w, i,b,c");
// }; 
// console.log(alphabetWar("w", "i", "b", "c"));


const alphabetWar = (fight) => {
//1. creaza 2 variabile care se initializeaza cu valoarea 0.
//    let rightSide = 0;
//    let leftSide = 0;
// //2. parcurge string-ul fight. ia fiecare litera in parte si calculeaza cela 2 sume de puteri.
// //3. returneaza un mesaj in functie de cele 2 sume
 
// //   let counter = 0;
  
//   for (let i = 0; i < fight.length; i++) {
//     if (fight[i] === "m") {
//      rightSide += 4; 
//     } else if (fight[i] === "q") {
//       rightSide += 3 ;
//     } else if (fight[i] === "d") {
//       rightSide += 2;  
//     } else if (fight[i] === "z") {
//       rightSide += 1;
//     } else if (fight[i] === "w") {
//       leftSide += 4;
//     } else if (fight[i] === "q") {
//       leftSide += 3 ;
//     } else if (fight[i] === "d") {
//       leftSide += 2;  
//     } else if (fight[i] === "z") {
//       leftSide += 1;
//     }
    // switch (fight[i]) {
    //     case "w":
    //         leftSide += 4;
    //         break;
    // }
    // switch (fight[i]) {
    //     case "p":
    //         leftSide += 3;
    //         break;
    // }
    // switch (fight[i]) {
    //     case "b":
    //         leftSide += 2;
    //         break;
    // }
    // switch (fight[i]) {
    //     case "s":
    //         leftSide += 1;
    //         break;
    // }
    // switch (fight[i]) {
    //     case "m":
    //         rightSide += 4;
    //         break;
    // }
    // switch (fight[i]) {
    //     case "q":
    //         rightSide += 3;
    //         break;
    // }
    // switch (fight[i]) {
    //     case "d":
    //         rightSide += 2;
    //         break;
    // }
    // switch (fight[i]) {
    //     case "z":
    //         rightSide += 1;
    //         break;
    // }

    if (rightSide > leftSide) return "Right side wins!";
    if (rightSide < leftSide) return "Left side wins!";
    return "Let's fight again!";
  } 
  return result;
}; 
console.log(alphabetWar("z","z","z","z","s"));



