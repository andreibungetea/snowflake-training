https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript
// "abcdef", [1,2,5]     ==> "aBCdeF"
// "abcdef", [1,2,5,100] ==> "aBCdeF" // There is no index 100.
const capitalize = (string, indices) => {
    const newString = "";
    const newIndices = [];
//   1. creeaza o noua variabila result care sa contina initial un empty string
// 2. foloseste un for pt parcurgerea string-ului primit pein parametru
// 3. daca un caracter sta pe un index care este inclus in array-ul indexes. Atunci fa acel caracter cu uppercase si adauga-l in result. In caz contrar, adauga caracterul in reseul
  for (let i = 0; i < string.lenght; i++) {
    if (string[i] === 1 && string[i] === 2 && string[i] === 5) {
        newString.push(string[1, 2, 5].toUpperCase);
        }
   
    
    newString.push(string[1, 2, 5, 100].toUpperCase);
  }; return newString;
}; 
string = ("abcdef");
console.log(newString);