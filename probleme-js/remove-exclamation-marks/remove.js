const removeExclamationMarks = (s) => {
    let result = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "!") {
            result += s[i];
        } return result;
}
}; console.log(removeExclamationMarks("!Ab!!!!c"));

const removeExclamationMarks2 = (s) => s.replace("!", " ");
console.log(removeExclamationMarks2("!Ab!!!!c"));
