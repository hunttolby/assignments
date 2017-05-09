
var monitor = {
    name: "Monitor",
    color: "Black",
    brand: "Asus",
    hasHdmi: "Yes",
    whatIs: function () {
        console.log("This object is a " + this.name + " and is " + this.color + " and the brand is " + this.brand)
    }
}

var cellPhone = {
    name: "Cell Phone",
    color: "White",
    brand: "Apple",
    brokenScreen: "No",
    whatIsTwo: function () {
        console.log("This object is a " + this.name + " and is " + this.color + " and the brand is " + this.brand)
    }
}

var juice = {
    name: "Juice",
    inCan: "Yes",
    howMuchJuice: "100%",
    color: "White and Red",
    juiceType: function () {
        console.log("This is some delicious " + this.name + " and it is " + this.howMuchJuice + " " + this.name + " and the can color is " + this.color)
    }
}

var waterBottle = {
    name: "Water Bottle",
    color: "Purple",
    lidColor: "Green",
    howFull: ["Mostly", "Half", "10%", "Over"],
    baterWottle: function () {
        var randomNumber = Math.floor(Math.random() * 4)
        console.log("This " + this.name + " is " + this.howFull[randomNumber] + " full, and the lid is " + this.lidColor)
    }
}

var laptop = {
    name: "Laptop",
    color: "Dark Silver",
    brand: "Apple",
    size: 13,
    whatIs: function () {
        console.log("This object is a " + this.name + " and is " + this.color + " and the brand is " + this.brand)
    }
}

var projector = {
    name: "Projector",
    color: "white and Gray",
    brand: "BenQ",
    projecting: "Computer Screen",
    whatIs: function () {
        console.log("This object is a " + this.name + " and is " + this.color + " and the brand is " + this.brand)
    }
}

var headphones = {
    name: "Headphones",
    color: "White",
    brand: "Apple",
    connection: "Auxilliary",
    whatIs: function () {
        console.log("This object is a " + this.name + " and is " + this.color + " and the brand is " + this.brand)
    }
}

var mug = {
    name: "Mug",
    color: "Orange",
    isOn: ["White Table", "The Floor", " The Ceiling"],
    contains: "Coffee",
    gum: function () {
        var randomNumber = Math.floor(Math.random() * 3)
        console.log("The " + this.name + " is " + this.color + " and is sitting on the " + this.isOn[randomNumber])
    }

}

var lunchSack = {
    name: "Lunch Sack",
    color: "Brown",
    contains: ["Gatorade", "Oranges", "GoldFish", "Sandwich", "Twinkie"],
    bagFrom: "Smiths",
    contanents: function() {
        var randomNumber = Math.floor(Math.random() * 5)
        console.log("My " + this.name + " is " + this.color + " and contains " + this.contains[randomNumber])
    }
}

var backpack = {
    name: "Backpack",
    color: "Gray",
    brand: "Mancro",
    contains: ["Laptop", "Mouse", "Phone Charger", "Headphones", "Laptop Charger"],
    whatIs: function () {
        console.log("This object is a " + this.name + " and is " + this.color + " and the brand is " + this.brand)
    }
}


monitor.whatIs()
cellPhone.whatIsTwo()
laptop.whatIs()
projector.whatIs()
headphones.whatIs()
backpack.whatIs()
juice.juiceType()
waterBottle.baterWottle()
mug.gum()
lunchSack.contanents()

