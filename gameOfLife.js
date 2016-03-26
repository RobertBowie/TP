/*
Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state.

Follow up: 
Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var gameOfLife = function(board) {

  // Internal function for recursing given a single cell

    // Base Case: There are no more cells to check

    // var to track of if we are going to change a cell

    // var to track live neighbors = countLiveNeighbors()

    // if the cell is live

      // if liveNeighbors is < 2 or > 3

        // set toggleCell to true

    // if the cell is dead

      // if liveNeighbors is 3

        // toggleCell = true

    // cell = 3 <- a marker

    // recurse over next cell

  // Utility function for counting up live neighbors

    // check each neighbor in turn

      // if live then live++

    // return live

  //
};

function makeBoard(m, n) {
  var board = {};
  board.container = [];
  for (var i = 0; i < m; i++) {
    board.container.push([]);
    for (var j = 0; j < n; j++) {
      board.container[i].push(Math.floor(Math.random() * 2));
    }
  }
  board.print = function() {
    for (var i = 0; i < board.container.length; i++) {
      console.log(board.container[i]);
    }
  };
  return board;
}
