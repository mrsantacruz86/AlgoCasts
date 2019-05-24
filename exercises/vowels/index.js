// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  console.log(str,matches);
  return matches ? matches.length : 0;
}


// function vowels(str) {
//   let count =0;
//   let vowelList = ["a", "e", "i", "o", "u"];
//   for (let char of str.toLowerCase()) {
//     if(vowelList.includes(char)){
//       count++;
//     }
//   }
//   return count;
// }

module.exports = vowels;
