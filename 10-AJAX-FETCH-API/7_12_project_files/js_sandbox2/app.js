// 1 const sayHello = function() {
// 	console.log('Hello');
// };

// const sayHello = () => {
// 	console.log('Hello');
// };

// One line function does not need braces
// const sayHello = () => console.log('Hello');

// 1 sayHello();

// 2 One line returns
// const sayHello = () => 'Hello';

// Same as above
// const sayHello = function() {
//   return 'Hello';
// }

// 2 console.log(sayHello());

// 3 Return object
// const sayHello = () => ({ msg: 'Hello' });

// 3 console.log(sayHello())

// 4 Single param does not need parenthesis
// const sayHello = (name) => console.log(`Hello ${name}`);

// 4 sayHello('bob');

// 5 Multuiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// 5 sayHello('John', 'Doe');

// 6 const users = [ 'Nathan', 'John', 'William' ];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest
// const nameLengths = users.map((name) => name.length);

// 6 console.log(nameLengths);
