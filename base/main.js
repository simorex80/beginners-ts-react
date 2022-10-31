let counter = 0;

// Arrow function expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// function plus() {
//     counter++;
//     updateCounter()
// }

// function minus() {
//     counter--;
//     updateCounter()
// }

// function updateCounter() {
//     document.getElementById("counter").innerText = counter;
// }

const plus = () => {
    counter++;
    updateCounter();
}

const minus = () => {
    counter--;
    updateCounter();
}

const updateCounter = () => {
    document.getElementById("counter").innerText = counter;
}

// Event reference
// https://developer.mozilla.org/en-US/docs/Web/Events

const eventEnter = (id) => {
    document.getElementById(id).innerText = "in";
}

const eventLeave = (id) => {
    document.getElementById(id).innerText = "out";
}

// Template literals (Template strings)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

const firstname = "simone";
// const hello = "hello " + name + ", how are you?";
const hello = `hello ${firstname}, how are you?`;

// Logical AND (&&) Logical OR (||)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR

const a = false;
const b = true;

// a is false, b not checked
const c = a && b;

// Spread syntax (...)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

const array1 = [1,2,3,4,5,6,7,8,9,10];
const array2 = [11,12,13,14,15,16,17,18,19,20];
// const array3 = array1.concat(array2);
const array3 = [...array1, ...array2];

const obj1 = {name: "Simone"};
const obj2 = {surname: "Di Luzio"};
const obj3 = {...obj1, ...obj2};

window.onload = () => {
    updateCounter();

    document.getElementById("in-event-js-card").addEventListener("mouseenter", (event) => eventEnter("in-event-js"));
    document.getElementById("in-event-js-card").addEventListener("mouseleave", (event) => eventLeave("in-event-js"));

    console.log(hello);

    // a is false, log not called
    // avoid if statement
    a && console.log("hi!");

    console.log(array3);
    console.log(obj3);

}
