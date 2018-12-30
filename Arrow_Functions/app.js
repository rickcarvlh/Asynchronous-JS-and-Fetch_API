// const sayHello = function () {
//     console.log('Hello');

// }

// arrow function
// const sayHello = () => {
//     console.log('Hello');

// }

// One line function doesn't need braces
// const sayHello = () => console.log('Hello!');

// sayHello();

// Same as above
// const sayHello = () => 'Hello'

// console.log(sayHello());

// return object
// const sayHello = () => ({
//     msg: 'Hello'
// });

// Single param doesn't need parenthesis
// const sayHello = (name) => console.log(`Hello ${name}`);

// More than one param needs parenthesis
// const sayHello = (firstName, lastName) =>
//     console.log(`Hello ${firstName} ${lastName}`);
//     sayHello('Ricardo', 'Carvalho');


const users = ['Nathan', 'John', 'William'];

// without arrow function
// const nameLength = users.map(function (name) {
//     return name.length;
// });

// with arrow function
// const nameLength = users.map((name) => {
//     return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);