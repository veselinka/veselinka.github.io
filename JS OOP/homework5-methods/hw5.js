// const VALIDATOR={
// 	validateAge: function(age){
// 				if(age<0){
// 			throw new Error('Age must be positive');
// 		}
// 	}
// }


// //1vi variant - tova e s ES6
//  class Cat {
// constructor (name) {
// 	this._name=name;
// 	this._silenced = false;
// 	this.age=5;
// 	}
// 	static whatDoesTheCatSay(){
// 		return 'meow';
// 	}

// 	meow() {
// 		if(this._silenced){
// 			return;
// 		}
// 		console.log(this._name+ ': meow!');
// 	}
// 	silence(){
// 		this._silenced = true;
// 	}

// 	get age(){
// 		return this._age;
// 	}
// 	set age(newAge){
// 		VALIDATOR.validateAge(newAge);
// 		this._age = newAge;
// 	}
// 	get name(){
// 		return this._name;
// 	}
// 	set name(x){
// 		throw new Error ('Name cant ne changed');
// 	}
// }
// const p = new Cat("Ketty");
// p.meow();
// //console.log(p.age);
// p.age=3;
// //console.log(p.age);
// //console.log(Cat.whatDoesTheCatSay());

// let x=[];
// x.push(4);
// x.push(3);
// x.map(x=>x*2).forEach(x=>console.log(x));

// //console.log(Array.isArray(x));
// console.log(Cat.prototype);




// 2ri variant - stariqt standart
function Dog(name){
	this._name=name;
	this._silenced = false;
	Dog.prototype.bark=function(){
		if(this._silenced){
			return;
		}
		console.log(this._name+ ': says bark!');
	}
	Dog.prototype.silence = function(){
		this._silenced = true;
	}
	Object.defineProperty(Dog.prototype, 'name', {
		get: function(){
			return this._name;
		},
		set: function(newName){
			this._name=newName;
		}
	})
	Object.defineProperty(Dog, 'whatDoesTheDogSay', {
		get: function(){
			return 'Bark';
		}
	})
}
const d=new Dog("Sharo");
d.bark();
d.silence();
console.log(d.name);
d.name = 'Pesho';
console.log(d);
console.log(Dog.prototype);
console.log(Dog.whatDoesTheDogSay);

