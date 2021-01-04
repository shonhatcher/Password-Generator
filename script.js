// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var passwordlength = prompt("How many characters would you like your password to contain?");
  var specialCharacters = confirm("Click Ok to confirm including special characters.");
  var numericCharacters = confirm ("Click OK to confirm including numeric characters.");
  var lowerCase = confirm("Click OK to confrim including lower case characters.");
  var upperCase = confirm ("Click OK to confirm upper case characters.");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//math.floor, math.random, arrays... generate password function nees to be created... function should be returning password for passwordtext