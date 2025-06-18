let gamesWon = 0;
const playerScore = document.querySelector(".player-score");

const getFinalResult = (p1, p2) => {

        if (p1 === p2) return "Draw!"; //am tratat exceptia

        if (p1 === "scissors" && p2 === "paper") {
            gamesWon++;
            playerScore.innerText = gamesWon;
            return "YOU WIN!";
        }
        if (p1 === "scissors" && p2 === "rock") return "HOUSE WIN!";

        if (p1 === "paper" && p2 === "scissors") return "YOU WIN!";
        if (p1 === "paper" && p2 === "rock") {
            gamesWon++;
            playerScore.innerText = gamesWon;
            return "HOUSE WIN!";
        }

        if (p1 === "rock" && p2 === "scissors") return "YOU WIN!";
        if (p1 === "rock" && p2 === "paper") {
            gamesWon++;
            playerScore.innerText = gamesWon;
            return "HOUSE WIN!";
        }

};