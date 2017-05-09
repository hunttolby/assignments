var numberOne = 22
var numberTwo = 27

if (numberOne > numberTwo) {
    console.log(numberOne)
} else {
    console.log(numberTwo)
}





var monkeyA = "Not Smiling"
var monkeyB = "Smiling"

if (monkeyA == monkeyB) {
    console.log("We are in trouble")
} else {
    console.log("We are not in trouble")
}

var d = new Date();


var time = d.getHours();



if (time <= 6) {
    console.log("Good Night");
} else
if (time < 12) {
    console.log("Good Morning");
} else if (time < 20) {
    console.log("Good Afternoon");
    var monkeyA = "Smiling"
} else if (time > 20) {
    console.log("Good Night");
    var monkeyB = "Not Smiling"
}
console.log(d)
