/*
Find the total area covered by two rectilinear rectangles in a 2D plane.
Each rectangle is defined by its bottom left corner and top right corner.
Assume that the total area is never beyond the maximum possible value of int.
*/

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  var h1, w1, h2, w2, h3, w3, result, overlap;
  h1 = D - B;
  w1 = C - A;
  h2 = H - F;
  w2 = G - E;
  h3 = Math.min(D, H) - Math.max(B, F);
  w3 = Math.min(C, G) - Math.max(A, E);
  result = h1 * w1 + h2 * w2;
  // B>=H or E>=C or F>=D or A>=G  >>> if any are true there is no overlap
  overlap = !(B >= H || E >= C || F >= D || A >= G);
  return overlap ? result - h3 * w3 : result;
};

console.log(computeArea(0, 0, 0, 0, -1, -1, 1, 1));
