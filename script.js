var lengthThangs = function() {
    var promptLength = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));
    // validate prompt Length answer
    if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128) {
        window.alert("You need to provide a valid answer! Please try again.");
        // use return to call it again and stop the rest of this function from running
        return lengthThangs();
    }
    return promptLength;
}

var letterThangs = function() {
    //evaluate letter type

    var letterType = prompt("Enter a which character types: special, numeric, uppercase, lowercase, All");
    letterType.toLowerCase();
    if (letterType === "lowercase") {
        return "abcdefghijklmnopqrstuvwxyz";
    } else if (letterType === "uppercase") {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (letterType === "numeric") {
        return "0123456789";
    } else if (letterType === "special") {
        return " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } else if (letterType === "all") {
        return " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }
    // validate letter type prompt answer
    else if (letterType === "" || letterType === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        // use return to call it again and stop the rest of this function from running
        return letterThangs();

    }
}

//generate password 
function generatePassword() {
    //evaluate character type
    letterSet = letterThangs();
    // compare to each letter sets 
    lengthNum = lengthThangs();

    //return value
    var returnVal = "";
    for (var i = 0; i < lengthNum; i++) {
        //picks a character within letterSet at index of random number
        returnVal += letterSet.charAt(Math.floor(Math.random() * letterSet.length));
    }
    return returnVal;

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