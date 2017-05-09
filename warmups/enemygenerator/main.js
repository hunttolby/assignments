var enemies = [];
var type = ["dank","Ancient Dragon", "Prowler", "Mighty Grunt"]
var enemy = {
    type: "",
    health: "",
    defense: "",
}
function createEnemy() {
    var randomNum = (Math.floor(Math.random()* 3)+1);
    var enemyType = type[randomNum];
    enemy.type = enemyType;
    if (enemyType == "Ancient Dragon") {
        var randomHealthAD = Math.floor(Math.random() * 21) + 80;
        enemy.health = randomHealthAD;
        enemy.defense = (parseInt(enemy.health) * 3)
    } else if (enemyType == "Prowler") {
        var randomHealthP = Math.floor(Math.random() * 30) + 50;
        enemy.health = randomHealthP;
        enemy.defense = (parseInt(enemy.health) * 3)
    } else if (enemyType == "Mighty Grunt") {
        var randomHealthMG = Math.floor(Math.random() * 29) + 20;
        enemy.health = randomHealthMG;
        enemy.defense = (parseInt(enemy.health) * 3)
    }
    
}

createEnemy();
console.log("Enemy Type : " + enemy.type + "\n Health : " + enemy.health + "\n Defense : "+enemy.defense);


