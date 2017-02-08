/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function solve() {
	return function sum(arg) {
		for (var i = 0; i < arg.length; i +=1) {
            if (isNaN(arg[i])) { 
                throw 'Error';
            }
        }
		if (arg.length === 0) {
			return null;
        }
		 return arg.reduce(((a, b) => a + (+b)), 0);
	}
}

module.exports = solve;
