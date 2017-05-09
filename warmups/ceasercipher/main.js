var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var currLetter = ""
var word = []

if ((newLetter >= 65 && newLetter <= 90) || (newLetter >= 97 && newLetter <= 122)) {
            //if z or Z transform to a or A respectively
            if (newLetter === 90 || newLetter === 122) newLetter -= 25;
            //else increase by one
            else newLetter += 1;
        }
for (var i = 0; i <= input.length; i++){
    currLetter = input.charAt(i);
    var newLetter = String.fromCharCode(currLetter.charCodeAt() + shift);
    if ((newLetter >= 65 && newLetter <= 90) || (newLetter >= 97 && newLetter <= 122)) {
            //if z or Z transform to a or A respectively
            if (newLetter === 90 || newLetter === 122) newLetter -= 25;
            //else increase by one
            else newLetter += 1;
        }
    console.log(newLetter)};