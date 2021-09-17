var masterArray = []

var characters = [
{lower: 'qwertyuiopasdfghjklzxcvbnm'},
{upper: 'QWERTYUIOPASDFGHJKLZXCVBNM'},
{num: '0123456789'},
{sym: '~!@#$%^&*?_'}
]

var confirmLower = confirm("Do you want to include lowercase letters?")
  
var confirmUpper = confirm("Do you want to include UPPERcase letters?")
var confirmRandInt = confirm("Do you want to include numbers?")
var confirmRandSym = confirm("Do you want to include special characters?")
var length = prompt("Choose a password length between 8 and 128 characters")
  if (!length || length < 8 || length > 128 ) {
    alert("Please enter a valid number")
    length();
  }

function generatePassword() {
  for (var i = 0; i < length; i++) {
    writePassword();
  }
}


// // .....Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// ....Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// ....Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 




// .........begin functions
// var getPassLength = function() {
//     var passLength = prompt("Choose a password length between 8 and 128 characters.")
//       if (passLength === null || passLength === "") {
//       alert("Please provide a valid number")
//       return getLength();
// } // make entry a number
//     passLength = parseInt(passLength);
//       if (passLength < 8 || passLength > 128 ) {
//       alert("Please provide a valid number")
//      
// }
//       for (var i = 0; i < passLength; i++) {
//       console.log(passLength);
// }
// }

// var getRandLower = function() {
//     return lowerArr[Math.floor(Math.random()*lowerArr.length)]
// }

