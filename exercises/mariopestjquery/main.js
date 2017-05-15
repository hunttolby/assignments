function goombaPrices() {
    var goombas = $("#goombas").val();
    var price = 5
    var myResultOne = goombas * price
    resultOne.value = myResultOne;
}

function bobombPrices() {
    var bobombs = $("#bobombs").val();
    var price = 7
    var myResultTwo = bobombs * price
    resultTwo.value = myResultTwo;
}

function cheepPrices() {
    var cheeps = $("#cheeps").val();
    var price = 11
    var myResultThree = cheeps * price
    resultThree.value = myResultThree;
    }

function total() {
    var a = 0 + $("#resultOne").val() ;
    var b = 0 + $("#resultTwo").val();
    var c = 0 + $("#resultThree").val();
    var d = parseInt(a);
    var e = parseInt(b);
    var f = parseInt(c);
    var totalAmt = (d+e+f);
    winner.value = totalAmt;
    console.log(winner.value)
}



/* Look up information to check how to have it so when its NaN to say please input the rest of the information */


