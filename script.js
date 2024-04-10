// Variable assignment
const passwordBox = document.getElementById("passcode");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const sym = '!@#$%^&*()-_+=[]{};:\'",.<>?/|\\`';
const allChars = upperCase + lowerCase + num + sym;
let storage = [];

// Function to generate random character
function generation() {

    let value = "";
    const arr = [upperCase, lowerCase, num, sym];
    for (const i of arr) {
        value += i[Math.floor(Math.random() * i.length)];
    }
    return value;
}

// Function to generate password using while loop
function createPasswordWhileLoop() {
    const passLeng = document.getElementById("passcodeLength").value;
    if (passLeng >= 8 && passLeng <= 18) {
        let password = generation(); // Generate initial password
        while (password.length < passLeng) { // While the password length is less than desired length
            password += allChars[Math.floor(Math.random() * allChars.length)]; // Add a random character from allChars
        }
        passwordBox.value = password; // Set the generated password in the input field
    } else {
        alert("Please enter your desired password length between 8 and 18.");
    }
    
}


// Function to copy passcode
function copyPasscode() {
    // Select the input field
    const inputField = document.getElementById("passcode");
    const textareaField = document.getElementById("passcodeCopies")
    const arr = [];
    // Set the selection range to the entire content of the input field
    inputField.select();
    
    // Copy the selected text to the clipboard
    document.execCommand("copy");

    let currentValue = textareaField.value;

    // Get the text from the input field
    const textToCopy = inputField.value;



    if (textToCopy) {
        
        if (storage.includes(textToCopy)) {
            alert("Current passcode is generated earlier.");
        } else {

            currentValue += textToCopy + "\n";

        // Set the updated value to the textarea
            textareaField.value = currentValue;

            // Select the input field to focus it
            inputField.focus();

            storage.push(textToCopy);


        }
        
    } else {
        alert("No passcode is generated yet.");
    }

    
}

