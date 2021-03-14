// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const standard = "abcdefghijklmnopqrstuvwxyz";
  function substitution(input, alphabet, encode = true) {

    // return false if alphabet argument is missing
    if (!alphabet) return false;

    // return false if alphabet argument is not exactly 26 characters
    if (alphabet.length !== 26) return false;
    
    // check if alphabet argument has any duplicate characters
    // declare duplicateCheck as an empty array
    const duplicateCheck = [];
    // iterate over the alphabet argument
    for (let i = 0; i < alphabet.length; i++){
      // push the character at the current iteraton into duplicateCheck array
      duplicateCheck.push(alphabet[i])
      // the character at the next iteration is found in duplicateCheck, return false
      if (duplicateCheck.includes(alphabet[i + 1])) return false;
    } 

    // put each character of the input into an array, as lower case
    const inputLower = input.toLowerCase();
    const inputArr = [...inputLower];

    // if decoding
    if (!encode){
        // loop over each item in inputArr
        const decode = inputArr.map(input => {
        // declare an empty string as the result variable 
        let result = "";
        // check if the alphabet argument includes the currently iterated input value
        if (alphabet.includes(input)){
          // if true, add the character from the standard string (at the same index as the alphabet string) to result
          result += standard[alphabet.indexOf(input)];
        } else {
          // if false, add just the current input value to result (preserves spaces)
          result += input;
        }
        return result;
      });
      // join the resulting array so it returns as a string
      return decode.join("");
    }

    // if encoding
    if (encode){
      // loop over each item in inputArr
      const encode = inputArr.map(input => {
        // declare an empty string as the result variable 
        let result = "";
        // check if standard includes the currently iterated input value
        if (standard.includes(input)){
          // if true, add the character from the alphabet string (at the same index as the standard string) to result
          result += alphabet[standard.indexOf(input)];
        } else {
          // if false, add just the current input value to result (preserves spaces)
          result += input;
        }
        return result;
      });
      // join the resulting array so it returns as a string
      return encode.join("");
    }  
  }
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;