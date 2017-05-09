var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";


for (var i = 0; i <= people.length; i++) {
    var curName = people[i]
    for (var j = 0; j <= alphabet.length; j++) {
        alphabet.split("")
        var curLetter = alphabet[j]
        if(j === alphabet.length) {
            console.log(curName)
        }
        console.log(curLetter)

    }

}
