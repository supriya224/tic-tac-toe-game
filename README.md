# Customizable Tic-Tac-Toe

This is a customizable Tic-Tac-Toe game where users can define the grid size (n x n) and the win streak (m) needed to win the game.

## Features

- Customizable grid size between 3x3 and 10x10
- Customizable win streak between 3 and n
- Responsive and intuitive user interface

## How to Run

1. Clone the repository:
    ```sh
    git clone https://github.com/supriya224/tic-tac-toe.git
    ```
2. Navigate to the project directory:
    ```sh
    cd tic-tac-toe
    ```
3. Open `index.html` in your web browser.

## Live Demo

You can also view the live demo [here](https://tic-tac-toe-game-eight-beta.vercel.app/).

##Explanation
1- Event Listener: Listens for the "Start Game" button click and triggers the startGame function.
2- startGame Function: Validates input, creates the game board, and initializes the game.
3- createBoard Function: Dynamically creates the game grid based on the specified size.
4- initializeGame Function: Sets up the initial state of the game, including the board, current player, and game status.
5- handleCellClick Function: Handles the logic for each cell click, including updating the board, checking for a win, switching players, and displaying the game status.
6- checkWin and checkDirection Functions: Determine if the current player has met the win condition by checking all possible win directions (horizontal, vertical, and both diagonals).

## This code structure ensures that the game is dynamic, responsive, and customizable based on user input.
