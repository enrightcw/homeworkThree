// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var passLength = Number(prompt("How many characters would you like your password to be?"));

  while (isNaN(passLength) || passLength < 8 || passLength > 128) passLength = Number(prompt("Choose a password length between 8 and 128. How many characters would you like your password to be?"));
  

  var upper = confirm("Would you like to use uppercase letters?");
  var lower = confirm("Would you like to use lowercase letters?");
  var number = confirm("Would you like to use numbers?");
  var symbol = confirm("Would you like to use special characters?");
  
  while (!upper && !lower && !number && !symbols) {
    alert("You must select at least one character type!");
    upper = confirm("Would you like to use uppercase letters?");
    lower = confirm("Would you like to use lowercase letters?");
    number = confirm("Would you like to use numbers?");
    symbol = confirm("Would you like to use special characters?");
  }

  var allowed = [];

  if (upper) {
    allowed += "QWERTYUIOPASDFGHJKLZXCVBNM";
  }
  if (lower) {
    allowed += "qwertyuiopasdfghjklzxcvbnm";
  }
  if (number) {
    allowed += "0123456789";
  }
  if (symbol) {
    allowed += "!@#$%^&*(){}[]=<>/,.";
  }

  for (let i = passLength; i < passLength; i++) { 
    password += characters.charAt(Math.floor(Math.random()*characters.length));
  }

  console.log(password);
  console.log(allowed);

  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
