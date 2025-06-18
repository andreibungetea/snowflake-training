    const p1 = ["scissors", "paper", "rock"];
    const p2 = ["scissors", "paper", "rock"];
    // const rps = (p1, p2) => {

        // if (p1 === "scissors" && p2 ==="paper") return "Player 1 won!";
        // if (p2 === "scissors" && p2 ==="rock") return "Player 2 won!";
        // if (p1 === "paper" && p2 === "paper") return "Draw!";

        // varianta prof

    //     if (p1 === p2) return "Draw!"; //am tratat exceptia

    //     if (p1 === "scissors" && p2 === "paper") return "Player 1 won!";
    //     if (p1 === "scissors" && p2 === "rock") return "Player 2 won!";

    //     if (p1 === "paper" && p2 === "scissors") return "Player 1 won!";
    //     if (p1 === "paper" && p2 === "rock") return "Player 2 won!";

    //     if (p1 === "rock" && p2 === "scissors") return "Player 1 won!";
    //     if (p1 === "rock" && p2 === "paper") return "Player 2 won!";

    // }; console.log(rps(p1, p2));

    // varianta bogdan

    const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};