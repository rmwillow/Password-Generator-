//Prompts how many letters and what letter type

var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 35"));

//ask for character type
var letterType = prompt("Enter a which character types: special, numeric, uppercase, lowercase.");

//generate password 
function generatePassword() {
    //evaluate character type
    // compare to each letter sets 

    var letterSet = "";
    var charTypeLower = letterType.toLowerCase();
    if (letterTypeLower === "lowercase") {
        letterSet = "abcdefghijklmnopqrstuvwxyz";
    } else if (letterTypeLower === "uppercase") {
        letterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (letterTypeLower === "numeric") {
        letterSet = "0123456789";
    } else if (letterTypeLower === "special") {
        letterSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);