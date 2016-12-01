// Undefined
var nothing;
var something=undefined;
console.log(typeof(nothing));
console.log(something);
console.log(typeof(undeclaredVariable));

// String
var someString="2+2+2";
console.log(someString+"-"+typeof(someString));
var otherString="";
console.log(otherString+"-"+typeof(otherString));
var thirdString=String("asfgdfgdfg");
console.log(thirdString+"-"+typeof(thirdString));
var myName = "Vessy";
myName = "Veselinka";
console.log("My name is " + myName + "-" + typeof(myName));
var myCountry = "beautiful Bulgaria";
console.log("My country is " + myCountry.substring(10, 18) + "-" + typeof(myCountry));


// Number
var myAge;
myAge = 24;
console.log("My age is " + myAge + "-" + typeof(myAge));
var PI = 3.14;
console.log(PI+"-"+typeof(PI));
var floating = 35.2353454;
console.log (floating+"-"+(typeof(floating)));
var sqrt=Math.sqrt(16);
console.log(sqrt+"-"+typeof(sqrt));
var anyNumber=Infinity;
console.log(anyNumber+"-"+typeof(anyNumber));
var otherNumber = NaN;
console.log(otherNumber+"-"+typeof(otherNumber));

// Object
var months;
months = ["jan", "feb", "march", "april", "may", "june", "july"];
console.log("My birthday is in " + months[5] + "-" + typeof(months));
var childs=null;
console.log(typeof(childs));
var a=5;
var a=new Number(6);
console.log(a+"-"+typeof(a));



// Boolean
var myFirstUniversity="Tu-Sofia";
var mySecondUniversity="Unibit";
console.log("Uchila sum v "+myFirstUniversity+" i "+mySecondUniversity+"-"+typeof(myFirstUniversity===mySecondUniversity));

var a=5;
var b=5;
console.log (typeof(a===b));

var hot=true;
console.log(hot+"-"+typeof(hot));


// Quated text
var question='"How you doing"-Joey said';
console.log(question+"-"+typeof(question));
var question2="\"How you doing\"-Joey said";
console.log(question2+"-"+typeof(question2));

