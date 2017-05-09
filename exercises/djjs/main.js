var square = document.getElementById("square");
var body = document.getElementById("page");

square.addEventListener("mouseenter", function () {
    square.style.backgroundColor = "blue";
});

square.addEventListener("mouseleave", function () {
    square.style.backgroundColor = "white";
});

square.addEventListener("mousedown", function () {
    square.style.backgroundColor = "red";
});

square.addEventListener("mouseup", function () {
    square.style.backgroundColor = "yellow";
});

square.addEventListener("dblclick", function () {
    square.style.backgroundColor = "green";
});

body.addEventListener("wheel", function () {
    square.style.backgroundColor = "orange";
});

function blue(event) {
    var x = event.which || event.keyCode; // event.keyCode is used for IE8 and earlier
    if (x == 66) { // 27 is the ESC key
        document.getElementById("square").style.backgroundColor = "blue";
    }
}

function green(event) {
    var x = event.which || event.keyCode; // event.keyCode is used for IE8 and earlier
    if (x == 71) { // 27 is the ESC key
        document.getElementById("square").style.backgroundColor = "green";
    }
}

function yellow(event) {
    var x = event.which || event.keyCode; // event.keyCode is used for IE8 and earlier
    if (x == 89) { // 27 is the ESC key
        document.getElementById("square").style.backgroundColor = "yellow";
    }
}

function red(event) {
    var x = event.which || event.keyCode; // event.keyCode is used for IE8 and earlier
    if (x == 82) { // 27 is the ESC key
        document.getElementById("square").style.backgroundColor = "red";
    }
}

function orange(event) {
    var x = event.which || event.keyCode; // event.keyCode is used for IE8 and earlier
    if (x == 79) { // 27 is the ESC key
        document.getElementById("square").style.backgroundColor = "orange";
    }
}
