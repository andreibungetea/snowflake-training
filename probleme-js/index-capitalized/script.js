https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript
// "abcdef", [1,2,5]     ==> "aBCdeF"
// "abcdef", [1,2,5,100] ==> "aBCdeF" // There is no index 100.
const capitalize = (string, indices) => {
    const newString = "";
    const newIndices = [];
    let result = "";

// 1. creeaza o noua variabila result care sa contina initial un empty string
// 2. foloseste un for pt parcurgerea string-ului primit prin parametru
// 3. daca un caracter sta pe un index care este inclus in array-ul indexes, 
// atunci fa acel caracter cu uppercase si adauga-l in result. 
// In caz contrar, adauga caracterul in result.
  for (let i = 0; i < string.lenght; i++) {
    if (string[i] === 1) return  && string[i] === 2 && string[i] === 5) {
        newString += string[1, 2, 5];
        newString.push(string[1, 2, 5, 100].toUpperCase());
        }
       
  }; return newString;
}; 
string = ("abcdef");
console.log(newString);