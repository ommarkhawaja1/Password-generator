// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var abc = ["a", "b", "c"]
var upperTrue = false;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

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