const alphabetWar = (fight) => {
//  let result = "";
 let leftSide = [];
 let rightSide = [];

    for (let i = 0; i < fight.length; i++) {
        if (i === "w" || i === "p" || i === "b" || i === "s") {
            leftSide += 4;
        }
        else if (i === "m" || i === "q" || i === "d" || i === "z") {
            rightSide += 4;
        }   
    }
        if (i === "w" || i === "p" || i === "b" || i === "s") {
            leftSide.push(fight[i]);
        }
        if (i === "m" || i === "q" || i === "d" || i === "z") {
            rightSide.push(fight[i]);
        }
           
    if (leftSide === rightSight) return "Let's fight again!";
    if (leftSide > rightSide) return "Left side wins!";
    if (rightSide > leftSide) return "Right side wins!";

    // return result = ("w, i,b,c");
}; 
console.log(alphabetWar("w", "i", "b", "c"));
