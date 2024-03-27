//Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word.
//Leave punctuation marks untouched.

const pigIt = (str) => {
  const arr = str.split(' '); // space between ' ' means split to words
  const rearrangedWords = arr.map((word) => {
    if (word.match(/[a-zA-Z]/)) { // Check if word contains alphabetic characters
      const firstLetterOfWord = word.charAt(0);
      const remainingLetters = word.slice(1);
      return remainingLetters + firstLetterOfWord +'ay';
    } else {
      return word;
    }
  });
  return rearrangedWords.join(' ');
}
// or   return 
str.split(" ").map((item) => `${item.substr(1)}${item[0]}ay`).join(" ")

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !