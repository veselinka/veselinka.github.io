//Write a function that sums an array of numbers:
//numbers must be always of type Number
//returns `null` if the array is empty
//throws Error if the parameter is not passed (undefined)
//throws if any of the elements is not convertible to Number	

//zad 1

// function solve() {
// 	return function sum(arg) {
// 		for (var i = 0; i < arg.length; i +=1) {
//             if (isNaN(arg[i])) {
//                 throw '';
//             }
//         }
// 		if (arg.length === 0) {
// 			return null;
//         }
//         return arg.reduce(((a, b) => a + b), 0);
// 	}
//     console.log(sum(1,4,5));
// }



function solve() {
    return function (arg) {
        for (var i = 0; i < arg.length; i +=1) {
            if (isNaN(arg[i])) {  // if (Number.isNaN(Number(arg[i]))) { 
                throw 'Error';
            }
        }
        if (arg.length === 0) {
            return null;
        }
    return arg.reduce(((a, b) => a + b), 0);
    }
}

module.export=solve;
console.log("this works")
