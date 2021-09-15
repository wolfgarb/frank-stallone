// Assignment code here
// array for special characters to choose from in a function
var symbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]


var getRandomLower = function() {
  // confirm if they want to include lowercase letters
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

var getRandomUpper = function() {
  // confirm if they want to include uppercase letters
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

var getRandomNumber = function() {
  //confirm if they want to inclue numbers
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}






// .....Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// ....Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// ....Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
