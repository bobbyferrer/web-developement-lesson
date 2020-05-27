//Object literal
// const person = {
// 	name: 'bob'
// };

// Person constructor
// function Person(name) {
// 	this.name = 'Bob';
// }

// const bob = new Person();
// // const john = new Person();

// console.log(bob);

function Person(name, age) {
	this.name = name;
	this.age = age;
	// console.log(this);
}
// console.log(this);
// // this.alert('1');
const bob = new Person('bob', 36);
const john = new Person('john');

console.log(bob);

//start lesson

// CONSTRUCTOR AND THIS. KEYWORD
// Person constructor
function Person(name, dob) {
	this.name = name;
	// this.age = age;
	this.birthday = new Date(dob);
	this.calculateAge = function() {
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	};
}

// // const bob = new Person('Bob', 36);
// // const john = new Person('John', 30);

// // console.log(john.age);

// const bob = new Person('Bob', '5-13-1983');
// console.log(bob.calculateAge());
