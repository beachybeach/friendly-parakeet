// Assignment code here
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let chosenChars = [];
var passwordText = document.querySelector("#password");
let finalPass = [];

const generatePassword = () => {
  getPassLength();
}

const getPassLength = () => {
  let passLength = window.prompt("How many characters would you like your password to be? Please type a number between 8 and 129")
  if (passLength >= 8 && passLength < 129) {
    getCharacterChoices(passLength);
  } else {
    window.alert("Please enter a number between 8 and 129");
    return generatePassword();
  }
}

const getCharacterChoices = (passLength) => {
  let specialAnswer = window.confirm("Would you like to use special characters? Please click OK for YES or CANCEL for NO");
  if (specialAnswer === true) {
    chosenChars = chosenChars.concat(specialCharacters);
  }
  let numberAnswer = window.confirm("Would you like to use numbers? Please click OK for YES or CANCEL for NO");
  if (numberAnswer === true) {
    chosenChars = chosenChars.concat(numericCharacters);
  }
  let upperAnswer = window.confirm("Would you like to use lowercase letters? Please click OK for YES or CANCEL for NO");
  if (upperAnswer === true) {
    chosenChars = chosenChars.concat(upperCasedCharacters);
  }
  let lowerAnswer = window.confirm("Would you like to use uppercase letters? Please click OK for YES or CANCEL for NO");
  if (lowerAnswer === true) {
    chosenChars = chosenChars.concat(lowerCasedCharacters);
  }

  else if (specialAnswer === false && numberAnswer === false && upperAnswer === false && lowerAnswer === false) {
    window.alert('Please select at least one character type');
    return getCharacterChoices();
  }
  for (i = 0; i < passLength; i++) {
    console.log(passLength);
    console.log(chosenChars);
    finalPass.push(chosenChars[Math.floor(Math.random() + chosenChars.length)]);
    console.log(finalPass);
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  window.alert("Welcome to the password generator!");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
