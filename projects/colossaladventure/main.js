var ask = require("readline-sync");
console.log("Welcome USER, lets play a game... \n")
var playerName = ask.question("What is your name? : ")
var walkKey = ask.question("\n Thank you " + playerName + ". Now you have the ability to walk around. \n Press the key you would like to you to walk. \n We recommend the 'W' key : ")

var interactOne = ask.question("\n Now lets go for a walk. \n Also for your information, there are enemies hidden in this jungle. \n YOU MAY ENCOUNTER THEM! \n Go ahead and press your walk key : ")

if (interactOne == walkKey) {
    ask.question("\n Awesome! That was a test. Press it again to actually walk : ")
} else {
    ask.question("\n That doesnt seem to be your walk key. \n Your current walk key is " + walkKey + ". \n Try pressing that key to walk : ")
}

var interactTwo = ask.question("\n Awesome You've got the hang of it... \n Now lets really get started. Press your walk key : ")
var player = {
    name: playerName,
    health: 50,
    inventory: [],
    alive: true,
}
var runChance = Math.floor((Math.random() * 2) + 1);
var enemies = [
                emptyMonster = {
        name: "Oops u broke the game",
                },
                treeMonster = {
        name: "Tree Ghoul",
        loot: ["dank", "Stick", "Tree knife", "Bark"],
        health: 14,
        damageMlt: 2
                },
                giantBee = {
        name: "Giant Bee",
        loot: ["dank", "Stinger", "Bee Wing", "Bee's Wax"],
        health: 4,
        damageMlt: 1,
                },
                elderSpirit = {
        name: "Elder Spirit",
        loot: ["dank", "Ectoplasm", "Spirit in a bottle", "Damned Soul"],
        health: 9,
        damageMlt: 8,
                },
            ]
var fight = function () {
    var enemies = [
                emptyMonster = {
            name: "Oops u broke the game",
                },
                treeMonster = {
            name: "Tree Ghoul",
            loot: ["dank", "Stick", "Tree knife", "Bark"],
            health: 14,
            damageMlt: 2
                },
                giantBee = {
            name: "Giant Bee",
            loot: ["dank", "Stinger", "Bee Wing", "Bee's Wax"],
            health: 4,
            damageMlt: 1,
                },
                elderSpirit = {
            name: "Elder Spirit",
            loot: ["dank", "Ectoplasm", "Spirit in a bottle", "Damned Soul"],
            health: 9,
            damageMlt: 8,
                },
            ]
    var whatEnemy = Math.floor((Math.random() * 3) + 1);
    var enemy = Math.floor((Math.random() * 4) + 1);
    var currEnemy = enemies[whatEnemy]
    var damage = Math.floor((Math.random() * 10) + 1);
    var currEnemyHealth = (enemies - damage);
    var playerDmgTaken = ((Math.floor((Math.random() * 5) + 1)) * (currEnemy.damageMlt));
    var currPlayerHealth = (player.health - playerDmgTaken);
    var randomItem = currEnemy.loot[Math.floor((Math.random() * 3) + 1)]
    console.log("\n Oh no a " + currEnemy.name + " has appeared!")
    console.log("\n Enemies can attack you and hurt you. If you kill an enemy they drop cool items!")
    var choice = ask.question("\n You can fight the enemy, or run. Type F to fight or R to Run : ")
    var enemyHealth = currEnemy.health;
    var playerHealth = player.health;
    //once the enemy is killed it plays this
    if (player.health <= 0) {
        console.log(player.name + " has died of dysentery!");
        player.alive = false;
    } else if (currEnemyHealth <= 0) {
        currEnemyHealth = 0;
        var continueStory = ask.question("You killed the " + currEnemy.name + " and received " + randomItem + "! \n Check your inventory by inputing 'print' Or use 'w' to keep walking : ")
        player.inventory.push(randomItem)
        if (continueStory == "print") {
            console.log("\n Player Name: " + player.name + "\n Health: " + player.health + "\n Inventory: " + player.inventory + "\n");
            var keepWalking = ask.question("\n You are safe, check your inventory with 'print', Or keep walking with 'w' : ")
            if (keepWalking == "w") {
                walkNow();
            } else if (keepWalking == "print") {
                console.log("\n Player Name: " + player.name + "\n Health: " + player.health + "\n Inventory: " + player.inventory + "\n");
                var keepWalking = ask.question("\n You are safe, check your inventory with 'print', Or keep walking with 'w' : ")
            } else {
                console.log("that isnt an option, please try again.")
            }
        } else if (continueStory == "w") {
            walkNow();
        }


    } else {
        console.log("You attacked the " + currEnemy.name + " for " + damage + " leaving them with " + currEnemyHealth + " Health."),
            console.log("You took " + playerDmgTaken + " and have " + currPlayerHealth + " Health left.")
        var cont = ask.question("\n To Keep attacking press F. To run, press R : ");
        if (cont == "r") {
            runAway();
        }
        if (player.health <= 0) {
            console.log(player.name + " has died of dysentery!");
            player.alive = false;

            function endGame() {
                return;
            }
        }
        if (cont == "f") {
            enemyHealth = currEnemyHealth;
            player.health = currPlayerHealth;
            playerHealth = currPlayerHealth;

            fight();
        } else if (cont == "r") {
            runAway();
        }
    }

}

function runAway() {
    console.log(runChance)
    if (runChance == 1) {
        console.log("\n You cant run fool!");
        fight();
        return;
    } else {
        console.log("\n You ran away safely!");
        walkNow();
        return;
    }
}
if (interactTwo == walkKey) {
    var walkKeyTwo = walkKey
    var interaction = interactTwo
    var enemy = Math.floor((Math.random() * 4) + 1);
    console.log(enemy)
    //    this is the part where i have the enemy interaction. If it doesnt equal 1 then it reloops to walk again.
    var walkNow = function () {
        if (interaction == walkKeyTwo) {
            var whatEnemy = Math.floor((Math.random() * 3) + 1);
            var enemy = Math.floor((Math.random() * 4) + 1);
            // these are the list of enemies and you can pull data from these as an object.
            if (enemy == 1) {
                console.log(player.name + " has " + player.health + " Health")
                var enemies = [
                emptyMonster = {
                        name: "Oops u broke the game",
                },
                treeMonster = {
                        name: "Tree Ghoul",
                        loot: ["dank", "Stick", "Tree knife", "Bark"],
                        health: 14,
                        damageMlt: 2
                },
                giantBee = {
                        name: "Giant Bee",
                        loot: ["dank", "Stinger", "Bee Wing", "Bee's Wax"],
                        health: 4,
                        damageMlt: 1,
                },
                elderSpirit = {
                        name: "Elder Spirit",
                        loot: ["dank", "Ectoplasm", "Spirit in a bottle", "Damned Soul"],
                        health: 9,
                        damageMlt: 8,
                },
            ]
                var currEnemy = enemies[whatEnemy]
                console.log("\n Oh no a " + currEnemy.name + " has appeared!")
                console.log("\n Enemies can attack you and hurt you. If you kill an enemy they drop cool items!")
                var choice = ask.question("\n You can fight the enemy, or run. Type F to fight or R to Run : ")
                var enemyHealth = currEnemy.health;
                var playerHealth = player.health;
                //fighting area.
                if (choice == "f") {

                    fight();
                } else if (choice == "r") {
                    runAway();
                }
            } else {
                //keep walking till encounters an enemy
                var keepWalking = ask.question("\n You are safe, check your inventory with 'print', Or keep walking with 'w' : ")

                if (keepWalking == "print") {
                    console.log("\n Player Name: " + player.name + "\n Health: " + player.health + "\n Inventory: " + player.inventory + "\n");
                    var keepWalking = ask.question("\n You are safe, check your inventory with 'print', Or keep walking with 'w' : ")
                    if (keepWalking == walkKey) {
                        walkNow();
                    }
                } else {
                    var enemy = Math.floor((Math.random() * 4) + 1);
                    walkNow();
                }
            }
            //            if they are too special to play the game then this plays
        } else {
            console.log("Nevermind you dont have the hang of this... Please restart the game you pleb.")
        }
    }
    walkNow();
}
