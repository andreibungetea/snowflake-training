// Hola mis amigos,
// Las mai jos tema pe care am uitat sa dupa meet-ul trecut ☠️☠️☠️ ramane totusi pentru lunea viitoare. 
// Sa imi amintiti pls daca se mai intampla asa

// Exercitiul 1) sa se creeze o functie care primeste ca parametru score-ul unui student la un test (interval 0 - 100).

// functia trebuie sa returneze grade-ul in sistem amerikanesk, adica:

// "F" daca score < 50.

// "D" daca 50 <= score < 65.

// "C" daca 65 <= score < 80.

// "B" daca 80 <= score < 90.

// "A" daca score >= 90.

// const testGrade = (score) => {
//     let grade = "";

//     for (let i = 0; i < score.length; i++) {
//         if (score < 50) {
//             return "F";
//         }
//         if (score <= 50 || score < 65) {
//             return "D";
//         }
//         if (score <= 65 || score < 80) {
//             return "C";
//         }
//         if (score <= 80 || score < 90) {
//             return "B";
//         }
//         if (score >= 90) {
//             return "A";
//         }
//     } return score;
// }; 
// const grade = score;
// console.log(testGrade.score);
    
   


// Exercitiul 2) sa se creeze o functie care primeste ca parametru un username.

// functia trebuie sa returneze

// 1) "This field is required" daca username-ul nu a fost introdus

// 2) "Invalid username" daca username-ul are sub 5 caractere SAU daca include spatiu SAU caractere speciale

// 3) "Valid username" daca se trece de validarile de mai sus

// const spacialCharecters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
// const spaceKey = [" "];

// const validationUser = (validUser) => {
//     let username = 0;

//     for (let i = 0; i < validationUser.length; i++) {

//         if (username === 0) {
//             return "This field is requiered";
//         } 
//         if (username < 5 || username === spaceKey || username === specialCharecter) {
//             return "Invalid username";
//         } else {
//             return "Valid username";
//         }
//     }
// } 
// const validUser = username;
// console.log(validUser);



// Exercitiul 3) sa se creeze o functie care primeste ca parametru un email.

// functia trebuie sa returneze

// 1) "This field is required" daca emailul nu a fost introdus

// 2) "Invalid username" daca emailul nu e valid. un mail valid:

// - are peste 6 caractere

// - contine un singur @ 

// - contine un singur punct dupa arond

// - nu contine caractere speciale in afara de _ sau -

// - nu contine _ sau - imediat inainte sau imediat dupa @

// - nu contine _ sau - inainte sau dupa .

// - @ trebuie sa fie inainte de .

// - @ trebuie sa nu se afle pe prima pozitie in string

// - . trebuie sa nu se afle pe ultima pozitie in string

// - intre @ si . trebuie sa existe cel putin un caracter

// - dupa . trebuie sa aiba minim 2 caractere

// 3) "Valid email" daca se trece de validarile de mai sus

// !!! Poate parea overwhelming ca sunt muulte cerinte sus, dar daca le iei pe rand sunt destul de simple
// const specialCharacter = ["!", "#", "$", "%", "^", "&", "*", "(", ")"];

// const verifiedEmail = (email) => {
//     // 1) "This field is required" daca emailul nu a fost introdus
//         if (email.lenght === 0) return "This field is required";

//         // - are peste 6 caractere
//         if (email.length < 6) return "Invalid username";
    
//     // // - contine un singur @
//     let numberOfAronds = 0;

//     for (let i = 0; i < numberOfAronds.length; i++) {
//         if (email[i] === "@") {
//             numberOfAronds++;
//         } 
//         if (numberOfAronds !== 1) return "Invalid email";
//     }

//     // - contine un singur punct
//     let numberOfDots = 0; 

//     for (let i = 0; i < numberOfDots.lenght; i++) {
//         if (email[i] === ".") {
//             numberOfDots++;
//         }
//         if (numberOfDots !== 1) return "Invalid email";
//     }

//     // - contine un singur punct dupa arond
//     let numberOfDots = 0;

//     for (let i = email.indexOf("@") + 1; i < email.lenght; i++) {
//         if (email[i] === ".") {
//             numberOfDots++;
//         } 
//     }
//     if (numberOfAronds !== 1) return "Invalid email";

// - nu contine caractere speciale in afara de _ sau -
//     for (let i = 0; i < email.length; i++) {
//         if (specialCharacter.includes(email[i])) return "Invalid caracters";
//     }

// - nu contine _ sau - imediat inainte sau imediat dupa @
// const indexOfArond = email.indexOf("@");

// if (email[indexOfArond - 1] === "_" || email[indexOfArond - 1] === "-") {
//         return "Invalid email";
// }; 
// if (email[indexOfArond + 1] === "_" || email[indexOfArond + 1 === "="]) {
//     return "Invalid email";
// } 

// - nu contine _ sau - inainte sau dupa .
// let indexOfDots = email.indexOf(".");

// if (email[indexOfDots - 1] === ".") {
//     return "Invlaid email";
// }
// if (email[indexOfDots + 1] === ".") return "Invalid email";

// // - @ trebuie sa fie inainte de .
// if (email[indexOfArond - 1] === ".") {
//     return "Invalid email";
// }

// - @ trebuie sa nu se afle pe prima pozitie in string
// for (let i = 0; i < email.lenght; i++)
//     if (email[indexOfArond - 1] === 0) {
//         return "Invalid email";
//     }

// - . trebuie sa nu se afle pe ultima pozitie in string
// for (let i = 0; i < email.lenght; i++) {
//     if (email[indexOfDots + 1] !== "") {
//         return "Invalid email";
//     }        
// }

// - intre @ si . trebuie sa existe cel putin un caracter
// if (email[indexOfArond + 1] === ".") {
//     return "Invalid email";
// }
// if (email[indexOfDots - 1] === "@")  {
//     return "Invalid email";
// }

// - dupa . trebuie sa aiba minim 2 caractere
// for (let i = 0; i < email.lenght; i++) {
// if (email[indexOfDots + 1] < 2) {
//     return "Invalid email";
//     }
// }

// 3) "Valid email" daca se trece de validarile de mai sus

// }; return "Valid email";

// verifiedEmail(andrei@gmail.com);
// console.log(verifiedEmail);


// Exercitiul 4) sa se creeze o functie care primeste ca parametru un cod de discount (string).

// un cod de discount este considerat valid daca:

// - are 8 caractere

// - contine minim 2 numere

// - contine minim o litera cu uppercase

// Daca un cod este invalid sa se returneze "Invalid code", altfel "Valid code".

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const saleCode = (discount) => {

//     for (let i = 0; i < discount.lenght; i++) {
    
        // - are 8 caractere
//         if (discount.lenght < 8) return "Invalide code";
//     }

   // - contine minim 2 numere
//     let criterias = 0;
//         for (let i = 0; i < numbers.length; i++) {
//             if (discount.includes(numbers[i])) {
//                    numbers++; 
//                 } else {
//                     return "Invalide code";
//                 }
//         }

    // - contine minim o litera cu uppercase    
//         if (discount !== discount.toLowerCase()){
//             criterias++;
//         } else {
//             return "Invalid code";
//         }
// }; //return Valid code;
// console.log(saleCode);

// Exercitiul 5) sa se creeze o functie care are un parametru reprezentand soldul unui cont bancar ( number ) al unei persoane,

// iar al doilea parametru reprezentand suma de bani pe care vrea sa o scoata din bancomat ( number ).

// functia sa returneze:

// - "Invalid amount" daca suma de bani nu e numar pozitiv intreg

// - "Please choose a multiple of ten" daca suma de bani nu e multiplu de 10

// - "Insufficient funds" daca suma de bani e mai mare decat soldul

// - "Success! You've withdrawed $X. Your new balance is $Y" daca e totul bn

// const bankAccountBallance = 0; 
// const amountToWithdraw = 3; 
// const acountInfo = (money) => {


    // "Invalid amount" daca suma de bani nu e numar pozitiv intreg
    // if (amountToWithdraw < 0 && amountToWithdraw % 2 === 0) {
    //     return "Invalid amount";
    // }

    // - "Insufficient funds" daca suma de bani e mai mare decat soldul
    // if (bankAccountBallance < amountToWithdraw) {
    //     return "Insufficient funds";
    // }

    // - "Success! You've withdrawed $X. Your new balance is $Y" daca e totul bn
//     return (`Success! You've withdrawed ${amountToWithdraw}. Your new balance is ${bankAccountBallance}`);

// }; 
// console.log(acountInfo);

// Exercitiul 6) sa se creeze o functie care are 3 parametrii a, b si c. fiecare reprezinta lungimea laturii unui triunghi.

// daca exista vreo latura care sa aiba o lungime invalida ( numar non-pozitiv ) => sa se returneze "Invalid triangle"

// daca triunghiul este dreptunghic => "Right Triangle" ( hint: pitagora )

// daca cele 3 laturi sunt egale => "Equilateral"

// daca cele 2 laturi sunt egale => "Isosceles"

// daca cele nu exista laturi egale => "scalene"


// const triangle = (lenghtOfSides) => {
//     const side_a = 0;
//     const side_b = -1;
//     const side_c = 0;

//     for (let i = 0; i < lenghtOfSides.lenght; i++) {
    
    // daca exista vreo latura care sa aiba o lungime invalida ( numar non-pozitiv ) => sa se returneze "Invalid triangle"
//         if (side_a < 0 && side_b < 0 && side_c < 0) {
//             return "Invalid triangle";
//         }  
//     }

// };
// console.log(triangle);


// Exercitiul 7) Sa se creeze o functie care are scopul de a returna statusul unui birou - daca e deschis sau nu

// intr-o zi specifica, la o ora anume. Biroul este deschis in intervalul M-F, orele 9-18.


// Functia are 2 parametrii: day si hour.

// Day poate fi un string din lista urmatoare: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday".

// Hour poate fi un numar din intervalul 0-23.
// const hour = 0;
// const day = "["Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday", "Sunday"]"; 

// const officeTimeTable = (schedule) => {
    
//     for (let i = 0; i < schedule.lenght; i++) {

// Daca day nu e o valoare valida ( adica un string din list aia) => sa se returneze "Invalid day".
        // if (day !== "Monday" || day !== "Thursday" || day !== "Wensday" || day !== "Thursday" || day !== "Friday" || day !== "Saturday" || day !== "Sunday") {
        //     return "Invalid day";
        // } 

// Daca hour nu e o valoare valida => sa se returneze "Invalid hour".
    //     if (hour < 0 && hour > 23) {
    //         return "Invalid hour";
    //     }
    // }

// Daca biroul este deschis => sa se returneze "Office is open"
// if (day !== "Saturday" || day !== "Saturday" && hour >= 9 || hour < 18) return "Office is open"

// Daca biroul este inchis => sa se returneze "Office is closed."
// if (day === "Saturday" || day === "Saturday" && hour < 9 || hour > 18) return "Office is closed"


// Extra challenge: daca e inchis biroul, sa se returneze un string de genul: "Office is closed. It will open tomorrow at 9AM".
// if (day === "Saturday" || day === "Saturday" && hour < 9 || hour > 18) return "Office is closed. It will open tomorrow at 9AM"

// Practic afisam cea mai apropiata zi + ora, asa cum apare gen in google cand dai search dupa un restaurant.

// Aici fiti atenti ca daca day este vineri, iar biroul se deschide luni => acel tomorrow nu e corect, trebuie pus altceva.
// if (day === "Friday" && (hour < 9 || hour > 18)) {
//     return "Office is closed. Opens monday, at 9.00 am";
// } else if (day === "Saturday" && (hour <= 9 || hour < 18)) {
//     return "Office is closed. Opens monday, at 9.00 am";
// } else if (day === "Sunday" && (hour > 9 || hour <18)) {
//     return "Office is closed. Ppens monday, at 9.00 am";
// }

// Sunt cateva cazuri de tratat, nu le mentionez. Ganditi-o voi foarte atent.
 
// }; console.log(officeTimeTable);