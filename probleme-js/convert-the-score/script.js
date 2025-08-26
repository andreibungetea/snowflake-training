// 1. Imparte string-ul in cuvinte. "new score: two three" -> ["new", "score", "two", "three"] folosind string.split
// 2. Filtreaza aray-ul a.i. sa ramana doar cuvintele care sunt asociate unei functii. ["two", "three"...]
// 3. Inlocuieste fiecare cuvant cu cifra asociata.
// 4. Returneaza array-ul

// const numberAsWords = [
// "one", 
// "two", 
// "three", 
// "four", 
// "five", 
// "six", 
// "seven", 
// "eight", 
// "nine", 
// "zero"];
// const scoreboard = (string) => {
//     // 1. Imparte string-ul in cuvinte. "new score: two three" -> ["new", "score", "two", "three"] folosind string.split
//     // 2. Filtreaza aray-ul a.i. sa ramana doar cuvintele care sunt asociate unei functii. ["two", "three"...]
//     const words = string.split(" ").filter((word) => numberAsWords.includes(word));

    // 3. Inlocuieste fiecare cuvant cu cifra asociata.
    // ["two", "eight"]
    // varianta 3.1
    // if (words[0] === "one") {
    //     words[0] = 1 ; //[1, "eight"]
    // } else if (words[0] === "two") {
    //     words[0] = 2; 
    // }else if (words[0] === "two") {
    //     words[0] = 2; 
    // } else if (words[0] === "three") {
    //     words[0] = 3; 
    // } else if (words[0] === "four") {
    //     words[0] = 4; 
    // } else if (words[0] === "five") {
    //     words[0] = 5; 
    // } else if (words[0] === "six") {
    //     words[0] = 6; 
    // } else if (words[0] === "seven") {
    //     words[0] = 7; 
    // } else if (words[0] === "eight") {
    //     words[0] = 8; 
    // } else if (words[0] === "nine") {
    //     words[0] = 9; 
    // } else if (words[0] === "zero") {
    //     words[0] = 0; 
    // }

    // if (words[1] === "one") {
    //     words[1] = 1 ; //[1, "eight"]
    // } else if (words[1] === "two") {
    //     words[1] = 2; 
    // }else if (words[1] === "two") {
    //     words[1] = 2; 
    // } else if (words[1] === "three") {
    //     words[1] = 3; 
    // } else if (words[1] === "four") {
    //     words[1] = 4; 
    // } else if (words[1] === "five") {
    //     words[1] = 5; 
    // } else if (words[1] === "six") {
    //     words[1] = 6; 
    // } else if (words[1] === "seven") {
    //     words[1] = 7; 
    // } else if (words[1] === "eight") {
    //     words[1] = 8; 
    // } else if (words[1] === "nine") {
    //     words[1] = 9; 
    // } else if (words[1] === "zero") {
    //     words[1] = 0; 
    // }

    // varianta 3.2
    // const dictionary = {
    //     nil: 0,
    //     one: 1, 
    //     two: 2,
    //     three : 3,
    //     four: 4,
    //     five: 5,
    //     six: 6,
    //     seven: 7,
    //     eight: 8,
    //     nine: 9,
    //     zero: 0,
    // // };
    // const numberAsWords = [
    // "nil",
    // "one", 
    // "two", 
    // "three", 
    // "four", 
    // "five", 
    // "six", 
    // "seven", 
    // "eight", 
    // "nine", 
    // "zero"];

// const scoreboard2 = (string) => {
    // 1. Imparte string-ul in cuvinte. "new score: two three" -> ["new", "score", "two", "three"] folosind string.split
    // 2. Filtreaza aray-ul a.i. sa ramana doar cuvintele care sunt asociate unei functii. ["two", "three",...]
    // const words = string.split(" ").filter((word) => numberAsWords.includes(word));
      
    // 3. Inlocuieste fiecare cuvant cu cifra asociata.
    // words ["one", "eight"]
    // let result = [];

    // const firstWord = words[0];
    // result[0] = dictionary[firstWord];

    // const secondWord = words[1];
    // result[1] = dictionary[secondWord];

    // varianta 3.2
//     const numberAsWords = Object.keys(dictionary);

   
//     // 4. Returneaza array-ul    
//     return words;
// }; 
//   console.log(scoreboard2("new score: zero nine"));

//  const dictionary = {
//         one: 1,
//         two: 2,
//         three: 3,
//         four: 4,
//         five: 5,
//         six: 6,
//         seven: 7,
//         eight: 8,
//         nine: 9,
//         nill: 0,
//     };

    // const numberAsWords = Object.key(dictionary);

// const numberAsWords = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "nil"];

// const scoreboard = (string) => {
    // let result = [];
      
//   for (let i = 0; i < string.length; i++) {
// 1.Imparte stringul in cuvinte: "new score: two three" -> ["new", "score", "two", "three"]
// string.split("")
// 2.Filtreaza array-ul doar cuvintele care sunt asociate unei cifre -> ["two", "three"]
    
    // const words = string.split(" ").filter((word) => numberAsWords.includes(word));

   
    
// 3.Inlocuieste fiecare cuvant cu cifra asociata

// Varinata 1
    // if (words[0] === "one") {
    //     return words[0] === 1;
    // } else if  
    // (words[0] === "two") {
    //     return words[0] === 2;
    // } else if 
    // (words[0] === "three") {
    //     return words[0] === 3;
    // } else if 
    // (words[0] === "four") {
    //     return words[0] === 4;
    // } else if 
    // (words[0] === "five") {
    //     return words[0] === 5;
    // } else if 
    // (words[0] === "six") {
    //     return words[0] === 6;
    // } else if
    // (words[0] === "seven") {
    //     return words[0] === 7;
    // } else if 
    // (words[0] === "eight") {
    //     return words[0] === 8;
    // } else if  
    // (words[0] === "nine") {
    //     return words[0] === 9;
    // } else if  
    // (words[0] === "ten") {
    //     return words[0] === 10;
    // } else if 
    // (words[0] === "nil") {
    //     return words[0] === 0;}

    // if (words[1] === "one") {
    //     return words[1] === 1;
    // } else if  
    // (words[1] === "two") {
    //     return words[1] === 2;
    // } else if 
    // (words[1] === "three") {
    //     return words[1] === 3;
    // } else if
    // (words[1] === "four") {
    //     return words[1] === 4;
    // } else if 
    // (words[1] === "five") {
    //     return words[1] === 5;
    // } else if 
    // (words[1] === "six") {
    //     return words[1] === 6;
    // } else if 
    // (words[1] === "seven") {
    //     return words[1] === 7;
    // } else if 
    // (words[1] === "eight"){ 
    //     return words[1] === 8;
    // } else if 
    // (words[1] === "nine") {
    //     return words[1] === 9;
    // } else if 
    // (words[1] === "ten") {
    //     return words[1] === 10;
    // } else if
    // (words[1] === "nil") {
    //     return words[1] === 0};

// Varianta 2
// let result = [];

// const nillWord = words[0];
// result[0] = dictionary[nillWord];

// const firstWord = words[0];
// result[1] = dictionary[firstWord];

// const secondWord = words[0];
// result[2] = dictionary[secondWord];

// const thirdWord = words[0];
// result[3] = dictionary[thirdWord];

// const forthdWord = words[0];
// result[4] = dictionary[forthdWord];

// const fifthWord = words[0];
// result[5] = dictionary[fifthWord];

// const sixthWord = words[0];
// result[6] = dictionary[sixthWord];

// const seventhword = words[0];
// result[7] = dictionary[seventhword];

// const eigthWord = words[0];
// result[8] = dictionary[eigthWord];

// const ninethWord = words[0];
// result[9] = dictionary[ninethWord];

// const tenthdWord = words[0];
// result[10] = dictionary[tenthdWord];

// };

// Varianta 3

// 4.Returneaza array-ul
//    return result;   
// }; 
// console.log(scoreboard("new score: two three"));


// new score: two three
const phraze = (array) => {
    let result = [];

    // const numberAsWords = ['nill', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const numberAsWords = Object.keys(dictionary);

    const dictionary = {
        nill: 0,
        one: 1,
        two: 2, 
        three: 3, 
        four: 4, 
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
    },   

    
    
    
    
    //1. adaugam un spatiu intre ele
    //2. transformam propozitiile in cuvinte separate
    const words = array.split(" ").filter((word) => numberAsWords.includes(word));
    //3. cuvintele care se potrivesc celor care ne intereseaza, le introducem intr-un array nou
    const nillWord = words[0];
    result[0] = dictionary[nillWord];

    const firstWord = words[1];
    result[1] = dictionary[firstWord];

    const secondWord = words[2]; // secondword = words[2] -> two
    result[2] = dictionary[secondWord]; // result[2] = dictionary[secondWord] -> two => result[2] = "two" -> 2

    const thirdWord = words[3];
    result[3] = dictionary[thirdWord];

    const forthdWord = words[0];
    result[4] = dictionary[forthdWord];

    //4. returnam rezultatul


    // if (words[0] === 'nill') {
    //     words[0] === 0;
    // } else if (words[0] === "one") {
    //     words[0] === 1;
    // };

    // if (words[1] === 'nill') {
    //     words[1] === 0;
    // } else if (words[1] === "one") {
    //     words[1] === 1;
    // };  

    return result;
};
console.log(phraze("new score: two three"));