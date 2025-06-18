// --- Variabile --- 
// Scopul unei variabile - retinerea in memorie a unei valori ca sa o folosesti mai tarziu, de mai multe ori
// Pasi pt crearea unei variabile:
// 1. pe o linie goala scrie let, iar la final pui un spatiu
// 2. scrii numele unei variabile " x ""
// 3. pui semnul " = "" si ii dai o valoare
// 6. pui " ; " si gata

let x = 5;

// Exercitiul 1
// 1. sa se creeze o varibila cu numele y si valoarea 8
// 1. sa se creeze o varibila cu numele temperature si valoarea -5
// 1. sa se creeze o varibila cu numele distance si valoarea 460

let y = 8;
let temparature = -5;
let distance = 460;

// Notatie camel case - folosim litera mare la inceputul fiecarui cuvant, mai putin la primul cuvant.
let distanceBetweenBucharestAndConstanta = 300;

// Restrictii/reguli pe partea de nume de variabile:
// - conventie: folosim camel case
// - nu poti folosii spatii in interiorul numelor sau alte caractere speciale (-,+,=, etc)
// - un nume nu poate incepe cu un numar

// --- Tipuri de date ---
// data = valoare
// fiecare data are cate un tip-categorie:
// 1) number 
let currentweek = 5;

// 2) string - folosim mereu ghilimele
let myName = "Andrei"; 

// 3) boolean - include doar 2 valori: true sau false, da sau nu. Nu se pun valorile intre ghilimele. Alfel, se transforma in date de tip 
// string
// incepe cu "is" sau "has"
let isAdmin = true;

// Exercitiul 2
// a) let myName = "Andrei";
// b) let age = 18;
// c) isSubscribed = true;

// ---- Operatori aritmetici ----
// + , -, *, /
// Observatie: un operator artimetic intre 2 nr => alt numar
let z = x + y;
console.log(z);

// Exercitiul 3
let price = 35;
let cotaTva = 0.19;
let pretCuTva = price * cotaTva;
console.log(pretCuTva);
// rezolvare
let productPrice = 100;
let vatPercentage = 19;
let totalProductPrice = productPrice - (vatPercentage * productPrice) / 100;
console.log(productPrice);

// ---Opetator de comparatie --
// <, <=, === (verificare daca 2 numere sunt egale), !== (verificare daca 2 numere sunt diferite), >=, >
// Observatie: un operator de comparatie pus intre 2 numere => valoare booleana ( true / false )!!
//          5       8
console.log(x >= y);
// --- if / else statements ----
// if () {}
// Intodeauna intre () unui if vom avea comparatie/ii
// Daca, complaratia este true se executa codul dintre acolade de dupa
// if (x < y) {
//     console.log("ics este mai mic decat igrec");
// } esle {
//     console.log("ics este mai mare decat igrec");
// }

let age = 18;

if (age < 18) {
    console.log("Minor");
}
else {
    console.log("Major");
}
