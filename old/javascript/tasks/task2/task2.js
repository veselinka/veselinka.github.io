// Problem 1. Odd or Even
// Write an expression that checks if given integer is odd or even.
function oddOrEven(number) {
    if (number % 2 == 0) {
        return console.log("False-The number is even");
    } else {
        return console.log("True-The number is odd");
    }
};
oddOrEven(3);
oddOrEven(2);
oddOrEven(-2);
oddOrEven(-1);
oddOrEven(0);



// Problem 2. Divisible by 7 and 5
// Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.

function divisible(num) {
    if ((num % 7 == 0) && (num % 5 == 0)) {
        return console.log("True - The number is divisible by 7 and 5");
    } else {
        return console.log("False - The number is not divisible by 7 and 5");
    }
};
divisible(3);
divisible(0);
divisible(5);
divisible(7);
divisible(35);
divisible(140);

// Problem 3. Rectangle area
// Write an expression that calculates rectangle’s area by given width and height.

function area(width, height) {
    return console.log(width * height);
}
area(3, 4);
area(2.5, 3);
area(5, 5);

// Problem 4. Third digit
// Write an expression that checks for given integer if its third digit (right-to-left) is 7.


function str(n) {
    var nToString = n.toString();
     var duljina = nToString.length;
    if (duljina < 3) {
        console.log(false);
    } else {
        if (7==nToString.charAt(duljina - 3)) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

str(5);
str(701);
str(1732);
str(9703);
str(877);
str(777877);
str(9999799);


// Problem 5. Third bit
// Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
// The bits are counted from right to left, starting from bit #0.
// The result of the expression should be either 1 or 0.

function thirdBit(bit){
       console.log( (bit >> 3) & 1);
    }
    thirdBit(5);
    thirdBit(8);
    thirdBit(0);
    thirdBit(15);
    thirdBit(5343);
    thirdBit(62241);


// Problem 6. Point in Circle
// Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5). 
// {0,0} is the centre and 5 is the radius
var circlePoint = function(x,y){
	if (Math.pow(x,2)+Math.pow(y,2)<=25) {
		return console.log(true);
	}
	else{
		return console.log(false);
	}
}
circlePoint(0,1);
circlePoint(-5,0);
circlePoint(-4,5);
circlePoint(1.5,-3);
circlePoint(-4,-3.5);
circlePoint(100,-30);
circlePoint(0,0);
circlePoint(0.2,-0.8);
circlePoint(0.9,-4.93);
circlePoint(2,2.655);


// Problem 7. Is prime
// Write an expression that checks if given positive integer number n (n ≤ 100) is prime.
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return console.log(false);
        }
    }
    return console.log(value > 1);
}
isPrime(1);
isPrime(2);
isPrime(3);
isPrime(4);
isPrime(9);
isPrime(37);
isPrime(-3);


// Problem 8. Trapezoid area
// Write an expression that calculates trapezoid's area by given sides a and b and height h.

function trapezoid(a,b,h){
return console.log(((a+b)/2)*h);
}
trapezoid(5,7,12);
trapezoid(2,1,33);
trapezoid(8.5,4.3,2.7);
trapezoid(100,200,300);
trapezoid(0.222,0.333,0.555);


// Problem 9. Point in Circle and outside Rectangle
// Write an expression that checks for given point P(x, y) 
// if it is within the circle K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2).

function insideKandOutsideR(x,y){
	var insideK=Math.pow(x-1,2)+Math.pow(y-1,2)<=9;
	var outsideR=x>=-1 && x<=5 && y>=-1 && y<=1;
	if (insideK==true && outsideR==false){
		console.log("yes");
	}
	else{
		console.log("no");
	}
}
insideKandOutsideR(-1,1);
insideKandOutsideR(1,4);
insideKandOutsideR(3,2);
insideKandOutsideR(0,1);
insideKandOutsideR(4,1);
insideKandOutsideR(2,0);
insideKandOutsideR(4,0);
insideKandOutsideR(2.5,1.5);
insideKandOutsideR(3.5,1.5);
insideKandOutsideR(-100,-100);

