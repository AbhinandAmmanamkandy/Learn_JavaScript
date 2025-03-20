// Error - an object that is created to represent a problem
//  that occurs often with user input or establishing connection

// try {} - encloses code that might potentially cause an error
// catch {} - catch and handle any thrown Errors from try{}
// finally {} - (optional) Always executes. Used mostly for clean up
// ex. close files, close connections, release resources

// try{
//     console.log(x);
// }catch(error){
//     console.error(error);
// }finally{
//     console.log("This always executes");
// }

// console.log("You have reached the end");

try{
    const divident = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor:"));

    if(divisor == 0){
        throw new Error("You can't divide by zero");
    }

    if(isNaN(divident) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    result = divident / divisor;
    console.log(result);
}catch(error){
    console.error(error);
}

console.log("You have reached the end");