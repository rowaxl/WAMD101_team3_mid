function greeting () {
    let nameBox = document.getElementById("name_box");
    let inputName = nameBox.value;

    let outputBox = document.getElementById("greeting");
    outputBox.innerHTML = `Hi, ${inputName}, Welcome to this page`;
}