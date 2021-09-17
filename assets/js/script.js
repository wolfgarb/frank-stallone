//.....Get references to the #generate element

// ....Write password to the #password input

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword); 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




function generatePassword() {

  var lower = "qwertyuiopasdfghjklzxcvbnm";
  var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var num = "0123456789";
  var sym = "~!@#$%^&*?_";
  var password = "";

  var passLength = prompt("Choose a password length between 8 and 128 characters", "0"); 
      passLength = parseInt(passLength);
      console.log(passLength)
      if (passLength >= 8 && passLength <= 128 ) {
        var confirmLower = confirm("Do you want to include lowercase letters?")
        var confirmUpper = confirm("Do you want to include UPPERcase letters?")
        var confirmNum = confirm("Do you want to include numbers?")
        var confirmSym = confirm("Do you want to include special characters?")

      for (i = 0; i < passLength; i++) {

        if (password.length < passLength) {
            if (confirmLower) {
          password += lower[Math.floor(Math.random() * lower.length)];
        }
            if (confirmUpper) {
          password += upper[Math.floor(Math.random() * upper.length)];
        }
            if (confirmNum) {
          password += num[Math.floor(Math.random() * num.length)];
        }
            if (confirmSym) {
          password += sym[Math.floor(Math.random() * sym.length)];
        }

      } else {
          break;
      }
    }
return password;

  }
else {
  alert("Please enter a valid number");
  return "Please try again";
}
}








