var buttonAdd = document.getElementById("add");
var buttonSub = document.getElementById("sub");
var buttonMult = document.getElementById("mult");
var buttonDivide = document.getElementById("divide");
var inputOne = document.getElementById("inputOne").value;
var inputTwo = document.getElementById("inputTwo").value;
var answer = document.getElementById("answer");

buttonAdd.addEventListener("click", function() {
    var addAnswer = parseInt(document.getElementById("inputOne").value) + parseInt(document.getElementById("inputTwo").value)
    document.getElementById("answer").innerHTML = addAnswer;
});

buttonSub.addEventListener("click", function() {
    var subAnswer = parseInt(document.getElementById("inputOne").value) - parseInt(document.getElementById("inputTwo").value)
    document.getElementById("answer").innerHTML = subAnswer;
});

buttonMult.addEventListener("click", function() {
    var multAnswer = parseInt(document.getElementById("inputOne").value) * parseInt(document.getElementById("inputTwo").value)
    document.getElementById("answer").innerHTML = multAnswer;
});

buttonDivide.addEventListener("click", function() {
    var divideAnswer = parseInt(document.getElementById("inputOne").value) / parseInt(document.getElementById("inputTwo").value)
    document.getElementById("answer").innerHTML = divideAnswer;
});