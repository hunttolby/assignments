var newInput = []

function antiCaps(input) {
    input.split();
    for (var i = 0; i <= input.length; i++) {
        var letter = input[i];
        console.log(letter)

        function isCaps(letter) {
            return letter === letter.toUpperCase();
        }

        if (isCaps === true) {
             newInput.push(letter.toLowerCase());
        } else {
            newInput.push(letter.toUpperCase());
        }
        newInput.toString();
        console.log(newInput);
    }

}


antiCaps("ChInKeRInOtInO");
