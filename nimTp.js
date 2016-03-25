/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  var canWin = false;
  // We can remove 1-3 pieces on our turn
  for (var i = 1; i <= 3; i++) {
    // if n % 4 === 0 
    if ((n - i) % 4 === 0) {
      // we could win
      canWin = true;
    }
  }
  return canWin;
};
