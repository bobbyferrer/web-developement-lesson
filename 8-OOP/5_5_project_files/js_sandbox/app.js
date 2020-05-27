// Using object.create

const personPrototypes = {
	greeting: function() {
		return `Hello there ${this.firstName} ${this.lastName}`;
	},
	getsMarried: function(newLastName) {
		this.lastName = newLastName;
	}
};

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const bob = Object.create(personPrototypes, {
	firstName: { value: 'Boby' },
	lastName: { value: 'Ferrer' },
	age: { value: 36 }
});

console.log(bob);

console.log(bob.greeting());
