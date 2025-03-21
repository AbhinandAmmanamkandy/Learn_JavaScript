// NodeList - static collection of HTML elements by (id, class, element)
// Can be created by using querySelectorAll()
// Similiar to an array, but no (map, filter, reduce)
// NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

// ADD HTML/CSS Properties
// buttons.forEach(element => {
//     element.style.backgroundColor = "green";
//     element.textContent += "😀";
// });

// Click Event
// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";
//     });
// });

// Mouse Over and Mouse Out
// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)"
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)"
//     });
// });

// ADD ELEMENT
// const newButton = document.createElement("button");
// newButton.textContent = "Button 5";
// newButton.classList = "myButtons";
// document.body.appendChild(newButton);
// console.log(buttons);

// buttons = document.querySelectorAll(".myButtons");
// console.log(buttons);

// REMOVE AN ELEMENT
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});