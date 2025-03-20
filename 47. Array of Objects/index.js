const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}];

//  console.log(fruits[0].calories);

// fruits.push({name:"grapes", color:"purple", calories: 62})
// fruits.pop();

// fruits.splice(1,2);

// console.log(fruits);

// fruits.forEach(fruit => console.log(fruit.color))

// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// console.log(fruitColors);

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// console.log(yellowFruits);
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// console.log(lowCalFruits);

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxFruit);
