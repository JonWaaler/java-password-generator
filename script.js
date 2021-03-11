// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password characteristics
var passwordLength = 8; // Default value, ranges from 8 - 128
var useNumbers = true;
var useLetters = true;
var useSpecialChars = true;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Iteratively generates a  password based on user inputted criteria
function generatePassword() {
  // stores the password
  var generatedPassword = "";

  // This loop will fill our password for required length.
  for (index = 0; index < passwordLength; index++) {
    // character to be added
    var nextCharacter;

    // generate ascii code from codes: 33 - 126
    // This range includes: numbers, letters and special characters
    if (useNumbers && useLetters && useSpecialChars) {
      var asciiCode = Math.floor(Math.random() * (126 - 33) + 33);

      // Converts ascii number into desired character
      nextCharacter = String.fromCharCode(asciiCode);
      nextCharacter.toString();
    }

    // adds randomized character to our password
    generatedPassword += nextCharacter;

    // return final result
  }

  return generatedPassword;
}

function getLetter() {
  // gi
  var randomNumber = Math.floor(Math.random() * 26);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
