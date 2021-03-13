//DOM elements
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const upperCaseEl = document.getElementById('upperCase');
const loweCaseEl = document.getElementById('loweCase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
//const clipboardEl = document.getElementById('clipboard');

//Generator function
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// console.log(getRandomLower());
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper());
function getRandomNumb(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymb(){
  const syms = '!@#$%^&*(){}[]=<>/,.';
  return syms[Math.floor(Math.random() * syms.length)];
}
//Combine to 1 random function
const randomfunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumb,
  symbols: getRandomSymb
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);