// Global variables that contain our arrays
var generateBtn = document.querySelector("#generate");
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];
var charactersArray = [];
var newPassword = [];

function generatePassword() {
  generateBtn.addEventListener("click", writePassword);
  var promptNumber = window.prompt("How many characters long would you like your password to be? Note: must be between 8-128 characters")
  promptNumber = parseInt(promptNumber);
  if (promptNumber < 8 || promptNumber > 128) {
    window.alert("Your password cannot be that length")
    writePassword();
  } else if (promptNumber >= 8 && promptNumber <= 128) {
    chooseCharacters();
  } else {
    window.alert("You need to enter a number between 8 and 128. Try again.")
    writePassword();
  }
  // the while loop will keep running until we reach our desired character length
  while (newPassword.length < promptNumber) {
    // gets an index of a random character from the characters array
    var index = Math.floor(Math.random() * charactersArray.length);
    // take our newPassword which is originally empty, and combine the characters together to make a new newPassword
    newPassword = newPassword.concat(charactersArray[index]);
  }
  // This will take our password which is now an array, and turn it into a string
  newPassword = newPassword.join('');
  return newPassword;
};

// This will call the functions listed below
function chooseCharacters() {
  promptChooseLowercase();
  promptChooseUppercase();
  promptChooseNumber();
  promptChooseSymbols();
};

function promptChooseLowercase() {
  var promptChooseLowercase = window.confirm("Would you like to use lowercase letters in your password?");
  if (promptChooseLowercase) {
    charactersArray = charactersArray.concat(lowercaseCharacters);
    console.log(charactersArray);
  } else {
  }
};

function promptChooseUppercase() {
  var promptChooseUppercase = window.confirm("Would you like to use uppercase letters in your password?");
  if (promptChooseUppercase) {
    charactersArray = charactersArray.concat(uppercaseCharacters);
    console.log(charactersArray);
  } else {
  }
};

function promptChooseNumber() {
  var promptChooseNumber = window.confirm("Would you like to use numbers in your password?");
  if (promptChooseNumber) {
    charactersArray = charactersArray.concat(number);
    console.log(charactersArray);
  } else {
  }
};

function promptChooseSymbols() {
  var promptChooseSymbols = window.confirm("Would you like to use symbols in your password?");
  if (promptChooseSymbols) {
    charactersArray = charactersArray.concat(symbols);
    console.log(charactersArray);
  } else {
  }
};

// reset our variables at the end of the function 
function reset() {
  newPassword = [];
  charactersArray = [];
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  reset();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
