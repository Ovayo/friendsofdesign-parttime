var user = {
	firstName: 'Steven',
	lastName: 'Eksteen',
	emailAddress: 'eksoverzero@outlook.com',
	age: 91,
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

user.name = user.firstName + ' ' + user.lastName;

function greetUser(firstName) {
	if(firstName) {
		alert('Hello, ' + firstName);
	} else {
		console.log('No firstName was specified');
	}
}

function sumNumber(number=0) {
	alert(127 + number);
}

function percentageNumber(thisIs, percentOf) {
	return (thisIs / percentOf) * 100
}

var price = 134754.65,
    AgeMin = 50,
    AgeMax = 65,
    taxBreakOnAgeMin = 10,
    taxBreakOnAgeMax = 20,
    taxBreakOnChildren = 10;

var discount = 0,
		totalPrice = price;

// if ( (user.age >= oldAge) && () user.children.length > 0 ) {
// 	var totalPrice = price - taxBreakOnAge - taxBreakOnChildren
// } else if (user.age >= oldAge) {
// 	var totalPrice = price - taxBreakOnAge
// } else {
// 	var totalPrice = price
// }

// if (user.age >= AgeMax) {
// 	totalPrice = totalPrice - taxBreakOnAgeMax;
// }

// if (user.age >= AgeMin && user.age < AgeMax) {
// 	totalPrice = totalPrice - taxBreakOnAgeMin;
// }

if (user.age >= AgeMax) {
	totalPrice = totalPrice - taxBreakOnAgeMax;
} else if (user.age >= AgeMin) {
	totalPrice = totalPrice - taxBreakOnAgeMin;
}

alert(totalPrice + ' a saving of ' + (price - totalPrice));

totalPrice = totalPrice - ( user.children.length * taxBreakOnChildren ) 

alert(totalPrice + ' a saving of ' + (price - totalPrice));

// if (user.children.length > 0) {
// 	totalPrice = totalPrice - taxBreakOnChildren;
// }
