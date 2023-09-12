
const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789";
const symbol = "@.";
const allChar = upperCase + lowerCase + numbers + symbol;
let passwordGenerated = false;


function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];

    }
    passwordBox.value = password;
    passwordGenerated = true;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    let copydisplay = document.querySelector(".copydisplay");
    if (passwordGenerated) {
        copydisplay.innerHTML = "Password  Copied";
        // Clear the message after 2 seconds (2000 milliseconds)
        setTimeout(function () {
            copydisplay.innerHTML = "";
        }, 2000);
    } else {
        copydisplay.innerHTML = "Generate a password first";
    }
}