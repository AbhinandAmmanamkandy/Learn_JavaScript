// Variable - A container that stores a value.
//      Behaves as if it were the value it contains.

// 1. declaration   let x
// 2. assignment    x = 100


// // number

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log(typeof age);
// console.log(typeof price);

// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(`Your gpa is: ${gpa}`)

// // string

// let firstName = "Ghost";
// let favoriteFood = "pizza";
// let email = "ghost123@gmail.com";

// console.log(typeof firstName);
// console.log(firstName);
// console.log(`You like ${favoriteFood}!`)
// console.log(`Your email is ${email}`);

// // boolean

// let online = true;
// let forSale = false;
// let isStudent = true;

// console.log(typeof online);
// console.log(`Bro is online: ${online}`);
// console.log(`Is this car for sale: ${forSale}`);
// console.log(`Enrolled: ${isStudent}`);


let fullName = "Ghost Reborn!!!";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;