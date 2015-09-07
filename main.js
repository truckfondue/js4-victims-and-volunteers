var numberOfVictims = +prompt('enter the number of victims', '1')

var victims = [], volunteers = []


for (var i = 0; i < numberOfVictims; i++) {
	var array = []
	array.push(prompt('enter your name', 'alex'))
	array.push(prompt('enter your phone number', '012-345-6789'))
	array.push(prompt('enter your street', 'north'))

	victims.push(array)
}

var numberOfVolunteers = prompt('enter the number of volunteers', '1')

for (var i = 0; i < numberOfVolunteers; i++) {
	var array = []
	array.push(prompt('enter your name', 'jim'))
	array.push(prompt('enter your phone number', '012-345-6789'))
	array.push(prompt('enter your street', 'south'))

	volunteers.push(array)
}

var victimsByName = function() {
	var names = ""
	if ( victims.length > 0 ) {
		for (var i = 0; i < victims.length; i++) {
			names = victims[i][0] + ' '
		};
	}
	return names
}

var volunteersByName = function() {
	var names = ""
	if ( volunteers.length > 0 ) {
		for (var i = 0; i < victims.length; i++) {
			names = victims[i][0] + ' '
		};
	}
	return names
}

alert('There are ' + numberOfVictims + 'person(s) in need: ' + victimsByName() + '.\n There are ' + numberOfVolunteers + ' volunteers: ' + volunteersByName())