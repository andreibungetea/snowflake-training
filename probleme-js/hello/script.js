
// if (name.length === 0) return "Hello, World!";

// const formattedName = name[0].toUpperCase() + name.substring(1).toLowerCase();
// // const formattedName = name[0].toUpperCase() + name.slice(1, name.length).toLowerCase();

// // varianta 1
// for (let i = 0; i < name.length; i++) {
    //     if(name[i] === formattedName) {
        //         formattedName += name[i];
        //     }
        // } return `Hello, ${formattedName}!`; 
        
        // varianta 2
        // return `Hello, ${formattedName}!`;
        
    // for (let i = 0; i < name.length; i++) {

    //     if (name.length === 0) return "Hello, World!";
    //     const formattedName = name[0].toUpperCase() + name.substring(1).toLowerCase();
    // // }
    //     return `Hello, ${formattedName}!`;
    // const hello = (name) => {
    
    //     if(name[0] === 0) return "Hello, World!";
        
    //     const formattedName = name[0].toUpperCase + name.substring(1).toLowerCase;

    //     return `Hello, ${formattedName}!`;
// const hello = (name) => {
//     if (name === "") { return "Hello, World!";
//     // let firsOftName = name[0].toUpperCase();
//     // let restOfName = name.slice(1).toLowerCase();
//     // let formatedName = firsOftName + restOfName;
    
//     // return "Hello" + "," + " " + formatedName + "!";

//     // const formatedName = name[0].toUpperCase() + name.substring(1).toLowerCase();
//     // return `Hello, ${formatedName}!`;

//     } else {
//         return `Hello, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
//     };
// }; 
//  console.log(hello(""));

// const find = (array, n) => {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === n) {
//             result.push(i);
//         }
//     }; return result;

    // array.filter(function(currentValue, index, arr), thisValue)
    // return array.filter((element) => element === n);
     
// }; console.log(find([4,6,3,5,3,42,11]), 3);

// sa se scrie un algoritm care sa afiseze "The most expensive jewelery is x"
let jewelery = 0;
const products = [ 
    {
        
        price: 300,
        category: jewelery,
    },
    {
        
        price: 305,
        category: jewelery,
    },
]

    let theMostExpensiveJewelery;
    for (let i=0; i < products.lenght; i++) {
        if (products[i].category === 'jewelery') {
            theMostExpensiveJewelery = products[i];
        }
        if (products[i].category > theMostExpensiveJewelery.price && products[i].category === "jewelery") {
           theMostExpensiveJewelery = products[i];
        }
};
console.log(`The most expensive jewelery is ${theMostExpensiveJewelery}`);


// Number of seconds in specific time
// 4500: 1:25:00
// 1. impartim numarul total de secunde la 3600 pt a vedea cate ore inseamna. Din rezultatul impartirii luam partea intreaga
// 4500 / 3600 = 1.25 -> 1 hour - Math.floor pt a retine doar partea intreaga a rezultatului
// 2. pt minute scadem numarul de secunde la 3600(cat are o ora. daca erau 2 ore, scadeam 3600*2)
// 4500 - 3600 = 900 secunde
// 3. pentru minute impartim rezultatul secundelor la 60
// 900 / 60 = 15 minutes
const time = (totalNumberOfSeconds) => { 
const hours = Math.floor(totalNumberOfSeconds / 3600); //1.25 -> 1
const minutes = Math.floor((totalNumberOfSeconds - hours * 3600)/60); //900 / 60 = 15
const seconds = Math.floor(totalNumberOfSeconds - hours * 3600 - minutes * 60);

const totalHours = hours < 10 ? "0" + hours : hours;
const totalMinutes = minutes < 10 ? "0" + minutes : minutes;
const totalSeconds = seconds < 10 ? "0" + seconds : seconds;


// if (totalHours < 0) {
//     totalHours = "0" + hours;
// } else {
//     totalHours = hours;
// } 
// if (totalMinutes < 0) {
//     totalMinutes = "0" + minutes;
// } else {
//     totalMinutes = minutes;
// }
// if (totalSeconds < 0) {
//     totalSeconds = "0" + seconds;
// } else {
//     totalSeconds = seconds;
// }

return `${totalHours}:${totalMinutes}:${totalSeconds}`;
}; 

console.log(time(4500));

// 8400
const time2 = (totalNumberOfSeconds2) => {
    const hours = Math.floor(totalNumberOfSeconds2 / 3600); //2.33
    const minutes = Math.floor((totalNumberOfSeconds2 - hours * 3600) / 60); //20
    const seconds = Math.floor(totalNumberOfSeconds2 - hours * 3600 - minutes * 60); //0

    const totalHours2 = hours < 0 ? "0" + hours : hours;
    const totalMinutes2 = minutes < 0 ? "0" + minutes : minutes;
    const totalSeconds2 = seconds < 0 ? "0" + seconds : seconds;
    
    return `${totalHours2}:${totalMinutes2}:${totalSeconds2}`;
}; console.log(time2(8400));

const hello = (name) => {
    if (name === "") return "Hello, World!";
    const formatedName = name[0].toUpperCase + name.substring(1).toLowerCase;
    return `Hello, ${formatedName}!`;
}; 
console.log(hello('john'));

const hello2 = (name) => {
    if (name.lenght === 0) return "Hello, World!";
    // const newName = name[0].toUpperCase() + name[1].substract.toLowerCase();
    const newName = name[0].toUpperCase() + name.slice[1].toLowerCase();
    return `Hello, ${newName}!";
}; 
console.log(hello2(john));