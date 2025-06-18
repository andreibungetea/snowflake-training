// 1. folosind un for loop sa se afiseze in consola toate numerele de la 10 la 20
for (let i= 10; i < 21; i++) {
    console.log(i);
    }
// 2. folosind un for loop sa se afiseze in consola toate numerele multiplii de 3 de la 10 la 30
for (let i = 10; i < 31; i ++) {
    if (i % 3 === 0) { 
    console.log(i);
    }
}

// 3. folosind un for loop sa se afisze in consola toate numerele de la 1 la 10 ca mai jos:
// "1 - impar"

// "2 - par"

// "3 - impar"

// ...

// "10 - par"

// Practic trebuie afisat numarul, apoi, tot in acelasi string, daca este par sau nu.
for (let i = 0; i < 11; i ++) {
    if (i % 2 === 0) { 
    console.log(`${i} - par`);
    } else {
        (i % 2 === 1) 
        console.log(`${i} - impar`);
    }
}

// 4.sa se creeze un array cu numere. folosind un for loop sa se calculeze suma numerelor impare
// let numbers = [1, 5, 8, 13, 18, 24];
// let sum = 0;

// for (let i = 0; i < numbers.length; i ++) {
//     if (i % 2 === 1) { 
//        sum += numbers[i]; 
//     } 
// }
// console.log(sum);

// 5.sa se creeze un array cu numere. folosind un for loop sa se calculeze suma numerelor pare pozitive
let numbers = [1, 5, -4 , 8, 13, -17, 18, 24];
let sum = 0;

for (let i = 0; i < numbers.length; i ++) {
    if (i % 2 === 0 && i >= 0) { 
        sum += numbers[i];
    } 
}
console.log(sum);