// created a function and set up 3 var 
// then set up the to show it in the documnet inner html 
function addSomething() {
    var num1 = 10 ;
    var num2 = 7;
    var num3 = num1 + num2;
    document.getElementById("add").innerHTML = num3;
}

function subtractSomething() {
    var num1 = 10 ;
    var num2 = 7;
    var num3 = num1 - num2;
    document.getElementById("subtract").innerHTML = num3;
}

function divideSomething() {
    var num1 = 16 ;
    var num2 = 4;
    var num3 = num1 / num2;
    document.getElementById("divide").innerHTML = num3;
}

function multiplySomething() {
    var num1 = 5;
    var num2 = 4;
    var num3 = num1 * num2;
    document.getElementById("multiply").innerHTML = num3;
}