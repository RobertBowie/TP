// 100 x 100 board
function Board(size) {
  this.board = [];
  this.size = size;
  this.init(size);
};

Board.prototype = {
  constructor: Board,
  init: function(size) {
    for (var i = 0; i < size; i++) {
      var row = [];
      for (var j = 0; j < size; j++) {
        row.push(0);
      }
      this.board.push(row);
    }
  },
  print: function() {
    this.board.forEach( row => console.log(row) );
  },
  addFood: function() { // food are 1 x 1 and randomly placed initially and once eaten
    var unplaced = true;
    while (unplaced) {
      var row = Math.floor(Math.random(this.size) * 10);
      var col = Math.floor(Math.random(this.size) * 10);
      if (this.board[row][col] === 0) {
        this.setSpace(row, col, 1);
        unplaced = false;
      }
    }
  },
  setSpace: function(row, col, char) {
    this.board[row][col] = char;
  }
}
// 1 x ? snake

// snake grows 1 every food eaten

// snake dies if it hits walls (oob) or itself

// tick based updates - snake moves one square per tick

// init
var game1 = new Board(10);
