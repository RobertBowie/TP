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
    this.snake = new Snake;
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
        this.setSpace([row, col], 1);
        unplaced = false;
      }
    }
  },
  setSpace: function(coordArr, char) {
    this.board[coordArr[0]][coordArr[1]] = char;
  }
}

// 1 x ? snake, represented by 2 in the matrix
function Snake() {
  this.currDir = 'n';
  this.headPos = [4, 4];
  this.preTailPos = [5, 4];
  this.tailPos = [6, 4];
  // snake grows 1 every food eaten

  // snake dies if it hits walls (oob) or itself

}

Snake.prototype = {
  constructor: Snake,
  move: function() {
    // extend head a space in the current direction
    if (this.currDir === 'n') {
      this.headPos[0] -= 1;
    }
    game1.setSpace(this.headPos, 2);
    // remove tail from current space
    game1.setSpace(this.tailPos, 0);
    // update tailPos
    this.tailPos[0] -= 1;
  },
  grow: function() {
    // like move but don't remove the tail

  },
  die: function() {
    // what happens when the snake dies?  game over

  },
  decide: function(row, col) {
    // based on next cell to encounter

    // if clear

      // move there

    // if snake (2) or wall (undefined)

      // die

    // if food (1)

      // grow
  },
  hatch: function() {
    // by default we have a 3-long snake in the middle of the board
    game1.setSpace([4, 4], 2);
    game1.setSpace([5, 4], 2);
    game1.setSpace([6, 4], 2);
  }
}

// tick based updates - snake moves one square per tick

// init
var game1 = new Board(10);
game1.snake.hatch();
