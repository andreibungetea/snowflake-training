// Problema - sa se creeze o functie care are un parametru prin care primeste un array de numere. 
// Functia sa returneze de cate ori apare zero in acel array. ( nu numaram zero-urile din interiorul altor numere, 
// de exemplu: nu numaram zero-ul din 10, 150, 802 etc. )
const newFunction = (number) => {
let result = [];
for (let i = 0; i < number.length; i++) {
    if (i % 2 === 0) {
        result.push(number[i]);
    } return result;
}
}; console.log(newFunction([0, 1, 5, 0, 6, 0]));