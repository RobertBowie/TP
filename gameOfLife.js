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
  var maxIterations = 100;
  var breakFlag = false;
  // Internal function for recursing given a single cell
  function boardWalker(rowInd, colInd) {
    if (breakFlag) { return; }
    // Base Case: We are off the board or have dealt with a cell already:
    if (maxIterations < 1) { console.log('Over max iterations!  Stopping...'); return; }
    if (!board[rowInd] || board[rowInd][colInd] === undefined || board[rowInd][colInd] === 3 || board[rowInd][colInd] === 4) { return; }
    // var to hold cell's current state
    var cellState = board[rowInd][colInd];
    console.log('cellState of [' + rowInd + '][' + colInd + '] set to: ', cellState);
    // var to track live neighbors = adjacentStatus.live
    var adjacentStatus = adjCheck(rowInd, colInd);
    console.log('adjacentStatus of [' + rowInd + '][' + colInd + '] set to: ', adjacentStatus);
    // Base Case: There are no more cells to check
    if (adjacentStatus.end) {
      breakFlag = true;
    }
    // var to track of if we are going to change a cell
    var toggleCell = false;
    // if the cell is live
    if (cellState === 1) {
      console.log('live cell [' + rowInd + '][' + colInd + '] handled!');
      // if adjacentStatus.live is < 2 or > 3
      if (adjacentStatus.live < 2 || adjacentStatus.live > 3) {
        // set toggleCell to true
        toggleCell = true;
      }
      board[rowInd][colInd] = 4
      console.log('cell [' + rowInd + '][' + colInd + '] contents temp set to 4');
    }
    // if the cell is dead
    if (cellState === 0) {
      console.log('dead cell [' + rowInd + '][' + colInd + '] handled!');
      // if adjacentStatus.live is 3
      if (adjacentStatus.live === 3) {
        // toggleCell = true
        toggleCell = true;
      }
      board[rowInd][colInd] = 3
      console.log('cell contents [' + rowInd + '][' + colInd + '] temp set to 3');
    }
    for (var i = 0; i < board.length; i++) {
      console.log(board[i]);
    }
    // CYA Flag:
    maxIterations--;
    // recurse over adjacent cells
    if (!breakFlag && board[rowInd][colInd + 1] !== undefined) { console.log('recursion for row, board[rowInd][colInd + 1]'); boardWalker(rowInd, colInd + 1); }
    if (!breakFlag && board[rowInd + 1] && board[rowInd + 1][colInd] !== undefined) { console.log('recursion for board[rowInd + 1][colInd]'); boardWalker(rowInd + 1, colInd); }
    if (!breakFlag && board[rowInd][colInd - 1] !== undefined) { console.log('recursion for board[rowInd][colInd - 1]'); boardWalker(rowInd, colInd - 1); }
    if (!breakFlag && board[rowInd - 1] && board[rowInd - 1][colInd] !== undefined) { console.log('recursion for board[rowInd - 1][colInd]'); boardWalker(rowInd - 1, colInd); }
    console.log('setting cell value [' + rowInd + '][' + colInd + '] on the way back up, toggleCell is: ', toggleCell);
    // if toggleCell
    if (toggleCell) {
      // if cell state was 1
      if (cellState === 1) {
        // set cell to 0
        board[rowInd][colInd] = 0;
      }
      // if cell state was 0
      if (cellState === 0) {
        // set to 1
        board[rowInd][colInd] = 1;
      }
    } else {
      // else cell = previous cell state
      board[rowInd][colInd] = cellState;
    }
  }

  // Utility function for counting up live neighbors
  function adjCheck(rowInd, colInd) { // returns either the number of live neighbors or -1 if the board has run out
    var live = 0;
    var end = 0;
    // check each neighbor in turn
    if (board[rowInd - 1]) {
      // if 1 then live++
      if (board[rowInd - 1][colInd] === 1 || board[rowInd - 1][colInd] === 4) { live++; }
      // if undefined or 3
      if (board[rowInd - 1][colInd] === undefined || board[rowInd - 1][colInd] === 3 || board[rowInd - 1][colInd] === 4) {
        // end++
        end++;
      }
    } else { end++; }
    // check each neighbor in turn
    if (board[rowInd - 1]) {
      // if 1 then live++
      if (board[rowInd - 1][colInd + 1] === 1 || board[rowInd - 1][colInd + 1] === 4) { live++; }
      // if undefined or 3
      if (board[rowInd - 1][colInd + 1] === undefined || board[rowInd - 1][colInd + 1] === 3 || board[rowInd - 1][colInd + 1] === 4) {
        // end++
        end++;
      }
    } else { end++; }
    // check each neighbor in turn
    if (board[rowInd]) {
      // if 1 then live++
      if (board[rowInd][colInd + 1] === 1 || board[rowInd][colInd + 1] === 4) { live++; }
      // if undefined or 3
      if (board[rowInd][colInd + 1] === undefined || board[rowInd][colInd + 1] === 3 || board[rowInd][colInd + 1] === 4) {
        // end++
        end++;
      }
    } else { end++; }
    // check each neighbor in turn
    if (board[rowInd + 1]) {
      // if 1 then live++
      if (board[rowInd + 1][colInd + 1] === 1 || board[rowInd + 1][colInd + 1] === 4) { live++; }
      // if undefined or 3
      if (board[rowInd + 1][colInd + 1] === undefined || board[rowInd + 1][colInd + 1] === 3 || board[rowInd + 1][colInd + 1] === 4) {
        // end++
        end++;
      }
    } else { end++; }
    // check each neighbor in turn
    if (board[rowInd + 1]) {
      // if 1 then live++
      if (board[rowInd + 1][colInd] === 1 || board[rowInd + 1][colInd] === 4) { live++; }
      // if undefined or 3
      if (board[rowInd + 1][colInd] === undefined || board[rowInd + 1][colInd] === 3 || board[rowInd + 1][colInd] === 4) {
        // end++
        end++;
      }
    } else { end++; }
    // check each neighbor in turn
    if (board[rowInd + 1]) {
      // if 1 then live++
      if (board[rowInd + 1][colInd - 1] === 1 || board[rowInd + 1][colInd - 1] === 4) { live++; }
      // if undefined or 3
      if (board[rowInd + 1][colInd - 1] === undefined || board[rowInd + 1][colInd - 1] === 3 || board[rowInd + 1][colInd - 1] === 4) {
        // end++
        end++;
      }
    } else { end++; }
    // check each neighbor in turn
    if (board[rowInd]) {
      // if 1 then live++
      if (board[rowInd][colInd - 1] === 1 || board[rowInd][colInd - 1] === 4) { live++; }
      // if undefined or 3
      if (board[rowInd][colInd - 1] === undefined || board[rowInd][colInd - 1] === 3 || board[rowInd][colInd - 1] === 4) {
        // end++
        end++;
      }
    } else { end++; }
    // check each neighbor in turn
    if (board[rowInd - 1]) {
      // if 1 then live++
      if (board[rowInd - 1][colInd - 1] === 1 || board[rowInd - 1][colInd - 1] === 4) { live++; }
      // if undefined or 3
      if (board[rowInd - 1][colInd - 1] === undefined || board[rowInd - 1][colInd - 1] === 3 || board[rowInd - 1][colInd - 1] === 4) {
        // end++
        end++;
      }
    } else { end++; }
    // if there are no live cells and end is 8
    end = end === 8;
    return {
      live: live,
      end: end
    };
  };

  // Kick things off:
  if (board) {
  boardWalker(0,0);
  }
};

function makeBoard(m, n, optionalArr) {
  var board = {};
  if (!optionalArr) {
    board.container = [];
    for (var i = 0; i < m; i++) {
      board.container.push([]);
      for (var j = 0; j < n; j++) {
        board.container[i].push(Math.floor(Math.random() * 2));
      }
    }
  } else {
    board.container = optionalArr;
  }
  board.print = function() {
    for (var i = 0; i < board.container.length; i++) {
      console.log(board.container[i]);
    }
  };
  return board;
}
