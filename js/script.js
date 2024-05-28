// Add an event listener to the "Start Game" button to call the startGame function when clicked
document.getElementById('start-game').addEventListener('click', startGame);

function startGame() {
    // Get the grid size and win streak values from the input fields and convert them to integers
    const gridSize = parseInt(document.getElementById('grid-size').value);
    const winStreak = parseInt(document.getElementById('win-streak').value);

 // Check if the win streak is greater than the grid size, and alert the user if so
    if (winStreak > gridSize) {
        alert("Win streak (m) cannot be greater than grid size (n).");
        return;
    }
  // Create the game board with the specified grid size
    createBoard(gridSize);
    initializeGame(gridSize, winStreak);
}
  // this is the function of Create the game board with the specified grid size
function createBoard(size) {
    const gameBoard = document.getElementById('game-board');
       // Clear any existing content in the game board
    gameBoard.innerHTML = '';
        // Set the grid template columns and rows based on the specified size
    gameBoard.style.gridTemplateColumns = `repeat(${size}, 50px)`;
    gameBoard.style.gridTemplateRows = `repeat(${size}, 50px)`;

        // Create cells for the game board
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
                // Add the 'cell' class to each cell
        cell.classList.add('cell');
           // Add an event listener to handle clicks on each cell
        cell.addEventListener('click', handleCellClick);
        gameBoard.appendChild(cell);
    }
}

let board, currentPlayer, gameActive, winStreak;
// Create a 2D array representing the game board, initially filled with null
function initializeGame(size, streak) {
    board = Array(size).fill(null).map(() => Array(size).fill(null));
    currentPlayer = 'X';
    gameActive = true;
    winStreak = streak;
    document.getElementById('game-status').textContent = `Player ${currentPlayer}'s turn`;
}

function handleCellClick(event) {
    if (!gameActive) return;

    const cell = event.target;
    const [row, col] = [Array.from(cell.parentNode.children).indexOf(cell) / board.length | 0, Array.from(cell.parentNode.children).indexOf(cell) % board.length];

    if (board[row][col] !== null) return;

     // If the cell is already occupied, do nothing
    board[row][col] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin(row, col)) {
        document.getElementById('game-status').textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
    } else if (board.flat().every(cell => cell !== null)) {
        document.getElementById('game-status').textContent = 'Draw!';
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('game-status').textContent = `Player ${currentPlayer}'s turn`;
    }
}

function checkWin(row, col) {
     // Check for a win in all possible directions
    return checkDirection(row, col, 1, 0) || // Horizontal
           checkDirection(row, col, 0, 1) || // Vertical
           checkDirection(row, col, 1, 1) || // Diagonal \
           checkDirection(row, col, 1, -1);  // Diagonal /
}

function checkDirection(row, col, rowDir, colDir) {
    let count = 0;
 // Check each cell in the specified direction
    for (let i = -winStreak + 1; i < winStreak; i++) {
        const r = row + i * rowDir;
        const c = col + i * colDir;

         // If the cell is within bounds and matches the current player's mark, increment the count
        if (r >= 0 && r < board.length && c >= 0 && c < board.length && board[r][c] === currentPlayer) {
            count++;
              // If the count equals the win streak, the current player wins
            if (count === winStreak) return true;
        } else {
            count = 0;  // Reset the count if the cell does not match
        }
    }

    return false; // Return false if no win condition is met
}
