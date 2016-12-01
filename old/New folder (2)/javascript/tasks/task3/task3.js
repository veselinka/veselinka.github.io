// Problem 1. Exchange if greater
// Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
// As a result print the values a and b, separated by a space.
function changePlaces(a, b) {
		if (a > b) {
				// // Purvi variant bez dopulnitelna promenliva
				// a = a + b;
				// b = a - b;
				// a = a - b;
				// // Vtori variant s dopulnitelna promenliva
				var temp = a;
				a = b;
				b = temp;
				console.log(a + " " + b);
		} else {
				console.log("a e po-golqmo e ot b: " + a + " " + b);
		}
}
changePlaces(5, 2);
changePlaces(3, 4);
changePlaces(5.5, 4.5);


// Problem 2. Multiplication Sign
// Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
// Use a sequence of if operators.
function sign(a, b, c) {
		if (a > 0 && b > 0) {
				if (c > 0) {
						console.log("+");
				} else if (c < 0) {
						console.log("-");
				} else {
						console.log("0");
				}
		} else if (a > 0 && b < 0) {
				if (c > 0) {
						console.log("-");
				} else if (c < 0) {
						console.log("+");
				} else {
						console.log("0");
				}
		} else if (a < 0 && b < 0) {
				if (c < 0) {
						console.log("-");
				} else if (c > 0) {
						console.log("+");
				} else {
						console.log("0")
				}
		} else if (a < 0 && b > 0) {
				if (c < 0) {
						console.log("+");
				} else if (c > 0) {
						console.log("-");
				} else {
						console.log("0");
				}
		} else {
				console.log("0");
		}
}
sign(5, 2, 2);
sign(-2, -2, 1);
sign(-2, 4, 3);
sign(0, -2.5, 4);
sign(-1, -0.5, -5.1);

// vtora zadacha-vtori nachin - po-kratko

function signs(a, b, c) {
		if (a === 0 || b === 0 || c === 0) {
				console.log("0");
		} else if ((a > 0 && b > 0 && c < 0) || (a > 0 && b < 0 && c > 0) || (a < 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c > 0)) {
				console.log("-");
		} else {
				console.log("+");
		}
}
signs(5, 2, 2);
signs(-2, -2, 1);
signs(-2, 4, 3);
signs(0, -2.5, 4);
signs(-1, -0.5, -5.1);




// Problem 3. The biggest of Three
// Write a script that finds the biggest of three numbers.
// Use nested if statements.

function biggestFromThree(a, b, c) {
		if (a >= b && a >= c) {
				console.log(a);
		} else if (b >= a && b >= c) {
				console.log(b);
		} else {
				console.log(c);
		}
}
biggestFromThree(0, 1, 1);
biggestFromThree(5, 5, 5);
biggestFromThree(5, 2, 2);
biggestFromThree(-2, -2, 1);
biggestFromThree(-2, 4, 3);
biggestFromThree(0, -2.5, 5);

// Problem 4. Sort 3 numbers
// Sort 3 real values in descending order.
// Use nested if statements.
// Note: Don’t use arrays and the built-in sorting functionality.
function sortThreeNumbers(a, b, c) {
		if (a > b && a > c) {
				if (b > c) {
						console.log(a, b, c);
				} else {
						console.log(a, c, b);
				}
		} else if (b > a && b > c) {
				if (a > c) {
						console.log(b, a, c);
				} else {
						console.log(b, c, a);
				}
		} else if (c > a && c > b) {
				if (a > b) {
						console.log(c, a, b);
				} else {
						console.log(c, b, a);
				}
		} else {
				console.log(a, a, a);
		}
}
sortThreeNumbers(5, 1, 2);
sortThreeNumbers(-2, -2, 1);
sortThreeNumbers(-2, 4, 3);
sortThreeNumbers(0, -2.5, 5);
sortThreeNumbers(-1.1, -0.5, -0.1);
sortThreeNumbers(10, 20, 30);
sortThreeNumbers(1, 1, 1);


// Problem 5. Digit as word
// Write a script that asks for a digit (0-9), and depending on the input, shows the digit as a word (in English).
// Print “not a digit” in case of invalid input.
// Use a switch statement.

function digit(digit) {
		switch (digit) {
				case "0":
						console.log("zero");
						break;
				case "1":
						console.log("one");
						break;
				case "2":
						console.log("two");
						break;
				case "3":
						console.log("three");
						break;
				case "4":
						console.log("four");
						break;
				case "5":
						console.log("five");
						break;
				case "6":
						console.log("six");
						break;
				case "7":
						console.log("seven");
						break;
				case "8":
						console.log("eight");
						break;
				case "9":
						console.log("nine");
						break;
				default:
						console.log("not a digit");
		}
}
digit("0");
digit("1");
digit("0");
digit("0.1");
digit("10");
digit("5");


// Problem 6. Quadratic equation
// Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
// Calculates and prints its real roots.
// Note: Quadratic equations may have 0, 1 or 2 real roots.

function quadraticRoot(a, b, c) {
		var d = Math.pow(b, 2) - 4 * a * c;
		var x;
		var x1;
		var x2;
		if (d > 0) {
				x1 = (-b - Math.sqrt(d)) / (2 * a);
				x2 = (-b + Math.sqrt(d)) / (2 * a);
				console.log('x1 = ' + x1 + ';' + ' x2=' + x2);
		} else if (d === 0) {
				x = (-b) / (2 * a);
				console.log('x1 = x2 = ' + x);
		} else {
				console.log("no real roots");
		}
}
quadraticRoot(2, 5, -3);
quadraticRoot(-1, 3, 0);
quadraticRoot(-0.5, 4, -8);
quadraticRoot(5, 2, 8);


// Problem 7. The biggest of five numbers
// Write a script that finds the greatest of given 5 variables.
// Use nested if statements.

function biggestfromFive(a, b, c, d, e) {
		if (a >= b && a >= c && a >= d && a >= e) {
				console.log(a);
		} else if (b >= a && b >= c && b >= d && b >= e) {
				console.log(b);
		} else if (c >= a && c >= b && c >= d && c >= e) {
				console.log(c);
		} else if (d >= a && d >= b && d >= c && d >= e) {
				console.log(d);
		} else if (e >= a && e >= b && e >= c && e >= d) {
				console.log(e);
		} else {
				console.log(a);
		}
}

biggestfromFive(5, 2, 2, 4, 1);
biggestfromFive(-2, -22, 1, 0, 0);
biggestfromFive(-2, 4, 3, 2, 0);
biggestfromFive(0, -2.5, 0, 5, 5);
biggestfromFive(-3, -0.5, -1.1, -2, -0.1);
biggestfromFive(3, 3, 3, 3, 3);


// Problem 8. Number as words
// Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.

function numberAsWord(number) {
		var number;
		var first = parseInt(number / 100);
		var second = parseInt((number / 10) % 10);
		var third = parseInt(number % 100 % 10);
		var firstDigit = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
		var secondDigit = [" ", " ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
		var thirdDigit = [" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
		
		if (number === 0) {
				console.log("Zero");
		} else if (number > 0 && number <= 19) {
				console.log(thirdDigit[second * 10 + third]);
		} else if (number >= 20 && number < 99) {
				console.log(secondDigit[second] + " " + thirdDigit[third]);
		} else if ((second * 10 + third)<=19)
		{
				console.log(firstDigit[first] + " hundreds and " + thirdDigit[second * 10 + third]);
		}
		else{
			console.log(firstDigit[first] + " hundreds and " +secondDigit[second]+" "+thirdDigit[third]);
		}
}
numberAsWord(0);
numberAsWord(9);
numberAsWord(10);
numberAsWord(12);
numberAsWord(19);
numberAsWord(25);
numberAsWord(98);
numberAsWord(273);
numberAsWord(400);
numberAsWord(501);
numberAsWord(617);
numberAsWord(711);
numberAsWord(999);