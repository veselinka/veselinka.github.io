// Problem 1. Increase array members
// Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.
// Print the obtained array on the console.
var arr = [];
arr.length = 20;
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i] = i * 5);
}


// Problem 2. Lexicographically comparison
// Write a script that compares two char arrays lexicographically (letter by letter).

var array1 = ["adfghgf"];
var array2 = ["asfdsfgdg"];
arr1 = array1.join(" ");
arr2 = array2.join(" ");
if (arr1 > arr2) {
    console.log(arr2 + " is lexicographically firs.");
} else if (arr1 < arr2) {
    console.log(arr1 + " is lexicographically firs.");
} else {
    console.log("arr1 and arr2 are lexicographically equal");
}

// Problem 3. Maximal sequence
// Write a script that finds the maximal sequence of equal elements in an array.


var array = [15, 7, 3, 6, 8, 9, 5, 9, 9, 9, 3, 2];
var len = array.length;
var counter = 0;
var number = 0;
var maxSequenceNumber = 0;
for (var i = 0; i < len - 1; i += 1) {
    if (array[i] == array[i + 1]) {
        counter++;
        if (number <= counter) {
            number = counter;
            maxSequenceNumber = array[i];
        }
    } else {
        counter = 0;
    }
}
var a=maxSequenceNumber.toString() + " ";
console.log(a.repeat(number+1));










// Problem 5. Selection sort
// Sorting an array means to arrange its elements in increasing order.
// Write a script to sort an array.
// Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.
// Hint: Use a second array

var array = [15, 7, 3, 6, 8, 9, 5, 9, 9, 3, 2];
for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
        if (array[i] >= array[j]) {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.log(array);


// Problem 6. Most frequent number
// Write a script that finds the most frequent number in an array.
var len = array.length;
var array = [15, 7, 3, 6, 8, 9, 5, 9, 9, 3, 2];
for (var i = 0; i < len - 1; i += 1) {
    for (var j = i + 1; j < len; j++) {
        if (array[i] >= array[j]) {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
var counter = 0;
var biggest = 0;
var mostFrequent = 0;
for (var i = 0; i < len - 1; i += 1) {
    if (array[i] == array[i + 1]) {
        counter++;
        if (biggest <= counter) {
            biggest = counter;
            mostFrequent = array[i];
        }
    } else {
        counter = 0;
    }
}
console.log("The most frequent number in the array is: " + mostFrequent + " - " + (biggest + 1) + " times");
