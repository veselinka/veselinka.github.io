/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function solve() {
	return function findPrimes(a,b) {
		var array=[];
		var isPrime=true;
		if (a === undefined || b === undefined) {
			throw "Error";
		}
		for (var i = +a; i<=+b; i++) {
		    for (var j = 2; j < i; j++) {
		        if(i % j === 0){
		            isPrime = false;
		        }
		    }
	    if (isPrime && i>1) {
	    	array.push(i);
		}
		isPrime=true;
	}
		return array;
		console.log(array.length);
	}
}



module.exports = solve;

