//  while loop - repeat some code WHILE some condition is TRUE

// let userName = "";

// // while(userName === "" || userName === null){
// //     userName = window.prompt("Enter userName")
// // }

// do{
//     userName = window.prompt("Enter userName");
// }while(userName === "" || userName === null);

// console.log(`Hello ${userName}`);

let logginedIn = false;
let username;
let password;

// while(!logginedIn){
//     username = window.prompt("Enter your username");
//     password = window.prompt("Enter your password");

//     if(username === "myUsername" && password === "myPassword"){
//         logginedIn = true;
//         console.log("You are logged in!");
//     }else{
//         console.log("Invalid credential. Please try again");
//     }
// }

do{
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if(username === "myUsername" && password === "myPassword"){
        logginedIn = true;
        console.log("You are logged in!");
    }else{
        console.log("Invalid credential. Please try again");
    }
}while(!logginedIn);