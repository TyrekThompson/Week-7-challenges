// set up a function named it calc 

function calc() {
    var number1 = parseFloat(document.getElementById("num1").value)
    var number2 = parseFloat(document.getElementById("num2").value)

var op = document.getElementById("ope").value

//inout operator +,-,*,/
if (op === "+") {
    document.getElementById('result').value = number1 + number2;
}
if (op === "-") {
    document.getElementById('result').value = number1 - number2;

}
if (op === "/") {
    document.getElementById('result').value = number1 / number2;

}
if (op === "*") {
    document.getElementById('result').value = number1 * number2;

}

}