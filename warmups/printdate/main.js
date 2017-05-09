var d = new Date();
var day = d.getDay();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();
var time = (hours +":" + minutes + ":" + seconds + " Military Time")
if(day == 0) {
    day = "Sunday"
} else if (day == 1) {
    day = "Monday"
} else if (day == 2) {
    day = "Tuesday"
} else if (day == 3) {
    day = "Wednesday"
} else if (day == 4) {
    day = "Thursday"
} else if (day == 5) {
    day = "Friday"
} else if (day == 6) {
    day = "Saturday"
}

console.log("Today is " + day)
console.log("And the current time is " + time)

