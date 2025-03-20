// setTimeOut() = function in JavaScript that allows you to schedule
// the execution of a function after an amount of time (milliseconds)
// Times are approximate (varies based on the workload of the JavaScript runtime env)

// setTimeOut(callback, delay);
// clearTimeout(timeoutId) - cancel a timeout before it triggers

// function sayHello(){
//     window.alert("Hello");
// }

// setTimeout(sayHello, 3000);

// setTimeout(function(){
//     window.alert("Hello")
// }, 3000);

// setTimeout(()=>{
//         window.alert("Hello")
//     }, 3000);

// const timeoutId = setTimeout(()=>window.alert("Hello"), 3000);
// clearTimeout(timeoutId);

let timeoutID;
function startTimer(){
    timeoutID = setTimeout(()=>window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout(timeoutID);
    console.log("STOPPED");
}