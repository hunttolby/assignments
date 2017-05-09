function sum(a, b) {
    var answer = (a + b)
    console.log(answer + "This is the answer for function 1")
}

sum(9, 8)

function largestNum(a, b, c) {
    console.log(Math.max(a, b, c))
}

largestNum(10, 24, 16)

function evenOdd(a) {
    if (a % 2 == 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}

evenOdd(14)

function strLength(input) {
    input.split("")
    console.log(input.length)
    if (input.length <= 20) {
        input.concat(input)
        console.log(input)
    } else {
        var newLength = (input.length - (input.length / 2))
        input.slice(0, newLength)
        input.toString
        console.log(input)
        }
    }
strLength("Hello my name is allah jew hack ur computerbar")
