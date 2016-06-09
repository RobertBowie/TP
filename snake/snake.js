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
  this.position = [[4, 4], [5, 4], [6, 4]];

  // TODO: snake cannot double back on itself (eg. currDir cannot go from N to S)

};

Snake.prototype = {
  constructor: Snake,
  grow: function() {
    // find next space in current direction
    var nextSpace = this.nextSpace();
    // extend head a space in the current direction
    this.position.unshift(nextSpace);
    game1.setSpace(nextSpace, 2);
  },
  move: function() {
    // like grow but remove the tail
    this.grow();
    game1.setSpace(this.position.pop(), 0);
  },
  die: function() {
    // what happens when the snake dies?  game over
    console.warn('Game Over');
  },
  decide: function(row, col) {
    // based on next cell to encounter
    var nextSpace = this.nextSpace();
    // if clear
    if (nextSpace === 0) {
      // move there
      this.move();
    }
    // if snake (2) or wall (undefined)
    if (nextSpace === 2 || nextSpace === null) {
      // die
      this.die();
    }
    // if food (1)
    if (nextSpace === 1) {
      // grow
      this.grow();
    }
  },
  hatch: function() {
    // TODO: make this dynamic based on board size

    // by default we have a 3-long snake in the middle of the board
    game1.setSpace([4, 4], 2);
    game1.setSpace([5, 4], 2);
    game1.setSpace([6, 4], 2);
  },
  nextSpace: function() {
    // based on currDir and where the head is at return a tuple for the next space
    var newLoc;
    if (this.currDir === 'n') {
      if (this.position[0][0] - 1 < 0) { return null; }
      newLoc = [this.position[0][0] - 1, this.position[0][1]];
    }
    if (this.currDir === 'e') {
      if (this.position[0][1] + 1 > board1.size - 1) { return null; }
      newLoc = [this.position[0][0], this.position[0][1] + 1];
    }
    if (this.currDir === 's') {
      if (this.position[0][0] + 1 > board1.size - 1) { return null; }
      newLoc = [this.position[0][0] + 1, this.position[0][1]];
    }
    if (this.currDir === 'w') {
      if (this.position[0][1] - 1 < 0) { return null; }
      newLoc = [this.position[0][0], this.position[0][1] - 1];
    }
    return newLoc;
  }
}

// tick based updates - snake moves one square per tick

// init
var game1 = new Board(10);
game1.snake.hatch();
