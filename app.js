// Bismillah
const t = { name: "Tom", date: 1998 };

function renewObj(oldName, newName) {
    return { name: newName, date: oldName.date };
}
//
function getWorkShopDate() {
    return new Date(2023, 03, 07);
}
//
function toHex(num) {
    let hex = num.toString(16);
    return hex.padStart(2, "0");
};
//
function exclusiveOr(a, b) {
    return (a || b) && !(a && b);
}
// Recursion
function sum(numbers) {
    if (numbers.length === 1) {
        return numbers[0];
    } else {
        return +sum(numbers.slice(1));
    }
}
//
function recursive(n) {
    if (n === 0) return 1;
    return n * recursive(n - 1);
}
//
// MaxMin
const top = [3, 7, 1, 9, 3, 6, 2, 8, 5, 9, 0, 5];
let max = top.reduce((acc, val) => {
    return val < acc ? val : acc;
}, 0);
// CLOSURE
function adjective(adj) {
    return function (noun) {
        return function (lol) {
            return adj + " " + noun + " " + lol;
        };
    };
}
let fun1 = adjective("wow");
let fun2 = fun1("noun");
let fun3 = fun2("lol");
// PARTIAL APPLICATION
// function greet(greeting, name) {
// 	return `${greeting} ${name}`;
// }

function curryGreet(greeting) {
    return function (name) {
        return `${greeting} ${name}`;
    };
}
let greetStr = curryGreet("hello");
let personName = greetStr("humoyun!"); //hello humoyun!
// PRACTISE
// writeMessage = function (message, salutation, name)

function writeMessage(message, salutation, name) {
    return `${message} + ${salutation} + ${name}`;
}
let giveName = function singName(name) {
    return (msg, salutation) => writeMessage(msg, salutation, name);
};
// To make functions more modular and easier to reuse, we can use techniques like currying, which lets us take advantage of closure to turn a function with any number of arguments into a series of single - argument functions, such that we can provide only some of the input arguments and get a "partially applied" function.
// Below we define the quote function to attribute a(grumpy) statement to a given(grumpy) person and year:
function quote(name, year, text) {
    return `${text}+${name}+${year}`;
}
//
// MUST BE PRACTISE CODE HERE!
// Composing functions

let ender = (ending) => (input) => input + ending;

let adore = ender(" rocks");
let announce = ender(", y'all");
let exclaim = ender("!");

let hypeUp = (x) => exclaim(announce(adore(x))); // opp rocks, y'all!
