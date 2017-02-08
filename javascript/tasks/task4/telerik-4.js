// Problem 1. Numbers
// Write a script that prints all the numbers from 1 to N.
function numbers(args) {
	var num = +args[0];
	var string = "";
    for (var i = 1; i <= num; i++) {
		string +=i+" ";
    }
    console.log(string);
};
numbers([25]);

// // Problem 2. Numbers not divisible
// // Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time
// function notDivisible(n) {
//     for (var i = 0; i < n; i++) {
//         if (!((i % 7 == 0) && (i % 3 == 0))) {
//             console.log(i);
//         }
//     }
// }
// notDivisible(50);

// // Problem 3. Min/Max of sequence
// // Write a script that finds the max and min number from a sequence of numbers.

// // Purvi variant
// function sorting(a, b) {
//     return a - b;
// }
// var arr = [3, 1, 2, 6, 7, 33, 55, -3, 0];
// console.log(arr);
// console.log(arr.sort(sorting)); //sorting the array
// var min = arr[0];
// var max = arr[arr.length - 1];
// console.log("Min = " + min);
// console.log("Max = " + max);


// // Vtori variant
// var minMaxNumbers=[1,6,7,9,3];
// var min=Math.min.apply(null,minMaxNumbers);
// var max=Math.max.apply(null,minMaxNumbers);
// console.log("Min number is: "+ min);
// console.log("Max number is: "+ max);

// // Problem 4. Lexicographically smallest
// // Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.

// function smallestAndLargestProperty(obj) {
// 	        var min = "z";
// 	        var max = "a";
// 	        for (var prop in obj) {
// 	            if (prop > max) {
// 	                max = prop;
// 	            }
// 	            if (prop < min) {
// 	                min = prop;
// 	            }
// 	        }
// 	        console.log("Object: " + obj);
// 	        console.log("Min property: " + min);
// 	        console.log("Max property: " + max);
//     	}
// 	    smallestAndLargestProperty(document);
// 	    smallestAndLargestProperty(window);
// 	    smallestAndLargestProperty(navigator);