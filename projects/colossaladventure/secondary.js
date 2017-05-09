var ask = require("readline-sync");
var weapons = ["blank", "Old Iron Sword", "Abyssal Staff", "Corrupting Wand", "Wind Bow", "Fruit Knife"]
var randomWeapon = (Math.floor(Math.random() * 5) + 1)
var runChance = Math.floor((Math.random() * 2) + 1);

var enemyEncounter = Math.floor((Math.random() * 3) + 1);
console.log("Welcome Adventurer!\n You have been asleep for the last 1200 years!\n It is time for you to slay the Elder Spirit! \n \n You should take this weapon for your journey.\n \n Received " + weapons[randomWeapon] + "!")
var name = ask.question("\n Now Adventurer, can you tell me your name? : ")
var whatEnemy = Math.floor((Math.random() * 4) + 1);



var enemies = [
                emptyMonster = {
        name: "Oops u broke the game",
                },
                treeMonster = {
        name: "Tree Ghoul",
        loot: ["dank", "Stick", "Tree knife", "Bark"],
        health: 24,
        damageMlt: 1
                },
                giantBee = {
        name: "Giant Bee",
        loot: ["dank", "Stinger", "Bee Wing", "Bee's Wax"],
        health: 6,
        damageMlt: 2,
                },
                elderSpirit = {
        name: "Elder Spirit",
        loot: ["dank", "Ectoplasm", "Spirit in a bottle", "Damned Soul"],
        health: 11,
        damageMlt: 8,
                },
            ];

var character = {
    name: name,
    health: 50,
    inventory: [],
};

var walk = function () {
    if (character.inventory.indexOf("Ectoplasm") > -1) {
        throw new Error("\nYOU HAVE DEFEATED THE ELDER SPIRIT!");
        throw new Error("CONGRATULATIONS! THANKS FOR PLAYING!");
        return;
    } else {
        //Not in the array

        enemyEncounter = Math.floor((Math.random() * 3) + 1);
        whatEnemy = Math.floor((Math.random() * 3) + 1);
        if (enemyEncounter == 3) {
            var currEnemy = enemies[whatEnemy];
            console.log("\n\nOh no! A " + currEnemy.name + " has appeared from the wilderness!");
            fight();
        }
        story = ask.question("\n \nYou are safe, for now. Press '" + walkKey + "' to walk, or 'print' for your inventory. : ");
        if (story == "w") {
            walk();
        } else if (story == "print") {
            print();
            console.log("\n \nNow back to adventuring...");
            walk();
        } else {
            console.log("itsbroke");
        }
    }
};

function print() {
    console.log("\nAdventurer : " + character.name + "\n Health : " + character.health + "\n Inventory : " + character.inventory);
};

var fight = function () {
    var currEnemy = enemies[whatEnemy];
    var randomItem = currEnemy.loot[Math.floor((Math.random() * 3) + 1)]
    var charHealth = character.health;
    var enemyHealth = currEnemy.health;
    var damage = Math.floor((Math.random() * 10) + 1);
    var enemyDamage = Math.floor((Math.random() * 10) + 1);
    var choice = ask.question("Press 'f' to Fight, or 'r' to Run.");
    if (choice == "f") {
        enemyHealth = (currEnemy.health - damage);
        currEnemy.health = enemyHealth;
        charHealth = (character.health - enemyDamage);
        character.health = charHealth;
        console.log("\nYou did " + damage + " damage to " + currEnemy.name + " leaving them with " + enemyHealth + " Health");
        console.log("\nYou took " + enemyDamage + " damage leaving you with " + charHealth + " Health");
        if (enemyHealth <= 0) {
            console.log("Congratulations! You have slain the " + currEnemy.name + "!\n You recieved " + randomItem + "!");
            character.inventory.push(randomItem);
            currEnemy.health = Math.floor((Math.random() * 15) + 5);
            console.log(currEnemy.health);
            
            walk();
        } else if (charHealth <= 0) {
            throw new Error("\n\nYOU HAVE DIED OF DYSENTERY")
            return;
            

        } else {
            fight();
        }
    } else if (choice =="r")
        run();
};

var run = function () {
    if (runChance == 2) {
        console.log("You got away safely!");
        walk();
    } else {
        console.log("You must fight!")
        fight();
    }

};

character.inventory.push(weapons[randomWeapon]);
var walkKey = ask.question("\n Awesome! Lets learn how to walk. \n Press any key to set it as your walk key! (We recommend 'w'!) : ");
var printed = ask.question("Sweet! Your walk key is set to " + walkKey + ". \n Your inventory can be accessed by typing 'print'. Try it now! : ");

if (printed == "print") {
    print();
};
console.log("\n Now as you are headed into the wilderness, there are many foes you will encounter. \n \n Your job is to find the elder spirit and slay him and collect the ectoplasm. \n If you dont collect ectoplasm, he is still able to roam the wilderness. \n");
console.log("\n As you are in the wilderness you can use your walk key to walk and print to access your inventory! Good luck Adventurer!");
var story = ask.question("\n \n You are safe, for now. Press '" + walkKey + "' to walk, or 'print' for your inventory.");

function storyTime() {
    if (story == "w") {
        walk();
    } else if (story == "print") {
        print();
    } else {
        console.log("itsbroke");
    }
}
storyTime();
