var numArrayTwo = [4, 7, 90, 812, 1984, 3883, 42, 506, 738, 10]


function first(input) {
    for (var i = 0; i <= input.length; i++) {
        console.log(input[i])
    }
}

function second(inputTwo, letter) {
    for (var j = 0; j <= inputTwo.length; j++) {
        if (letter === inputTwo[j]) {
            var numberUno = j
            console.log(numberUno)
            return;
        }
    }
    console.log("No letter " + letter + " found!")
}


function third(inputThree) {
    for (var k = 0; k <= inputThree.length; k++) {
        if (inputThree[k] === 42) {
            console.log("We found the Number 42!")
            return;
        }
    }
    console.log("We could not find the number!")
}

numArrayTwo.min = function (numArrayTwo) {
    return Math.min.apply(Math, numArrayTwo);
};

var minimum = numArrayTwo.min(numArrayTwo);

console.log(minimum)

first("Hello i am a smart guy")
second("i dont even know how to do this", "o")
third([1, 2, 3, 4, 7, 8, 42, 57, 45])
fourth([])
