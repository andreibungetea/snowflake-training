// const findAll = (array, n) => {
    // 1. Creeaza o variabila result care initial este egala cu un empty array
    // let result = [];

    // 2. Parcurge array-ul primit prin fiecare parametru si ia fiecare numar pe rand
//     // si daca dai peste unul care este egal cu n, atunci i-ai indexul si introdu-l in result
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === n) {
//             result.push(i);
//         } 

//             // 3. Returneaza result  
//     } return result;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === n) {
//         result.push(i);
//     }
// } return result;

// const findAll2 = (array, n) => {

//     return array.filter((element) => element === n);
// };
// // };
// console.log(findAll2([6, 9, 3, 4, 3, 82, 11], 3));

// const findAll2 = (array, n) => {
//     return array.filter((element) => element === n);
// }; 
// console.log(findAll2([6, 9, 3, 4, 3, 82, 11], 3));

const findAll = (array, n) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        // if (array[i] === 0) return [];
        if (array[i] === n) result.push(i);
    } return result;
    // return array.filter((element) => element === n);
}; 
console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3));
