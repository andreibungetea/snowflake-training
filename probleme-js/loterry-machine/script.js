// "hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
// "ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
// "555"                   -->  "5"

const lottery = (str) => {
    let newStr = "";

   for (let i = 0; i < str.length; i++) {
    if (str.length === 0) return "One more run!";

    if (str[i] === newStr) {
        return newStr.push(str[i]);
    }

   const numbers = filter((number) => str.includes());
   }
};

// 2
let result = "";

for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) === Nan && result.includes(str[i]) === false) {
        result += str[i];
    }

}

// 3
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

if(numbers.includes(str[i])) {
    result += str[i];
}; return result;

// 4
if (result === "") {
    return "One more run!";
} else {
    return result;
};
 
sau 

return if (result === "") ? "One more run!" : result;