var arr = ["apple", "bannana", "orange", "apple", "orange"];

var yesMan = [];

var noMan = [];

var array = "";

arr = arr.filter(function (item, index, inputArray) {
    array = (inputArray.indexOf(item) === index);

    if (array === true) {
        yesMan.push(arr[index]);
    } else {
        noMan.push(arr[index]);
    }
});


console.log(yesMan + " These are the good ones");
console.log(noMan + " These are the duplicates");
