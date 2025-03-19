// function = A section of reusable code.
//          Declare a code once, use it whenever you want.
//          Call the function to execute that code.

// function happyBirthday(username, age){
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");
//     console.log(`Happy Birthday dear ${username}!`);
//     console.log("Happy Birthday to you!");
//     console.log(`You are ${age} years old`);

// }

// happyBirthday("Ghost Reborn", 24);
// happyBirthday("Spongebob", 30);
// happyBirthday("Patrick", 37);

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function isEven(number){
    return number%2===0 ? true : false;
}

function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }else{
        return false;
    }
}

console.log(isValidEmail("ghost1@gmail.com"));