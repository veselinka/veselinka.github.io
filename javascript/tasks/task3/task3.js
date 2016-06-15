// Problem 1. Exchange if greater
// Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
// As a result print the values a and b, separated by a space.
var changePlaces = function(a, b) {
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
var sign = function(a, b, c) {
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


// Problem 3. The biggest of Three
// Write a script that finds the biggest of three numbers.
// Use nested if statements.

var biggestFromThree = function(a, b, c) {
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
var sortThreeNumbers = function(a,b,c){
	if (a>b && a>c) {
		if(b>c){
			console.log(a,b,c);
		}
		else{
			console.log(a,c,b);
		}
	}
	else if(b>a && b>c){
		if(a>c){
			console.log(b,a,c);
		}
		else{
			console.log(b,c,a);
		}
	}
	else if (c>a && c>b){
		if (a>b) {
			console.log(c,a,b);
		}
		else{
			console.log(c,b,a);
		}
	}
	else{
		console.log(a,a,a);
	}
}
sortThreeNumbers(5,1,2);
sortThreeNumbers(-2,-2,1);
sortThreeNumbers(-2,4,3);
sortThreeNumbers(0,-2.5,5);
sortThreeNumbers(-1.1,-0.5,-0.1);
sortThreeNumbers(10,20,30);
sortThreeNumbers(1,1,1);


// Problem 5. Digit as word
// Write a script that asks for a digit (0-9), and depending on the input, shows the digit as a word (in English).
// Print “not a digit” in case of invalid input.
// Use a switch statement.

var digit = function(digit) {
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

var quadraticRoot = function (a,b,c){
	var d=Math.pow(b,2)-(4*a*c);
	var x1;
	var x2;
	if(d>0){
		x1=((-b)-Math.sqrt(d))/(2*a);
		x2=((-b)+Math.sqrt(d))/(2*a);
		console.log(x1,x2);
	}
	else if(d===0){
		x1=(-b)/(2*a);
		console.log(x1);
	}
	else{
		console.log("no real roots");
	}
}
quadraticRoot(2,5,-3);
quadraticRoot(-1,3,10);
quadraticRoot(-0.5,4,-8);
quadraticRoot(5,2,8);


