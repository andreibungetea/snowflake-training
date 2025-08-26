// Sa se creeze o functie care primeste ca parametru un numar de secunde.
// Functia trebuie sa returneze conversia numarului de secunde in formatul:
// hh:mm:ss

// 4500: "01:15:00"
// 1. impartim numarul total de secunde la 3600 pt a vedea cate ore inseamna. Din rezultatul impartirii luam partea intreaga
// 4500 / 3600 = 1.25 -> 1 hour - Math.floor pt a retine doar partea intreaga a rezultatului
// 2. pt minute scadem numarul de secunde la 3600(cat are o ora. daca erau 2 ore, scadeam 3600*2)
// 4500 - 3600 = 900 secunde
// 3. pentru minute impartim rezultatul secundelor la 60
// 900 / 60 = 15 minutes
// const convertSecondsInSpecificTimeFormat = (totalNumberOfSeconds) => {
//     const hours = Math.floor(totalNumberOfSeconds / 3600); //1. nr de secunde total - nr de secunde dintr-o ora
//     const minutes = Math.floor((totalNumberOfSeconds - hours * 3600) / 60); //15. numarul de secunde total - nr de ore*3600 de secunde cate sunt intr-0 ora
//     const seconds = totalNumberOfSeconds - hours * 3600 - minutes * 60; //00. nr total de secunde - ore*nr se sec dintr-o ora - min*nr de sec dintr-o ora
    
//     // varianta 1 - folosim turnery operator
//     const formattedHours = hours < 10 ? "0" + hours : hours;
//     const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
//     const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    // varianta 2 - if/else
    // if (formattedHours < 10) {
    //     formattedHours = "0" + hours;
    // } else {
    //     formattedHours = hours;
    // }

    // if (formattedMinutes < 10) {
    //     formattedMinutes = "0" + seconds;
    // } else {
    //     formattedMinutes = minutes;
    // }
    
    // if (formattedSeconds < 10) {
    //     formattedSeconds = "0" + seconds
    // } else {
    //     formattedSeconds = seconds;
    // }
        
// return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`; //1:15:0
// }; 
// convertSecondsInSpecificTimeFormat(4500); //01:15:00

// Exercitiul 2: 8400 -> 2:20:00

// const convertSecondsInSpecificTimeFormat = (totalNumberOfSeconds) => {

//     // 1. aflam numarul de ore
//     const hours = Math.floor(totalNumberOfSeconds / 3600); // 2.33
//     // 2.aflam numarul de minute
//     const minutes = Math.floor(totalNumberOfSeconds - hours * 3600) / 60; // 20
//     // 3. aflam numarul de secunde
//     const seconds = totalNumberOfSeconds - hours * 3600 - minutes * 60; // 00

//     // scriem un cod in care sa se afiseze si 0 inainte daca orele, minutele sau secundele sunt mai mici de 10
//     // 1. turney operators
//     const totalHours = hours < 10 ? "0" + hours : hours;
//     const totalMinutes = minutes < 10 ? "0" + minutes : minutes;
//     const totalSeconds = seconds < 10 ? "0" + seconds : seconds;

//     // 2. if/else
//     if (totalHours < 10) {
//         totalHours = "0" + hours;
//     } else {
//         totalHours = hours;
//     }
//     if (totalMinutes < 10) {
//         totalMinutes = "0" + minutes;
//     } else {
//         totalMinutes = minutes;
//     }
//     if (totalSeconds < 10) {
//         totalSeconds = "0" + seconds;
//     } else {
//         totalSeconds = seconds;
//     }


//     return `${totalHours}:${totalMinutes}:${totalSeconds}`;
// }; 
//  convertSecondsInSpecificTimeFormat(8400);

 const specificSecondsInTimeFormat = (totalNumberOfSeconds) => {
        //24422 -> 06:47:02
        const hours = Math.floor(totalNumberOfSeconds / 3600); //2.33 -> 2
        const minutes = Math.floor((totalNumberOfSeconds - hours * 3600) / 60); //20 -> 20
        const seconds = totalNumberOfSeconds - hours * 3600 - minutes * 60; //00

        const totalHours = hours < 10 ? "0" + hours : hours;
        const totalMinutes = minutes < 10 ? "0" + minutes : minutes;
        const totalSeconds = seconds < 10 ? "0" + seconds : seconds;

        return `${totalHours}:${totalMinutes}:${totalSeconds}`;
};
console.log(specificSecondsInTimeFormat(24422));