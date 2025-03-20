// element selectors - methods used to target and manipulate HTML elements
// They allow you to select one or multiple HTML elements
// from the DOM (Document Object Model)

// 1. document.getElementById()             // ELEMENT OR NULL
// 2. document.getElementByClassName()      // HTML COLLECTION
// 3. document.getElementByTagName()        // HTML COLLECTION
// 4. document.querySelector()              // ELEMENT OR NULL
// 5. document.querySelectorAll()           // NODELIST

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// console.log(myHeading);

// const fruits = document.getElementsByClassName("fruits");

// for (let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
// }
// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// });

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
// }

// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "yellow";
// });

// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen";
// });

// const element = document.querySelector(".fruits");
// console.log(element);

// const fruits = document.querySelectorAll(".fruits");
// fruits[0].style.backgroundColor = "yellow";
// console.log(fruits);

const foods = document.querySelectorAll("li");
foods.forEach(food => {
    food.style.backgroundColor = "yellow";
});