/*
Pig latin is created by taking all the consonants before the first vowel of a word and moving them to the back of the
word followed by the letters "ay".

"hello" => "ellohay"
"creating" => "eatingcray"
If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.

"algorithm" => "algorithmway"
This problem is different from other variations in that it expects casing to remain the same so:

"Hello World" => "Ellohay Orldway"
as well as punctuation.

"Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
Your job is to take a string and translate it to Pig Latin. The string will never be undefined but may contain both
numbers and letters. A word will never be a combination of numbers and letters. Also, there will never be punctuation
at the beginning of a word and the only capital letter in a word will be the first letter meaning there are zero all
capitalized words.
*/

function translate(sentence) {
  const vowels = {a: true, e: true, i:true, o:true, u:true};
  const punctuation = {';': true, '.': true, ':': true, '!': true, '?': true, ',': true};
  let words = sentence.split(' ');
  // for each word in sentence
  words = words.map( word => {
    // split letters for manipulation
    let letters = word.split('');
    let firstChar = letters[0];
    let lastChar = letters[letters.length - 1];
    let punct = [];
    // var for capital
    let capital = firstChar === firstChar.toUpperCase();
    if (capital) { firstChar = letters[0] = firstChar.toLowerCase(); }
    // if there is punctuation at the end of the word
    while (lastChar in punctuation) {
      // store and remove punctuation
      punct.push(lastChar);
      letters.pop();
      lastChar = letters[letters.length - 1];
    }
    // if the first letter of the word is a vowel
    if (firstChar in vowels) {
        // add 'way' to the end of the word
        letters.push('w');
        letters.push('a');
        letters.push('y');
        // if punctuation
        if (punct) {
          // append stored punctuation
          letters = letters.concat(punct);
        }
        // if capital
        if (capital) {
          // capitalize
          letters[0] = firstChar.toUpperCase();
        }
    } else { // else
      // move consonants to end of string
      while (!(firstChar in vowels)) {
        letters.push(letters.shift());
        firstChar = letters[0];
      }
      // add 'ay'
      letters.push('a');
      letters.push('y');
      // if capital
      if (capital) {
        // capitalize new first letter
        letters[0] = letters[0].toUpperCase();
      }
      // if punct
      if (punct) {
        // append punct
        letters = letters.concat(punct);
      }
    }
    // return word
    return letters.join('');
  });
  // return modified sentence
  return words.join(' ');
};

console.log(translate("Hello World")); // Ellohay Orldway
console.log(translate("Hello World!")); // Ellohay Orldway!
console.log(translate("Algo")); // Algoway
console.log(translate("Pizza? Yes please!")); // "Izzapay? Esyay easeplay!"
console.log(translate("Pizza? Yes please!!")); // "Izzapay? Esyay easeplay!!"
