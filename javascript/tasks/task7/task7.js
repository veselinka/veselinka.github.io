// Problem 1. Planar coordinates
// Write functions for working with shapes in standard Planar coordinate system.
// Points are represented by coordinates P(X, Y)
// Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
// Calculate the distance between two points.
// Check if three segment lines can form a triangle.
 console.log("Problem 1");


function triangle(x1,x2,y1,y2){
var p1 = (x1, y1);
var p2 = (x2, y2);
var a = Math.abs(x1 - x2);
var b = Math.abs(y1 - y2);
var distance = Math.sqrt((a * a) + (b * b));
if ( (distance < a + b) && (a<distance+b) && (b<distance+a)) {
    console.log("There is a triangle");
} else {
    console.log("no such triangle");
}

}
triangle(2,6,4,1);
triangle(1,1,2,2);




// Problem 2. Remove elements
// Write a function that removes all elements with a given value.
// Attach it to the array type.
console.log("Problem 2");

function removeElements(num) {
    var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
    for (var len = arr.length, i = 0; i < len; i += 1) {
        if (arr[i] === num) {
            arr.splice(i, 1);
        }
    }
    console.log(arr);
};
removeElements(1);
removeElements(2);
removeElements(3);
removeElements(4);
removeElements(111);


// Problem 3. Deep copy
// Write a function that makes a deep copy of an object.
// The function should work for both primitive and reference types.
console.log("Problem 3");

function clone(objects) {
    if (objects == null || typeof objects != "object") {
        return obj;
    }
    for (var attr in obj) {
        copy[attr] = clone(objects[attr]);
    }
    return copy;
}
console.log("Pesho");
console.log(null);


// Problem 4. Has property
// Write a function that checks if a given object contains a given property.
console.log("Problem 4");

var obj = { firstname: 'Gosho', lastname: 'Petrov', age: 32 };

console.log(obj.hasOwnProperty('firstname'));
console.log(obj.hasOwnProperty('ghghgf'));

// Problem 5. Youngest person
// Write a function that finds the youngest person in a given array of people and prints his/hers full name
// Each person has properties firstname, lastname and age.
console.log("Problem 5");

   var people = [
        { firstname: 'Veselinka', lastname: 'Blazheva', age: 24 },
        { firstname: 'Petar', lastname: 'Petrov', age: 30 },
        { firstname: 'Petranka', lastname: 'Petrova', age: 40 },
        { firstname: 'Ivanka', lastname: 'Ivanova', age: 17 },

    ];
    var minAge = people[0].age;
    var index=0;
function youngest() {
 

    for (var i = 0; i < people.length; i++) {
        if (people[i].age < minAge) {
            minAge = people[i].age;
            index=i;
            
        }
    }
    console.log("The youngest person is: "+people[index].firstname+" "+people[index].lastname+" - " + people[index].age+" years old.");
}
youngest();


//   Problem 6.
// Write a function that groups an array of people by age, first or last name.
// The function must return an associative array, with keys - the groups, and values - arrays with people in this groups

console.log("Problem 6");
var myArray = [
    { firstname: 'Veselinka', lastname: 'Blazheva', age: 45 },
    { firstname: 'Petar', lastname: 'Petrov', age: 45 },
    { firstname: 'Petar', lastname: 'Petrov', age: 40 },
];

var groups = {};
for (var i = 0; i < myArray.length; i++) {
    var groupName = myArray[i].age;
    if (!groups[groupName]) {
        groups[groupName] = [];
    }
    groups[groupName].push(myArray[i].firstname + " " + myArray[i].lastname);
}
myArray = [];
for (var groupName in groups) {
    myArray.push({
        age: groupName,
        "names": groups[groupName]
    });
}
console.log(myArray);


