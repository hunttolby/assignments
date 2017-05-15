function party(name) {
    this.name = name;
    this.population = 1000000
    this.attack = [1,2]
}

var newTeamOne = new party("Communists")
var newTeamTwo = new party("Penguins")

var coinToss = (Math.floor(Math.random() * 10) + 1)

if (coinToss <= 5) {
    newTeamOne.attack = newTeamOne.attack[0]
    newTeamTwo.attack = newTeamTwo.attack[1]
} else {
    newTeamTwo.attack = newTeamTwo.attack[0]
    newTeamOne.attack = newTeamOne.attack[1]
}



if (newTeamOne.attack = 1) {
        party = newTeamTwo;
    } else {
        party = newTeamOne
    }


function onHit() {
    var ranDmg = (Math.floor(Math.random() * 1000000) + 1)
    return ranDmg;
}



function sendNuke(party, onHit, onMiss) {
    if (newTeamOne.attack = 1) {
        party = newTeamTwo;
    } else {
        party = newTeamOne
    }
    var hitChance = (Math.floor(Math.random() * 10) + 1)
    if (hitChance <= 5) {
        var dmgDone = onHit();
        party.population = (party.population - dmgDone);
        console.log(party.name + "WERE HIT FOR " + dmgDone)
        newTeamOne.attack.reverse();
        newTeamTwo.attack.reverse();
    } else {
        console.log(party.name + "was missed by the attack")
        newTeamOne.attack.reverse();
        newTeamTwo.attack.reverse();
    }
}






console.log(newTeamOne);
console.log(newTeamTwo);
