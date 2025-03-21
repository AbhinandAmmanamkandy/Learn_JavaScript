// eventListener - Listen for specific events to create  interactive web pages
// events: click, mouseover, mouseout
//  addEventListener(event, callback)

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");
// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 💔"
// }
myButton.addEventListener("click", event =>{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 💔"
});

myButton.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Dont do it! 🤞"
});

myButton.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me"
})