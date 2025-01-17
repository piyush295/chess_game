const board = document.getElementById("board");

// Create chessboard
function createBoard() {
  for (let i = 0; i < 64; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    if ((i % 2 === 0 && Math.floor(i / 8) % 2 === 0) || (i % 2 !== 0 && Math.floor(i / 8) % 2 !== 0)) {
      square.classList.add("black");
    } else {
      square.classList.add("white");
    }
    board.appendChild(square);
  }
}

// Add pieces
function addPieces() {
  // Place all pieces on their starting positions
}

// Handle piece movement
function handleMove(event) {
  // Check if the move is valid
  // Move the piece or display error
}

createBoard();
addPieces();

board.addEventListener("click", handleMove);

