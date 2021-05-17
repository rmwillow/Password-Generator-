//prompts how many character should they want and validates number entered in stores it in var length
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("How many characters would you like your password to be? Length must be between 8 & 128 characters"));

//prompts what type of characters they would like 
var upperCase = confirm("Would you like to use uppercase letters?");
var lowerCase = confirm("Would you like to use lowercase letters?");
var numeric = confirm("Would you like to use numeric?");
var special = confirm("Would you like to use special characters?");


//if not any below it will not use the character
while (!upperCase && !lowerCase && !numeric && !special) {
    alert("You must select at least one character type!");
    upperCase = confirm("Would you like to use uppercase letters?");
    lowerCase = confirm("Would you like to use lowercase letters?");
    numeric = confirm("Would you like to use numeric?");
    special = confirm("Would you like to use special characters?");
};
//generates password using rando link below
//https://randojs.com/

function generatePassword() {
    var password = "";
    var allowed = {};
    if (upperCase) password += rando(allowed.upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (lowerCase) password += rando(allowed.lowerCase = "abcdefghijklmnopqrstuvwxyz");
    if (numeric) password += rando(allowed.numeric = "0123456789");
    if (special) password += rando(allowed.special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~");


    for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

    document.getElementById("password").value = randoSequence(password).join("");
}