// CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// ADD ATTRIBUTES AND CSS PROPERTIES
newH1.textContent = "I like Pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// APPEND TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box3").append(newH1);
// document.getElementById("box3").prepend(newH1);
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[0]);

// REMOVE THE ELEMENT
document.body.removeChild(newH1);