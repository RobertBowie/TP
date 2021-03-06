window.onload = globalInit;

// TODO: add pause functionality

function Board(size) {
  this.board = [];
  this.size = size;
  this.init(size);
  this.score = 0;
  this.interval = 1000;
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
    debugger;
    this.score = 0;
    // tick based updates - snake moves one square per tick
    this.tick = setInterval(function() {
      game1.snake.decide();
      game1.print();
      updateScore();
    }, this.interval);
  },
  stopTicks: function() {
    clearInterval(this.tick);
  },
  reset: function() {
    var playArea = document.getElementById('playArea');
    this.stopTicks();
    playArea.innerHTML = '';
    globalInit();
  },
  hardMode: function() {
    var hardModeButton = document.getElementById('hrdBtn');
    if (this.interval === 1000) {
      this.interval = 500;
      hardModeButton.className = 'btn hardModeOn';
    } else if (this.interval === 500) {
      this.interval = 1000;
      hardModeButton.className = 'btn';
    }
  }
}

// 1 x ? snake, represented by 2 in the matrix
function Snake() {
  this.currDir = 'n';
  // TODO: dynamic initial position
  this.position = [[4, 4], [5, 4], [6, 4]];
};

Snake.prototype = {
  constructor: Snake,
  grow: function() {
    // find next space in current direction
    var nextSpace = this.nextSpace();
    // extend head a space in the current direction
    this.position.unshift(nextSpace);
    game1.setSpace(nextSpace, 2);
    game1.score++;
  },
  move: function() {
    // find next space in current direction
    var nextSpace = this.nextSpace();
    // extend head a space in the current direction
    this.position.unshift(nextSpace);
    game1.setSpace(nextSpace, 2);
    // like grow but remove the tail
    game1.setSpace(this.position.pop(), 0);
  },
  die: function() {
    // TODO: Add game over visual
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
      this.move();
    }
    // if snake (2)
    if (nextVal === 2) {
      this.die();
    }
    // if food (1)
    if (nextVal === 1) {
      this.grow();
      game1.addFood();
    }
  },
  hatch: function() {
    // dynamic initial placement based on this.position
    this.position.forEach( (tuple) => game1.setSpace(tuple, 2) );
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

function globalInit() {
  game1 = new Board(10);
  addHTML();
  game1.snake.hatch();
  game1.addFood();
  game1.print();
  updateScore();
  document.onkeydown = checkKey;
};

function addHTML() {
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
  // Add buttons
  var buttonDiv = addElement(playArea, 'div', 'buttonDiv');
  var startButton = addElement(buttonDiv, 'button', 'btn', 'Start');
  startButton.addEventListener('click', game1.startTicks.bind(game1));
  var resetButton = addElement(buttonDiv, 'button', 'btn', 'Reset');
  resetButton.addEventListener('click', game1.reset.bind(game1));
  var hardModeButton = addElement(buttonDiv, 'button', 'btn', 'HardMode', 'hrdBtn');
  hardModeButton.addEventListener('click', game1.hardMode.bind(game1));
};

function addElement(appendTo, elementType, className, innerHTML, id) {
  var element = document.createElement(elementType);
  if (className !== undefined) {
    element.className = className;
  }
  if (innerHTML !== undefined) {
    element.innerHTML = innerHTML;
  }
  if (id !== undefined) {
    element.id = id;
  }
  appendTo.appendChild(element);
  return element;
};

function markSpace(tuple, char) { //styles: snake, food
  var style = char === 1 ? 'food' : char === 2 ? 'snake' : 'blank';
  var space = document.getElementById('' + tuple[0] + '.' + tuple[1]);
  space.className = style;
};

function updateScore() {
  var scoreDiv = document.getElementById('score');
  scoreDiv.innerHTML = 'Score: ' + game1.score;
};
// Event listeners for arrow keys and start
function checkKey(e) {
  e = e || window.event;
  var currDir = game1.snake.currDir;
  if (e.keyCode === 38) { // up arrow
    if (currDir !== 's') {
      game1.snake.currDir = 'n';
    }
  } else if (e.keyCode === 40) { // down arrow
    if (currDir !== 'n') {
      game1.snake.currDir = 's';
    }
  } else if (e.keyCode === 37) { // left arrow
   if (currDir !== 'e') {
     game1.snake.currDir = 'w';
   }
  } else if (e.keyCode === 39) { // right arrow
   if (currDir !== 'w') {
     game1.snake.currDir = 'e';
   }
  } else if (e.keyCode === 13) { // enter
    game1.startTicks();
  }
};
