// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const alphabet = {
    11: "a", 
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
    " ": " ",
  };

  function polybius(input, encode = true) {
    // define our result variable
    let result = "";

    // set all characters in the input to lower case
    const inputLower = input.toLowerCase();

    // split our input on any included spaces
    const inputSplit = inputLower.split(" ");
    // set a variable that will be used to set our input as an array
    let inputArr = inputLower;

    // check to see if decoding
    if (!encode) {
      // if input length is odd set result variable to false
    const decodingArr = inputSplit.map(split => {
        if (split.length % 2 === 1){
          result = false;
        // if input length is even, we'll decode   
      } else {
        // set a variable to be the number of characters in split
        const originalSplitLength = split.length;
          // run a for loop that iterates over every 2nd number, starting with the first
          for (let i = 0; i < split.length; i += 2){
            // set a variable to be the first number and the 2nd number at the currently iterated position
            const numberPair = (split[i] + split[i + 1]);
            // run a for in loop to run through the alphabet object
            for (let key in alphabet){
              // if the alphabet key and numberPair are equal, add the alphabet key's value to split
              if (key === numberPair) split += alphabet[key];
            }
          }
          // set the result variable to split, removing the initial value of split 
          result = split.substring(originalSplitLength);
        }
        // return the result of the inputSplit map
        return result;
      });
      // if result is not set to false, join the decodingArr using a space
      if (result) result = decodingArr.join(" ");
      return result;
    } 

    // if we're encoding, set inputArr to be an array of each character
    if (encode) {
      inputArr = [...inputLower];
      // run a map and also a for in loop to check for equality between the inputArr item and the alphabet values
      inputArr.map(inputChar => {
        for (let key in alphabet){
          // use .includes() rather than strict equality to allow for "(i/j)""
          if (alphabet[key].includes(inputChar)){
            result += key;
          } 
        }
      });
      return result;
    }  
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
