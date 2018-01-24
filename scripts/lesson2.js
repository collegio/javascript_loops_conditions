/*

	Learn to Code JavaScript: Lesson 2
	Loops, Conditions and Functions

	It's time to work with some conditions, loops and functions and how we can
	use them to create elegant code logic

*/

// Let's start with a while loop and see what we can do!
var num = 3;
while(num <= 10) {

	console.log(num);	// we'll print the number to console

	// remember, we need to update our state to prevent infinite loops! See what
	// happens if you comment out the below line if you're feeling brave!
	num++;				
}

// Another way we could have done this without worrying about updateing
// state is by using a for loop

for (num = 3; num <= 10; num++) {
	console.log(num);
}

// Remember, <= is inclusive of the limit. If you only wanted to print to 9:
for (num = 3; num < 10; num++) {
	console.log(num);
}

// How many Wednesdays in 2018?
var total = 0; 
for (var i = 3; i <= 365; i += 7) {    // iterate through each group of 7 days until we get to 365
	total++; 
} 
console.log("Wednesdays in 2018: "+total);

// Conditions

// The if condition will let you test for a condition
var firstFruit = 'apple';
var secondFruit = 'orange';
var thirdFruit = 'banana';

// Let's check each variable to see if it's an apple
// We will use else to determine what happens when the condition doesn't pass
console.log("firstFruit");
if (firstFruit == 'apple') {
	console.log("It's an apple.");
}
else {
	console.log("It's not an apple.");
}

console.log("secondFruit");
if (secondFruit == 'apple') {
	console.log("It's an apple.");
}
else {
	console.log("It's not an apple.");
}

// You can also nest if statements if you wish
console.log("thirdFruit");
if (thirdFruit == 'apple') {
	console.log("It's an apple.");
}
else if (thirdFruit == 'banana') {
	console.log("It's an banana.");
}
else {
	console.log("I don't know what it is...");
}

// You can combine loops and conditions to do some cool things. Let's
// print each multiple of 4 between 0 and 45:
console.log("Multiples of 4 between 0 and 45:")
for (i = 0; i <= 45; i++) {

	// use modulus to check if it's a multiple
	if (i % 4 == 0) {
		console.log(i);	// print the multiple.
	}
}

// Finally, if you have a lot of conditions and don't want to make a
// bunch of if statements, you can use a switch statement

console.log("secondFruit");
switch (secondFruit) {

	case 'apple':
		console.log("It's an apple.");
		break;

	case 'banana':
		console.log("It's a banana.");
		break;

	case 'orange':
		console.log("It's an orange.");
		break;

	default:
		console.log("I have no idea what it is...");
}

// FUNCTIONS

// Finally, let's look at functions. Notice above, we essentially copied code
// when we compared if firstFruit and secondFruit were apples? Let's compress
// the code by using a function.

// Create a function to determine the fruit with the function keyword
function fruitType(theFruit) {

	if (theFruit == 'apple') {
		console.log("It's an apple.");
	}
	else if (theFruit == 'banana') {
		console.log("It's an banana.");
	}
	else {
		console.log("I don't know what it is...");
	}
}

// you can now just invoke the function and pass the specified argument:
console.log("From the fruitType function:");
fruitType(firstFruit);
fruitType(secondFruit);
fruitType(thirdFruit);
