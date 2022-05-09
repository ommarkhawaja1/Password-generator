// Assignment code here
// var randomIndex = function (min,max) {
  // fix this, this is copied from Robot Gladiators
  // generate a random number, and round it down
  // var value = Math.floor(math.random() * (max - min) + min);
  // return that value so we can use it
  // return value;
// }

// var randomNumber = function(min, max) {
  // var value = Math.floor(Math.random() * (max - min + 1) + min);

  // return value;
// };

var generateBtn = document.querySelector("#generate");
// const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numb = "0123456789";
// const symbols = "!@#$%^&*_-+="

function generatePassword () {
generateBtn.addEventListener("click", writePassword);
var promptNumber = window.prompt("How many characters long would you like your password to be? Note: must be between 8-128 characters")
promptNumber = parseInt(promptNumber);
if (promptNumber < 8 || promptNumber > 128) {
  window.alert("Your password cannot be that length")
  writePassword();
} else if (promptNumber >= 8 && promptNumber <= 128 ) {
  chooseCharacters();
} else {
  window.alert ("You need to enter a number between 8 and 128. Try again.")
  writePassword();
}



}



// var abc = ["a", "b", "c"]
// var upperTrue = false;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// var chooseCharacters = fucntion () {
//   var charactersArray = [];

//   var promptChooseLowercase = window.confirm("Would you like to use lowercase letters in your password?");
//   if (promptChooseLowercase) {
//     charactersArray.push(lowercaseArray);
//   } else {
//   };

// var promptChooseUppercase = window.confirm("Would you like to use uppercase letters in your password?");
//   if (promptChooseUppercase) [
//     charactersArray.concat(uppercaseArray);
//   ] else {
// };

// var promptChooseSymbols = window.confirm("Would you like to use symbols in your password?");
//   if (promptChooseSymbols) [
//     charactersArray.concat(symbolsArray);
//   ] else {
// };
// console.log(charactersArray)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// click button (will call a function that will trigger a diaglog box)
// dialog box that asks how many characters would you like your password to contain
// input number > 8 characters (click ok will capture value in a variable, but before you continue
// on, you must check if variable is >=8 or less than 8, otherwise alert them will they will go back to the beginning)
// dialog box that says click ok to confirm including special characters (confirmation will return true/false)
// dialog box that says click ok to confirm inclduing numberic characters (confirmation will return true/false)
// dialog box that says click ok to confirm including lowercase letters (confirmation will return true/false)
// dialog box that says click ok to confirm including uppercase characters (confirmation will return true/false)
// will need to pull from an array of special, numeric, lowercase, and uppercase letters. 
// will need to pull from specific arrays, such as uppercase and lowercase only. then will need to pull contents 
// of those 2 arrays and put them together in 1 array and then randomly loop through that array until you reach the desired character count
// will need to utilize array.join (array to string), array.split (string to an array), map.random

// var string = 'abracadabra';
// string.split ('');
// var array = ['2' 'a', '3', 'g']
// array,join('');
var charactersNestedArray = [["a", "b"]]
const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numb = "0123456789";
const symbols = "!@#$%^&*_-+="

for(var i =0; i<abc.length; i++) {

}