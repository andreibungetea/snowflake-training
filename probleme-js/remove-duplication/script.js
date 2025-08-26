// tema https://www.codewars.com/kata/5904d222e1bfd3354e000026

//Write a function that accepts an array of number as parameter, and it returns array after removing all duplicated numbers.

// Example removeDuplication([1,2,3,2,4,6,2,6,7]) Output [1,3,4,7].

// Input : [1,2,1,2,1,1,2,2] , Output : [].

// Input : [2,5,6,7,5,2,6] , Output: [7]. -> [7]

// pasi rezolvare:
// 1. crearea unui variabile si initializarea ei cu un empty array
// 2. parcurgerea array-ului arr printr-un for pentru a verifica ce numere sunt dublate
// si includerea celor care nu sunt duplicate, intr-un array nou.
// 3. retureneaza rezultatul

  const removeDuplication = (arr) =>{
    let result = [];
    
    // for (let i = 0; i < arr.length; i++) {
    //   if (result.includes(arr[i])) {
    //     result.push(i);
    //   }
    // }; 

    return result.filter((number) => number.includes(arr[i]) === false);
    //  return result;
  };
  console.log(removeDuplication([2,5,6,7,5,2,6])); 