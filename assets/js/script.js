// Assignment code here
// array for special characters to choose from in a function
var symbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]


var getRandLower = function() {
  // confirm if they want to include lowercase letters
  var confirmLower = confirm("Do you want to include lowercase letters?")
  if (confirmLower) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  else {
    return false
  }
}
  // if (confirmLower === "" || confirmLower === null) {
  // return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  // }

var getRandUpper = function() {
  // confirm if they want to include uppercase letters
  var confirmUpper = confirm("Do you want to include UPPERcase letters?")
  if (confirmUpper) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  else {
    return false
  }
}

var getRandInt = function() {
  //confirm if they want to inclue numbers
  var confirmRandInt = confirm("Do you want to include numbers?")
  if (confirmRandInt) {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  else {
    return false
  }
}

var getRandChar = function() {
  var confirmRandChar = confirm("Do you want to include special characters?")
  if (confirmRandChar) {
    return symbolsArray[Math.floor(Math.random()*symbolsArray.length)];
  }
}






// var generatePassword = function() {
//   document.querySelector(getRandomLower);
//   console.log(generatePassword)
// }

// .....Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// ....Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

console.log(getRandLower());
console.log(getRandUpper());
console.log(getRandInt());
console.log(getRandChar());

// ....Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
