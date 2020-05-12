let firstNumBox = document.getElementById("firstNum");
let secondNumBox = document.getElementById("secondNum");
let answerBox = document.getElementById("answerBox");

function plus() {
    let firstNum = parseInt(firstNumBox.value);
    let secondNum = parseInt(secondNumBox.value);
    let answer = firstNum + secondNum;

    answerBox.innerHTML = answer
}

function minus() {
    let firstNum = parseInt(firstNumBox.value);
    let secondNum = parseInt(secondNumBox.value);
    let answer = firstNum - secondNum;

    answerBox.innerHTML = answer
}

function multiply() {
    let firstNum = parseInt(firstNumBox.value);
    let secondNum = parseInt(secondNumBox.value);
    let answer = firstNum * secondNum;

    answerBox.innerHTML = answer
}

function divide() {
    let firstNum = parseInt(firstNumBox.value);
    let secondNum = parseInt(secondNumBox.value);
    let answer = firstNum / secondNum;

    answerBox.innerHTML = answer
}
