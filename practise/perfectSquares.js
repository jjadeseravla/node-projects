// sum_of_squares(17) = 2
// 17 = 16 + 1 (16 and 1 are perfect squares).
// sum_of_squares(15) = 4
// 15 = 9 + 4 + 1 + 1. There is no way to represent 15 as the sum of three perfect squares.
// sum_of_squares(16) = 1
// 16 itself is a perfect square.

function perfectSquares(n, maxSquares = n) {
    // Base case: If n itself is a perfect square
    if (Number.isInteger(Math.sqrt(n))) {
      return 1;
    } 
    const rangeArr = Array.from(Array(n), (_, index) => index + 1);
    const squareNums = rangeArr.filter((num) => {
      return Number.isInteger(Math.sqrt(num));
    });
  // squareNums = [9,  4, 1,  1]
  
  let minSquares = maxSquares;
  for (const square of squareNums) {
    const difference = n - square;
    if (difference >= 0) {
      const squaresNeeded = 1 + perfectSquares(difference, minSquares -1);
      // 1 cos is doesnt matter about content, its the legnth you need at end
      if (squaresNeeded > 0 && squaresNeeded < minSquares) {
        minSquares = squaresNeeded
      }
    }
  }
  return minSquares === maxSquares ? -1 : minSquares;
}

console.log(perfectSquares(18))// 2  cos 16 + 2
console.log(perfectSquares(15))// 4
console.log(perfectSquares(16))// 1