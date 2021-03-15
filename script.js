// Assignment Code
// DOM elements
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const upperCaseEl = document.getElementById('upperCase');
const lowerCaseEl = document.getElementById('lowerCase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.querySelector("#generate");

//Combine to 1 random function
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumb,
  symbols: getRandomSymb
}
//Random functions
//Random Lowercase
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//Random Uppercase
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//Random number
function getRandomNumb(){
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//Random symbol
function getRandomSymb(){
  const syms = '!@#$%^&*(){}[]=<>/,.';
  return syms[Math.floor(Math.random() * syms.length)];
}

//function generate password
function generatePassword(lower, upper, number, symbols, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbols;
	const typesArr = [{upper}, {lower}, {number},
     {symbols}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0 && length < 8 || length	> 128 ){
		alert('WRONG LENGTH AND NO CHARACTER TYPE SELECTED');
		return 'Please select password type with right conditions';
	}else if(typesCount === 0) {
		alert('Please select character type');
		return 'Please select password type with right conditions';
	}else if(length < 8 || length	> 128){
		alert('WRONG LENGTH');
		return 'Please select password type with right conditions';
	}

	
	// create a loop random every index
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

// Write password to the #password input
function writePassword(e) {
  e.preventDefault()
  var passwordText = document.querySelector("#password");
  
  const length = +lengthEl.value;
	const hasLower = lowerCaseEl.checked;
	const hasUpper = upperCaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;
	const password = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
  passwordEl.innerText = password;

  passwordText.value = password;
  alert("Your password is generated!\n Your password is: " + passwordText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);