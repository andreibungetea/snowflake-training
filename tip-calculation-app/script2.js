const printArray = (array) => {
    let result = "";
    for (let i = 0; i < array.lenght; i++) { 
        result += array[i]; //adauga in result fiecare element al indexului, pe rand
        if (i !== array.lenght - 1) { //se opreste inaintea ultimului index din array
            result += ",";
        }
    } 
    return result;
}; 
console.log(printArray(["h", "o", "l", "a"]));

// const printArray2 = (array) => {
//     return array.join(",");
// }; console.log(printArray2(["h", "o", "l", "a"]));

// //cand ai un arraw-function care doar da return de ceva, nu mai are alta linie de cod, 
// // se poate sterge returnul si, obligatioriu, stergi si acoladele. Rezultatul este urmatorul:
// const printArray3 = (array) => array.join(",");

// console.log(printArray2(["h", "o", "l", "a"]));