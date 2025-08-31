let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

cells.forEach(cell => cell.addEventListener("click", cellClicked));

function cellClicked() {
    const index = this.getAttribute("data-index");

    if (board[index] !== "" || !gameActive) {
        return;
    }

    board[index] = currentPlayer;
    this.textContent = currentPlayer;

    if (checkWinner()) {
        statusText.textContent = `${currentPlayer} Wins! 🎉`;
        gameActive = false;
    } else if (board.every(cell => cell !== "")) {
        statusText.textContent = "It's a Draw! 🤝";
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.textContent = `Player ${currentPlayer}'s Turn`;
    }
}

function checkWinner() {
    const winConditions = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    return winConditions.some(combination => {
        return combination.every(index => board[index] === currentPlayer);
    });
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    statusText.textContent = `Player X's Turn`;
    cells.forEach(cell => cell.textContent = "");
}
