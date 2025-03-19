// this - reference to the object where THIS is used
//  (object depends on the immediate context)
//  person.name = this.name

//  We cannot use arrow function as it references window object
// rather than the current object

// const person1 = {
//     name: "Spongebob",
//     favFood: "hamburgers",
//     sayHello: function(){console.log(`Hi! Iam ${this.name}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// }

// const person2 = {
//     name: "Patrick",
//     favFood: "pizza",
//     sayHello: function(){console.log(`Hi! Iam ${this.name}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// }

// person1.eat();
// person2.eat();

// console.log(this); // We are inside window object and it has many properties