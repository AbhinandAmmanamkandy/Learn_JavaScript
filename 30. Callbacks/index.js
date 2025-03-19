// callback - a function that is passed as an argument
//          to another function.

//      used to handle asynchronous operations:
//      1. Reading a file
//      2. Network requests
//      3. Interacting with databased

// "Hey when you're done, call this next"

// function hello(callback){
//     console.log("Hello");
//     callback();
// }

// function goodbye(){
//     console.log("Goodbye");
// }

// hello(goodbye);

// function leave(){
//     console.log("Leave");
// }

// function wait(){
//     console.log("Wait");
// }

// function hello(callback){
//     console.log("Hello");
//     callback();
// }

// hello(wait);

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
sum(displayPage, 1, 2);

function displayConsole(result){
    console.log(result);
}