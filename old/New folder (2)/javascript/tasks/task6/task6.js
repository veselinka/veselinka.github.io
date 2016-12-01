// Problem 1. English digit
// Write a function that returns the last digit of given integer as an English word.
console.log("Problem 1");

function lastDigit(number) {
    var number;
    var lastnumber = number % 10;
    var last = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"];
    console.log(last[lastnumber]);
};
lastDigit(512);
lastDigit(1024);
lastDigit(12309);
lastDigit(10);


// Problem 2. Reverse number
// Write a function that reverses the digits of given decimal number.
console.log("Problem 2");

function reversion(numbers) {
    var numbers = numbers.toString();
    var reversed = '';
    for (len = numbers.length, i = len - 1; i >= 0; i -= 1) {
        reversed += numbers[i];
    }
    console.log(reversed);
};
reversion(256);
reversion(123.45);


// Problem 3. Occurrences of word
// Write a function that finds all the occurrences of word in a text.
// The search can be case sensitive or case insensitive.
// Use function overloading.
console.log("Problem 3");

function occurenceOfWord(searched) {
	var text = "this Text contain a lot of text words That can be Text word Text text and text with big and small text words.";
	var searched=(/text/gi);
	var match=text.match(searched);

console.log(match);
}
occurenceOfWord();


// Problem 4. Number of elements
// Write a function to count the number of div elements on the web page
console.log("Problem 4");

// function divCounter() {
//     var count;
//     count = document.getElementsByTagName('div').length;
//     return count;
// }
// console.log(divCounter());




// Problem 5. Appearance count
// Write a function that counts how many times given number appears in given array.
// Write a test function to check if the function is working correctly.
console.log("Problem 5");

function appearanceCount(number) {
    var number;
    var counter = 0;
    var array = [4, 7, 3, 7, 6, 9, 4, 2, 6, 6, 3, 6];
    for (var i = 0; i < array.length; i += 1) {
        if (number === array[i]) {
            counter++;
        }
    }
    console.log(counter);
}
appearanceCount(6);


// Problem 6. Larger than neighbours
// Write a function that checks if the element at given position in given array of integers is bigger than its two neighbours (when such exist).
console.log("Problem 6");

function neighbours(i) {

    var nums = [2, 6, 8, 3, 8, 4];
    if (i == 0 || i == nums.length - 1) {
        console.log(nums[i + 1] < nums[i]);
    } else if (i > 0 && i < nums.length - 1) {
        console.log(nums[i - 1] < nums[i] && nums[i + 1] < nums[i]);
    } else {
        console.log(nums[i - 1] < nums[i]);
    }
};
neighbours(0);
neighbours(1);
neighbours(2);
neighbours(3);
neighbours(4);
neighbours(5);



// Problem 7. First larger than neighbours
// Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
// Use the function from the previous exercise.
console.log("Problem 7");

function biggerNeighbour(nums) {
    for (var len = nums.length, i = 1; i < len - 2; i++) {
        if ((nums[i - 1] < nums[i] && nums[i + 1] < nums[i])) {
            return i;
            break;
        }
    }
    if (i > len) {
        return -1;
    } else {
        return i;
    }
};
console.log(biggerNeighbour([2, 6, 8, 19, 8, 4]));
