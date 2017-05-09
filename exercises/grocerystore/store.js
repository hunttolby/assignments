var shopper = {
    firstName: "Tico",
    lastName: "Bell",
    age: 23,
    nutAllergy: false,
    cartItems: ["Dish Soap", "Socks", "Pizza", "Coca Cola", "Broom"],
    friends: ["John", "Jacob", "Jingleheimer", "Schmidt"],
    speak: function () {
        console.log("Hi! My name is " + this.firstName + " " + this.lastName + ". I am " + this.age + " years old. My best friends name is " + this.friends[2] + ".")
    }
}

shopper.speak()