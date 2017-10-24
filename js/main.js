var user = {
	firstName: 'Steven',
	lastName: 'Eksteen',
	emailAddress: 'eksoverzero@outlook.com',
	children: [{
		name: 'Mark',
		age: 21
	}, {
		name: 'Mary',
		age: 45
	}]
};

console.log(user.firstName); //'Steven'
console.log(user.lastName);  //'Eksteen'

console.log(user.children);         //[{name: 'Mark', age: 21}, {name: 'Mary', age: 45}]
console.log(user.children[0]);      //{name: 'Mark', age: 21}
console.log(user.children[1].name); //'Mary'

console.log(user.firstName + user.lastName); //'StevenEksteen'

console.log(user.firstName + ' ' + user.lastName); //'Steven Eksteen'
console.log(`${user.firstName} ${user.lastName}`); //'Steven Eksteen'

console.log(1 + 1);   //2
console.log('1 + 1'); //'1 + 1'
console.log(`${0 + 1} + ${101 - 100}`); //'1 + 1'