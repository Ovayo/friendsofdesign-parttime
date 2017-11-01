var user = {
	firstName: 'Steven',
	lastName: 'Eksteen',
	emailAddress: 'eksoverzero@outlook.com',
	age: 91,
	salary: 15000,
	children: [{
		name: 'Mark',
		age: 21,
		amount: 3213
	}, {
		name: 'Mary',
		age: 18,
		amount: 3000
	}, {
		name: 'John',
		age: 12,
		amount: 1980
	}, {
		name: 'James',
		age: 2,
		amount: 1200
	}]
};

function percentageNumber(number, percent) {
	return (percent / 100) * number
}

function maintenanceDeduction(user) {
	// Loop through the user's children
	   // If child is younger than 18,
	   // add the amount to the total maintenance amount
	// Return the total maintenance amount

	if(!user) {
		return;
	}

	var maintenanceAmount = 0;

	if(user.children && typeof(user.children) == 'object') {
		console.log('--- Inclusion on if');
		for(i=0;i<user.children.length;i++) {
			console.log('--- Within loop. Index: ' + i);
			var child = user.children[i];

			if(child.age && child.amount) {
				if(child.age < 18) {
					maintenanceAmount += child.amount
				}
			}

			console.log(child);
		}
	} else {
		console.log('--- Exclusion on if');
	}

	return maintenanceAmount;
}

function calculateDeductions(user) {
	return maintenanceDeduction(user) + percentageNumber(user.salary, 14)
}

var salary = user.salary,
		deductions = calculateDeductions(user),
		salaryAfterDeductions = salary - deductions;

alert('Get ready');

var salaryDiv = document.getElementById('userSalary');

salaryDiv.innerHTML = salary;


