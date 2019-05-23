// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Recursive solution
function pyramid(n, row = 0, level = "") {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  // console.log(level)
  pyramid(n, row, level + add)
}

pyramid(5);
module.exports = pyramid;


// Iterative solution
// function pyramid(n) {
//   for (let row = 1; row <= n; row++) {
//     let stair = "";
//     for (let col = 1; col <= n * 2 - 1; col++) {
//       if (col > n - row && col < n + row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair)
//   }
// }