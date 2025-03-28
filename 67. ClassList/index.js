// classList - Element property in javascript used to interact
// with an element's list of class (CSS classes)
// Allows you to make reusable classes for many elements
// accross your webpage

// add()
// remove
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

// const myButton = document.getElementById("myButton");
// const myH1 = document.getElementById("myH1");

// myH1.classList.add("enabled");
// myH1.addEventListener("click", event => {
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬";
//     }else{
//         event.target.classList.replace("enabled", "disabled");
//     }
// });

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover", event => {
//     event.target.classList.add("hover");
// });
// myButton.addEventListener("mouseout", event => {
//     event.target.classList.remove("hover");
// });

// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// });
// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// });

// myButton.classList.add("enabled");
// myButton.addEventListener("click", event => {
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬";
//     }else{
//         event.target.classList.replace("enabled", "disabled");
//     }
// });

let buttons = document.querySelectorAll(".myButtons");
buttons.forEach(button => {
    button.classList.add("enabled");
});
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});
buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});
buttons.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬";
        }else{
            event.target.classList.replace("enabled", "disabled");
        }
    });
});