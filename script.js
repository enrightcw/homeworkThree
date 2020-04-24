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
  var password = "";
  var passLength = Number(prompt("How many characters would you like your password to be?"));

  while (isNaN(passLength) || passLength < 8 || passLength > 128) passLength = Number(prompt("Choose a password length between 8 and 128. How many characters would you like your password to be?"));
  

  var upper = confirm("Would you like to use uppercase letters?");
  var lower = confirm("Would you like to use lowercase letters?");
  var number = confirm("Would you like to use numbers?");
  var symbol = confirm("Would you like to use special characters?");
  
  while (!upper && !lower && !number && !symbol) {
    alert("You must select at least one character type!");
    upper = confirm("Would you like to use uppercase letters?");
    lower = confirm("Would you like to use lowercase letters?");
    number = confirm("Would you like to use numbers?");
    symbol = confirm("Would you like to use special characters?");
  }

  //use .split here to make this actually work
  var allowed = [];
  var uppers = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var lowers = "qwertyuiopasdfghjklzxcvbnm";
  var numbers = "0123456789";
  var specials = "!@#$%^&*(){}[]=<>/,.";
  var count = 0;

  if (upper) {
    allowed += uppers;
    password += uppers.charAt(Math.floor(Math.random() * uppers.length));
    count++;
    console.log(password);
  }
  if (lower) {
    allowed += lowers;
    password += lowers.charAt(Math.floor(Math.random() * lowers.length));
    count++;
    console.log(password);
  }
  if (number) {
    allowed += numbers;
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    count++;
    console.log(password);
  }
  if (symbol) {
    allowed += specials;
    password += specials.charAt(Math.floor(Math.random() * specials.length));
    count++;
    console.log(password);
  }

  for (count; count < passLength; count++) { 
    password += allowed.charAt(Math.floor(Math.random()*allowed.length));
  }

  console.log(password);
  console.log(allowed);

  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
