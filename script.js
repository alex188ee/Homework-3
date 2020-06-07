// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);


var lowerCaseChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var numericChar=["1","2","3","4","5","6","7","8","9","0"];
var specialChar=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];

var confirmLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmNumericChar;
var confirmSpecialChar;

function confirmPasswordDetails() {
  var confirmLength = (prompt("How many characters would you like your password to be (cannot be less than 8 or more than 128 characters)?"));
  
  while (confirmLength <= 8 >= 128) {
    
    alert("Password cannot be less than 8 or more than 128 characters. Please make a new selection.");
    
    var confirmLength = (prompt("How many characters would you like your password to be (cannot be less than 8 or more than 128 characters)?"));
  
  }

  var confirmLowerCase = confirm ("Would you like to include lower case characters in your password?");
  var confirmUpperCase = confirm ("Would you like to include upper case characters in your password?");
  var confirmNumericChar = confirm ("Would you like to include numbers in your password?");
  var confirmSpecialChar = confirm ("Would you like to include special characters in your password?");

    while (confirmLowerCase === false && confirmUpperCase === false && confirmNumericChar === false && confirmSpecialChar === false) {
      
      alert("You must choose at least one character type.")
      var confirmLowerCase = confirm ("Would you like to include lower case characters in your password?");
      var confirmUpperCase = confirm ("Would you like to include upper case characters in your password?");
      var confirmNumericChar = confirm ("Would you like to include numbers in your password?");
      var confirmSpecialChar = confirm ("Would you like to include special characters in your password?");

    }

var passwordCharacters = []

if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(lowerCaseChar)
}

if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(upperCaseChar)
}

if (confirmNumericChar) {
  passwordCharacters = passwordCharacters.concat(numericChar)
}

if (confirmSpecialChar) {
  passwordCharacters = passwordCharacters.concat(specialChar)
}

  console.log(passwordCharacters)

  var randomPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
    
  }

  return randomPassword;

}

// Write password to the #password input
function writePassword() {
  var password = confirmPasswordDetails();
  var passwordText = document.querySelector("randomPassword");

  passwordText.value = randomPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
