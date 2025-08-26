// Given a list of integers values, your job is to return the sum of the values; 
// however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

// [ 1, 2, 3] ==> 6

// [ 1, 3, 8, 1, 8] ==> 12

// [ -1, -1, 5, 2, -7] ==> -1

// [] ==> null

// pasi:
// 1. trateaza exceptia (a.k.a edge case)
// 2. creeaza o variabila uniqueNumber si initializeaz-o cu un empty array
// 3. parcurge lst si introdu in lst fiecare numar care nu exista deja in uniqueNumbers
// 4. parcuge array-ul uniqueNumbers si calculeaza-i suma
// 5. returneaza suma

const uniqueSum = (lst) => {
   if (lst.length === 0) return null;
   
   let uniqueNumbers = [];

   for (let i = 0; i < lst.length; i++) {
    if (uniqueNumbers.includes(lst[i]) === false) {
        uniqueNumbers.push(lst[i]);
    };
   };

   let sum = 0;

   for (let i = 0; i < uniqueNumbers.length; i++) {
    sum += uniqueNumbers[i];
   };
    return sum;
};
console.log(uniqueSum([ 1, 2, 3]));

