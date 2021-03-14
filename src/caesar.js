// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  // alphabet array
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function caesar(input, shift, encode = true) {
    // check to see if the shift value is true
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    // if we're decoding, change the shift value to negative
    if (!encode) shift = shift * -1;

    // put each character of the input into an array, as lower case
    const inputLower = input.toLowerCase();
    const inputArr = [...inputLower];

    // find the alphabet array index of each character 
    const inputIndexArr = inputArr.map(input => {
      // if the character is a letter, find the index
      if (alphabet.includes(input)){
        return alphabet.indexOf(input);
      // if a non-alpha character, return the character  
      } else {
        return input;
      }
    });

    // change the index based on the shift count
    const shiftIndexArr = inputIndexArr.map(inputIndex => {
      // check to see if the array item is an integer
      if (Number.isInteger(inputIndex)){
        // if a number, add the shift count
        if (inputIndex + shift > 25) {
          // if the result of inputIndex is over 25, subtract 26 to re-start counting from the beginning of the array
          return (inputIndex + shift) - 26; 
        }
        if (inputIndex + shift < 0) {
          // if the result of inputIndex is a negative number, add 26 to re-start counting from the beginning of the array
          return (inputIndex + shift) + 26; 
        }
        return inputIndex + shift;
      } else {
        // if not a number, make no change
        return inputIndex;
      }
    });

    // map from the alphabet array using the newly shifted array
    const shifted = shiftIndexArr.map(shiftIndex => {
      // check to see if the array item is an integer
      if(Number.isInteger(shiftIndex)){
        // if a number, return the alphabet array item at shiftIndex
        return alphabet[shiftIndex];
      } else {
        // if not a number, make no change
        return shiftIndex;
      }
    });
    return shifted.join('');
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
