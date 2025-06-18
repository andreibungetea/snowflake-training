/* 4) Problema - sa se creeze o functie care are un parametru prin care primeste un array de numere. 
Functia sa returneze de cate ori apare zero in acel array. 
( nu numaram zero-urile din interiorul altor numere, de exemplu: nu numaram zero-ul din 10, 150, 802 etc. ) */
let numbers = [0, 12, 2, 0, 101, 80, 130];
let counter = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
        counter++;
    }
} console.log(counter);

