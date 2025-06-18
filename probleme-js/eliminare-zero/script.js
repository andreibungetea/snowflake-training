// const removeEveryOther = (arr) => {
//   const result = [];
//   for (let i = 0; i < arr.lenght; i++) {
//     if  (i % 2 === 0) {
//       result.push(arr[i]);
//     }
//   } return result;
// }; 
// console.log(removeEveryOther([0, 1, 2, 3, 4, 5, 6, 7, 8]));

// Exercitiul 1) sa se creeze o functie care primeste ca parametru score-ul unui student la un test (interval 0 - 100).
// functia trebuie sa returneze grade-ul in sistem amerikanesk, adica:
// "F" daca score < 50.
// "D" daca 50 <= score < 65.
// "C" daca 65 <= score < 80.
// "B" daca 80 <= score < 90.
// "A" daca score >= 90.

const grade = (score) => {

  // let result = "";
  let counter = 0;
 for (let i = 0; i < score.length; i++) {
    if (score === 0) {
      counter++;
    }
 }; 

    if (counter < 50) return "F";
    if (counter >= 50 && counter <= 65) return "D";
    if (counter > 65 && counter <= 80) return "C";
    if (counter > 80 && counter <= 90) return "B";
    if (counter > 90) return "A";
  return counter;
};

let scores = 62;
console.log(grade(scores));

// Exercitiul 2) sa se creeze o functie care primeste ca parametru un username.
// functia trebuie sa returneze
// 1) "This field is required" daca username-ul nu a fost introdus
// 2) "Invalid username" daca username-ul are sub 5 caractere SAU daca include spatiu SAU caractere speciale
// 3) "Valid username" daca se trece de validarile de mai sus

const functionOne = (username) => {

  specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ":", ";", "/", "+", "-", "_", "="];

  for (let i = 0; i < username.length; i++) {
    // 1) "This field is required" daca username-ul nu a fost introdus
    if (username.lenght === 0) {
      return "This field is required";
    } else if 
      // 2) "Invalid username" daca username-ul are sub 5 caractere SAU daca include spatiu SAU caractere speciale
      (username.lenght < 5 || username === " " || specialCharacters.includes(username[i])) { return "Invalid usename";
    } else {
      // 3) "Valid username" daca se trece de validarile de mai sus
      "Valid username";
    }
  }
      return username;
}; 
console.log(functionOne);