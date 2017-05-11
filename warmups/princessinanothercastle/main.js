var object = {
    name: "TacoBoy",
    totalCoins: 12,
    status: ["Powered Up", "Big", "Small", "Dead"],
    star: false,

}

function setName(namePicked) {
    object.name = namePicked;
};
var s = 0
var j = 0
function gotHit() {
    if (s < 3) {
        s++
        object.status[s];
    } else {
        console.log("dead");
    }
}

function gotPoweredUp() {
    if (s < 3) {
        s--
        object.status[s];
    } else {
        console.log("dead");
    }
}

var gameActive = true;
//if (status = status[3]) {
//    gameActive = false;
//}

function getRandomInt(min, max) {
    var j = Math.floor(Math.random() * (max - min + 1)) + min;
}

function addCoin(numOfCoins) {
    if (numOfCoins == "") {
        object.totalCoins++
    } else {
        object.totalCoins += numOfCoins
    }

}

function print() {
    console.log(object.name + "\n")
    console.log(object.status + "\n")
    console.log(object.totalCoins + " Coins\n")
}


setName("Luigi");
print();
getRandomInt(0, 2);
if (j == 0){
    gotHit();
} else if (j == 1) {
    gotPoweredUp();
} else if (j == 2) {
    addCoin();
}

print();
getRandomInt(0, 2);
if (j == 0){
    gotHit();
} else if (j == 1) {
    gotPoweredUp();
} else if (j == 2) {
    addCoin();
}

print();
getRandomInt(0, 2);
if (j == 0){
    gotHit();
} else if (j == 1) {
    gotPoweredUp();
} else if (j == 2) {
    addCoin();
}

print();
getRandomInt(0, 2);
if (j == 0){
    gotHit();
} else if (j == 1) {
    gotPoweredUp();
} else if (j == 2) {
    addCoin();
}
 print();
