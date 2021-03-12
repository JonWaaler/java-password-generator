// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password characteristics
var passwordLength = 32; // Default value, ranges from 8 - 128
var useNumbers = true;
var useUppercaseLetters = false;
var useLowercaseLetters = true;
var useSpecialCharacters = true;

// Strings holding our characters
var specialCharacters = "";
var upperCaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowerCaseLetters; // will use the lowercase function converter to fill this one
// We don't need a string of number because we can use the random function

// This is an array that holds a string of all the choices
// this array holds all the user selected characteristics
var passwordCharacteristics = [];

// Fill in strings at page load
fillSpecialCharacters();
fillLowercaseCharacters();

// Write password to the #password input
function writePassword() {
  // Get user input
  getUserPasswordGenerationChoices();

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

    // If there's more than one characteristic we should randomize
    if (passwordCharacteristics.length > 1) {
      var randNum = Math.floor(Math.random() * passwordCharacteristics.length);
    } else {
      randNum = 0;
    }

    // Now we need to decide what characters to choose from
    switch (passwordCharacteristics[randNum]) {
      case "number":
        nextCharacter = Math.floor(Math.random() * 10);
        break;
      case "UppercaseLetters":
        nextCharacter = upperCaseLetters.charAt(
          Math.floor(Math.random() * upperCaseLetters.length)
        );
        break;
      case "LowercaseLetters":
        nextCharacter = lowerCaseLetters.charAt(
          Math.floor(Math.random() * upperCaseLetters.length)
        );

        break;
      case "special":
        nextCharacter = specialCharacters.charAt(
          Math.floor(Math.random() * upperCaseLetters.length)
        );

        break;

      default:
        break;
    }

    // adds randomized character to our password
    generatedPassword += nextCharacter;
  }

  // return final result
  return generatedPassword;
}

// Prompts the use to give characteristics on the password they want
function getUserPasswordGenerationChoices() {
  // Clear the array
  passwordCharacteristics = [];

  // Ask for password length
  var lengthAnswer = prompt("Enter a number from 8 - 128");

  // parses a number out of lengthAnswer in base10
  lengthAnswer = parseInt(lengthAnswer, 10);
  console.log("Length Answer:" + lengthAnswer);

  // As we're accepting user input, we must do a series of checks for potential errors
  // This checks if lengthAnswer was succesfully parsed to INT
  if (typeof lengthAnswer === typeof 0) {
    // This checks if number is in the
    if (lengthAnswer < 8 || lengthAnswer > 128) {
      // Redo the questions as you've entered wrong input
      alert("CHOOSE A NUMBER FROM 8 - 128 |1");
      return getUserPasswordGenerationChoices();
    }
  } else {
    // Redo the questions as you've entered wrong input
    alert("CHOOSE A NUMBER FROM 8 - 128 |2");
    return getUserPasswordGenerationChoices();
  }
  // If we've made it to here, it's passed the length input requirements
  passwordLength = lengthAnswer;

  // Fill array with choosen characteristics
  if (confirm("Do you want your password to have 'numbers'?")) {
    passwordCharacteristics.push("number");
  }
  if (confirm("Do you want your password to have 'upper case' letters?")) {
    passwordCharacteristics.push("UppercaseLetters");
  }
  if (confirm("Do you want your password to have 'lower case' letters?")) {
    passwordCharacteristics.push("LowercaseLetters");
  }
  if (confirm("Do you want your password to have 'special' letters?")) {
    passwordCharacteristics.push("special");
  }

  // Recursive loop until the user has selected atleast 1 characteristic
  if (passwordCharacteristics.length < 1) {
    alert("YOU NEED TO SELECT ATLEAST 1 CHARACTERISTIC!");
    return getUserPasswordGenerationChoices();
  } else {
    // Print array to console
    console.log("Characteristics: " + passwordCharacteristics);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Using ascii key codes and loops so I don't have to manually enter special characters
function fillSpecialCharacters() {
  for (i = 33; i < 48; i++) {
    specialCharacters += String.fromCharCode(i);
  }

  for (i = 58; i < 65; i++) {
    specialCharacters += String.fromCharCode(i);
  }

  for (i = 91; i < 97; i++) {
    specialCharacters += String.fromCharCode(i);
  }
}

// converts our upper case chars to lower case.
function fillLowercaseCharacters() {
  lowerCaseLetters = upperCaseLetters.toLowerCase();
}

/*

    // generate ascii code from codes: 33 - 126
    // This range includes: numbers, letters and special characters
    if (
      useNumbers &&
      useUppercaseLetters &&
      useLowercaseLetters &&
      useSpecialChars
    ) {
      var asciiCode = Math.floor(Math.random() * (126 - 33) + 33);

      // Converts ascii number into desired character
      nextCharacter = String.fromCharCode(asciiCode);
      nextCharacter.toString();

*/
