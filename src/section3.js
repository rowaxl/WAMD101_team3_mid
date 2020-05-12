let inputBox = document.getElementById("ageInputBox");
let messageBox = document.getElementById("ageMessage");

function displayMessage () {
    let age = parseInt(inputBox.value);
    if (age <= 20) {
        messageBox.innerHTML="You need to study hard";
    } 
    else if (age <= 30) {
        messageBox.innerHTML="Study more";
    }
    else if (age <= 40) {
        messageBox.innerHTML="Make a lot of money";
    }
    else if (age <= 50) {
        messageBox.innerHTML="Be successful";
    }
    else {
        messageBox.innerHTML="Travel a lot";
    }
}
