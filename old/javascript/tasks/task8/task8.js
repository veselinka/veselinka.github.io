// Problem 1. Make person
// Write a function for creating persons.
// Each person must have firstname, lastname, age and gender (true is female, false is male)
// Generate an array with ten person with different names, ages and genders

console.log("Problem 1");

function Person(firstName, lastName, age, gender) {
    this.firstname = firstName,
        this.lastname = lastName,
        this.age = age,
        this.gender = gender;
}


function buildPerson() {
    var femaleFirstName = ["Veselinka", "Petranka", "Gergana", "Ivanka", "Hristina"],
        femaleLastName = ["Kirova", "Ivanova", "Petrova", "Dimitrova", "Nikolova"],
        maleFirstName = ["Ivan", "Petkan", "Dragan", "Nikolai", "Hristo"],
        maleLastName = ["Kirov", "Ivanov", "Petrov", "Dimitrov", "Nikolov"],


        randomAge = Math.floor(Math.random() * 100),
        randomGender = !!(Math.round(Math.random())),
        round = Math.round(Math.random() * 5);

    function genderFunc(gender) {
        if (gender === false) {
            var malePerson = new Person(maleFirstName[round], maleLastName[round], randomAge, randomGender);
            return malePerson;
        } else {
            var femalePerson = new Person(femaleFirstName[round], femaleLastName[round], randomAge, randomGender);
            return femalePerson;
        }
    }
    return genderFunc(randomGender);

};


function generatedArray(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(buildPerson());
    }
    return arr;
}
console.log(generatedArray(10));


// Problem 2. People of age
// Write a function that checks if an array of person contains only people of age (with age 18 or greater)
// Use only array methods and no regular loops (for, while)
console.log("Problem 2-s filter");

function checkAges(person) {
    return person.age > 18;
}
var arr = generatedArray(5);
var result = arr.filter(checkAges);
console.log(result);
if (arr.length === result.length) {
    console.log(true);
} else {
    console.log(false);
}
console.log("Problem 2-s every");

function checkAge(person) {
    return person.age > 18;
}
var ar = generatedArray(5);
var result = ar.every(checkAge);
console.log(ar);
console.log(result);



// Problem 3. Underage people
// Write a function that prints all underaged persons of an array of person
// Use Array#filter and Array#forEach
// Use only array methods and no regular loops (for, while)

console.log("Problem 3");

function underAged(person) {
    return person.age < 18;
}
var arr = generatedArray(20);
var result = arr.filter(underAged);
console.log(result);

// Problem 4. Average age of females
// Write a function that calculates the average age of all females, extracted from an array of persons
// Use Array#filter
// Use only array methods and no regular loops (for, while)
console.log("Problem 4");

function females(person) {
    return person.gender === true;
}
var arr = generatedArray(5);
var onlyFemales = arr.filter(females);
var ageSum = 0;
onlyFemales.forEach(function(item) {
    return ageSum += item.age;
});
var averageAge = ageSum / onlyFemales.length;
console.log(onlyFemales);
console.log("The average female age is: " + averageAge);


// Problem 5. Youngest person
// Write a function that finds the youngest male person in a given array of people and prints his full name
// Use only array methods and no regular loops (for, while)
// Use Array#find
console.log("Problem 5");
function males(person) {
    return person.gender === false;
}
var arr = generatedArray(5);

arr.sort(function(a, b) {
    return a.age - b.age;
});
var onlyMales = arr.filter(males);
var yongest= onlyMales.find(function(item){
	return item.gender === false;
});

console.log(arr);
console.log(yongest);

// Problem 6. Group people
// Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
// Use Array#reduce
// Use only array methods and no regular loops (for, while)
console.log("Problem 6");

var arr = generatedArray(4);

var result = arr.reduce(function (group, item){
    var letter = item.firstname[0];

    if(!group[letter]){
        group[letter] = [];
    }
    group[letter].push(item);
    return group;

});
console.log(arr);
console.log(result); 