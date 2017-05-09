var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


vegetables.pop();
fruit.shift();
var fruitNumber = fruit.indexOf("orange")
fruit.push(fruitNumber);
var veggies = vegetables.length;
vegetables.push(veggies);
var food = fruit.concat(vegetables);
food.splice(4, 2);
food.reverse()
console.log(food.toString());

