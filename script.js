// // Assignment Code
var generateBtn = document.querySelector("#generate");

// //Prompts and Confirms for function
function generatePassword () {
  var passwordlength = prompt("How many characters would you like your password to contain?");
  var specialCharacters = confirm("Click Ok to confirm including special characters.");
  var numericCharacters = confirm ("Click OK to confirm including numeric characters.");
  var lowerCase = confirm("Click OK to confirm including lower case characters.");
  var upperCase = confirm ("Click OK to confirm including upper case characters.");
  
  
  const passLength = parseFloat(passwordlength);
  const hasSpecial = specialCharacters.valueOf();
  const hasNumber = numericCharacters.valueOf();
  const hasLower = lowerCase.valueOf();
  const hasUpper = upperCase.valueOf();
  
  checkVariable(hasSpecial,hasNumber,hasLower,hasUpper); 

  function checkVariable(special,number,lower,upper) {
    let checkVariable = '';
    const typesCount = special + number + lower + upper; 
    const typesArr = [{special},{number},{lower},{upper}].filter 
    (  
      item => Object.values(item)[0]
    ); 

    if(typesCount===0) {
        return '';
    }

    for(var i = 0; i<passLength; i+=typesCount) {
      typesArr.forEach(type =>{
        const funcName = Object.keys(type)[0];
          
        checkVariable += randomFunc[funcName]();
      });
    }  
        const finalPassword = checkVariable.slice(0,passLength); 
        return finalPassword;
  }

  // var myArray = [];
//   var pass ="";

//  
//    myArray[i] = String.fromCharCode(Math.floor(Math.random()*26)+97);
//    console.log(myArray[i]);
//  }
// //   return console.log(pass);
}

//Functions for User's Critera
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSpecial() {
  return String.fromCharCode(Math.floor(Math.random()*15)+33);
}

//Consolidating functions in an object
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecial
};

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//math.floor, math.random, arrays... generate password function nees to be created... function should be returning password for passwordtext