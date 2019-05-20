// --- Directions
// Given a string, return a new string with the rev
// order of chars
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;

// //Solution 1
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// //Solution 2
// function reverse(str) {
//   var rev = "";
//   for (let char of str) {
//     rev = char + rev;
//   }
//   return rev;
// }