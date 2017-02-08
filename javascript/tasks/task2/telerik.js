// // Problem 1. Odd or Even
// // Write an expression that checks if given integer is odd or even.
// function solve(args) {
//     var number = + args[0];
//     if (number >= -30 && number<= 30) {
//         if (number % 2 == 0) {
//             console.log( "even "+number );
//         } else {
//             console.log( "odd "+number );
//         }
//     }
//     else{
//         console.log( "ERROR" );
//     }
// }
// solve(['3']);
// solve(['2']);
// solve(['-2']);
// solve(['-1']);
// solve(['0']);



// // Problem 2. Divisible by 7 and 5
// // Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.


// function solve(args){
//     var num = + args[0];
//     if(num % 35==0){
// return 'true '+num;
// } else {
// return 'false '+num;
//     }
// }



// function divisible(num) {
//     if ((num % 7 == 0) && (num % 5 == 0)) {
//         return console.log("True - The number is divisible by 7 and 5");
//     } else {
//         return console.log("False - The number is not divisible by 7 and 5");
//     }
// };
// divisible(3);
// divisible(0);
// divisible(5);
// divisible(7);
// divisible(35);
// divisible(140);


// // Problem 3. Rectangle area
// // Write an expression that calculates rectangle’s area by given width and height.

// function solve(args) {
//     var width = + args[0];
//     var height = + args[1];
//     var perimeter = 2 * width + 2 * height;
//     var area = width * height;
//     console.log(area.toFixed(2) + " " + perimeter.toFixed(2));
// }
// solve(['3','4']);
// solve(['2.5','3']);
// solve(['5','5']);


// // // Problem 4. Third digit
// // // Write an expression that checks for given integer if its third digit (right-to-left) is 7.

// function solve(args) {
//     var nToString = args.toString();
//      var duljina = nToString.length;
//      var third = nToString.charAt(duljina - 3);
//     if (duljina < 3) {
//         console.log(false+" 0");
//     } else {
//         if (7==third) {
//             console.log(true);
//         } else {
//             console.log(false + " "+ third);
//         }
//     }
// }

// str(5);
// str(701);
// str(1732);
// str(9703);
// str(877);
// str(777877);
// str(9999799);


// // // Problem 5. Third bit
// // // Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
// // // The bits are counted from right to left, starting from bit #0.
// // // The result of the expression should be either 1 or 0.

// function solve(args) {
//     var bit = args[0];
//        console.log( (bit >> 3) & 1);
// }
//     solve(['0']);
//     solve(['15']);
//     solve(['1024']);
//     solve(['5']);
//     solve(['8']);
//     solve(['0']);
//     solve(['15']);
//     solve(['5343']);
//     solve(['62241']);


// // // Problem 6. Point in Circle
// // // Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5). 
// // // {0,0} is the centre and 5 is the radius

// function circlePoint(args) {
// var x = +args[0];
// var y = +args[1];
// var d = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
// 	if (d<=2) {
// 		console.log("yes "+ d.toFixed(2));
// 	}
// 	else{
// 		console.log("no "+ d.toFixed(2));
// 	}
// }

// circlePoint(['-2', '0']);
// circlePoint(['-1', '2']);
// circlePoint(['1.5', '-1']);

// // circlePoint([0,1]);
// // circlePoint([-5,0]);
// // circlePoint([-4,5]);
// // circlePoint([1.5,-3]);
// // circlePoint([-4,-3.5]);
// // circlePoint([100,-30]);
// // circlePoint([0,0]);
// // circlePoint([0.2,-0.8]);
// // circlePoint([0.9,-4.93]);
// // circlePoint([2,2.655]);


// // // Problem 7. Is prime
// // // Write an expression that checks if given positive integer number n (n ≤ 100) is prime.


// function isPrime(args) {
//     var value = +args[0];
//     for(var i = 2; i < value; i++) {
//         if(value % i === 0) {
//             return false;
//         }
//     }
//     return value > 1;
// }


// isPrime(['2']);
// isPrime(['23']);
// isPrime(['-3']);
// isPrime(['0']);
// isPrime(['1']);
// isPrime(['37']);
// isPrime(['9']);



// // Problem 8. Trapezoid area
// // Write an expression that calculates trapezoid's area by given sides a and b and height h.

// function trapezoid(args){
// var a=+args[0];
// var b=+args[1];
// var h=+args[2];
// var area = ((a+b)/2)*h;
// console.log(area.toFixed(7));
// };
// trapezoid([5,7,12]);
// trapezoid([2,1,33]);
// trapezoid([8.5,4.3,2.7]);
// trapezoid([100,200,300]);
// trapezoid([0.222,0.333,0.555]);


// // Problem 9. Point in Circle and outside Rectangle
// // Write an expression that checks for given point P(x, y) 
// // if it is within the circle K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2).

function insideKandOutsideR(x,y){
	var insideK=Math.pow(x-1,2)+Math.pow(y-1,2)<=3;
	var outsideR=x>=-1 && x<=5 && y>=-1 && y<=1;
	if (insideK==true && outsideR==false){
		console.log("yes");
	}
	else{
		console.log("no");
	}
}


function insideKandOutsideR(args){
    var x=+args[0];
    var y=+args[1];
    var insideK=Math.sqrt(Math.pow(x-1,2)+Math.pow(y-1,2))<=1.5;
    var insideR = x>=-1 && x<=5 && y>=-1 && y<=1;
    if (insideK==true && insideR==true){
        console.log("inside circle inside rectangle");
    }
    else if (insideK==true && insideR==false){
        console.log("inside circle outside rectangle");
    }   
    else if (insideK==false && insideR==false){
        console.log("outside circle outside rectangle");
    }
    else {
        console.log("outside circle inside rectangle");
    }
};
// insideKandOutsideR([-1,1]);
// insideKandOutsideR([1,4]);
// insideKandOutsideR([3,2]);
// insideKandOutsideR([0,1]);
// insideKandOutsideR([4,1]);
// insideKandOutsideR([2,0]);
// insideKandOutsideR([4,0]);
// insideKandOutsideR([2.5,1.5]);
// insideKandOutsideR([3.5,1.5]);
// insideKandOutsideR([-100,-100]);

insideKandOutsideR(['2.5', '2']);
insideKandOutsideR(['0', '1']);
insideKandOutsideR(['2.5', '1']);
insideKandOutsideR(['1', '2']);
