var space = " "
var readlineSync = require("readline-sync");
var firstName = readlineSync.question("What is your first name? : ");
console.log("Hello, " + firstName.toUpperCase() + ".");
var lastName = readlineSync.question("Now may i have your last name? : ");
console.log("Thank you very much Mr. " + firstName + " " + lastName);
var age = readlineSync.question("\n I am 12.39 Million Years Old. How old are you? : ");
console.log("Wow! You are so young at only " + age + " years old!");
var life = readlineSync.question("\n Now please tell me your favorite movie and the year it was released! : ");
var lifeSliced = life.slice(-(life.length / 2))
console.log("Wow that is such a great movie! \n Sadly my memory has failed and I only remember this much... :  " + lifeSliced)
var attemptFix = readlineSync.question("\n Shall I attempt to fix my memory? Write Yes/No : ")
if (attemptFix == "Yes") {
    var fixedMem = readlineSync.question("\n SUCCESS! I have fixed my memory issues, with that being said, the last statement you gave me, I shall reproduce. At what character shall I start? : ")
    console.log("\n" + life.substring(fixedMem, life.length))
} else {
    console.log("Thank you. Have a nice day!");
}
var d = new Date()
var n = d.getDay()
if (n == 0){
    n = "Sunday";
} else if (n == 1) {
    n = "Monday";
} else if ( n == 2) {
    n = "Tuesday"
} else if (n == 3) {
    n = "Wednesday";
} else if ( n == 4) {
    n = "Thursday"
} else if (n == 5) {
    n = "Friday";
} else if ( n == 6) {
    n = "Saturday"
} else {
    n = "Day"
}
console.log("Awesome! Thank you " + firstName.concat(space, lastName)+ " for your participation. I hope you have a wonderful " + n + "!")