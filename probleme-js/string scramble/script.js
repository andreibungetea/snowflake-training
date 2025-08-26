// input: "abcd", [0, 3, 1, 2]
// output: "acdb"

// const scramble = (str, arr) => {
//     let result = [];
        
    // for (let i = 0; i < str.length; i++) {
    //     const index = arr[i];
    //     result[index] = str[i];
    // }

//   return result.join("");
// };
// console.log('abcd', [0,3,1,2], 'acdb');

const scramble = (str, arr) => {
    let result = [];
        
    for (let i = 0; i < str.length; i++) {
        
        result[arr[i]] = str[i];
    }

  return result.join("");
};
console.log('abcd', [0,3,1,2], 'acdb');