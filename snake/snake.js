window.onload = globalInit;

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
    markSpace(coordArr, char);
  },
  getSpace: function(coordArr) {
    return this.board[coordArr[0]][coordArr[1]];
  },
  startTicks: function() {
    // tick based updates - snake moves one square per tick
    this.tick = setInterval(function() {
      game1.snake.decide();
      game1.print();
    }, 1000);
  },
  stopTicks: function() {
    clearInterval(this.tick);
  },
  reset: function() {
    var playArea = document.getElementById('playArea');
    this.stopTicks();
    playArea.innerHTML = '';
    globalInit();
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
    game1.stopTicks();
  },
  decide: function() {
    // based on next cell to encounter
    var nextSpace = this.nextSpace();
    if (nextSpace === null) { this.die(); console.log('ran into a wall and died'); return; }
    var nextVal = game1.getSpace(nextSpace);
    // if clear
    if (nextVal === 0) {
      // move there
      this.move();
      console.log('snake decided to move');
    }
    // if snake (2)
    if (nextVal === 2) {
      // die
      this.die();
      console.log('snake decided to die');
    }
    // if food (1)
    if (nextVal === 1) {
      // grow
      this.grow();
      console.log('snake decided to grow');
      game1.addFood();
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
      if (this.position[0][1] + 1 > game1.size - 1) { return null; }
      newLoc = [this.position[0][0], this.position[0][1] + 1];
    }
    if (this.currDir === 's') {
      if (this.position[0][0] + 1 > game1.size - 1) { return null; }
      newLoc = [this.position[0][0] + 1, this.position[0][1]];
    }
    if (this.currDir === 'w') {
      if (this.position[0][1] - 1 < 0) { return null; }
      newLoc = [this.position[0][0], this.position[0][1] - 1];
    }
    return newLoc;
  }
}


// init
var game1;
function printSomething() {
  console.log('printSomething called');
};

function globalInit() {
  game1 = new Board(10);
  addHTML();
  game1.snake.hatch();
  game1.addFood();
  game1.print();
};

function addHTML() {
  // add table
  var playArea = document.getElementById('playArea');
  playArea.innerHTML += '<table id="snakeBoard"></table>';
  var snakeBoard = document.getElementById('snakeBoard');
  var table = '';
  for (var i = 0; i < game1.size; i++) {
    var tableRow = '<tr>';
    for (var j = 0; j < game1.size; j++) {
      tableRow += '<td id="' + i + '.' + j + '">';
    }
    table += tableRow;
  }
  snakeBoard.innerHTML += table;

  var buttonDiv = document.createElement('div');
  buttonDiv.className = 'buttonDiv';
  playArea.appendChild(buttonDiv);
  var startButton = document.createElement('button');
  startButton.className = 'btn';
  startButton.innerHTML = 'Start';
  buttonDiv.appendChild(startButton);
  startButton.addEventListener('click', game1.startTicks.bind(game1));
  var resetButton = document.createElement('button');
  resetButton.className = 'btn';
  resetButton.innerHTML = 'Reset';
  buttonDiv.appendChild(resetButton);
  resetButton.addEventListener('click', game1.reset.bind(game1));
};

function markSpace(tuple, char) { //styles: snake, food
  var style = char === 1 ? 'food' : char === 2 ? 'snake' : 'blank';
  var space = document.getElementById('' + tuple[0] + '.' + tuple[1]);
  space.className = style;
};

// TODO: event listeners for arrow keys and start
document.onkeydown = checkKey;
function checkKey(e) {
  e = e || window.event;
  var currDir = game1.snake.currDir;
  if (e.keyCode === 38) {
      // up arrow
      if (currDir !== 's') {
        game1.snake.currDir = 'n';
      }
  }
  else if (e.keyCode === 40) {
      // down arrow
      if (currDir !== 'n') {
        game1.snake.currDir = 's';
      }
  }
  else if (e.keyCode === 37) {
     // left arrow
     if (currDir !== 'e') {
       game1.snake.currDir = 'w';
     }
  }
  else if (e.keyCode === 39) {
     // right arrow
     if (currDir !== 'w') {
       game1.snake.currDir = 'e';
     }
  }
};
