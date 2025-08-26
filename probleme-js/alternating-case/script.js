// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"

    const toAlternatingCase = (str) => {
    let result = "";

    for (let i = 0; i < str.length; i++) { 
        if (str[i].toLowerCase()) return str[i].toUpperCase();
    }; return result;
    console.log(toAlternatingCase("hello world"));
    };

// const toAlternatingCase = (str) => {
// //   // 1. Declara o variabila result si initializeaz-o cu empty string
//   let result = "";

// //   // 2. Parcurge parametrul str, ia fiecare litera pe rand si:
// //   // - daca este una scrisa cu upper case => adaug-o in result cu lower case
// //   // - daca este una scrisa cu lower case => adaug-o in result cu upper case
//   for (let i = 0; i < str.length; i++) {
//       { 
//           if (str[i] === str[i].toUpperCase()) ? {
//             result += str[i].toLowerCase(),
//           } : {
//             result += str[i].toUpperCase(),
//           }
//         }
          
//     };
// //   // 3. Returneaza result
//   return result;
// };
// console.log(toAlternatingCase("hello world"));
