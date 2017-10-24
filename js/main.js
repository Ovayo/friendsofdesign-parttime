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

user.firstName //'Steven'
user.lastName  //'Eksteen'

user.children         //[{name: 'Mark', age: 21}, {name: 'Mary', age: 45}]
user.children[0]      //{name: 'Mark', age: 21}
user.children[1].name //'Mary'

user.firstName + user.lastName //'StevenEksteen'

user.firstName + ' ' + user.lastName //'Steven Eksteen'
`${user.firstName} ${user.lastName}` //'Steven Eksteen'

1 + 1   //2
'1 + 1' //'1 + 1'
`${0 + 1} + ${101 - 100}` //'1 + 1'