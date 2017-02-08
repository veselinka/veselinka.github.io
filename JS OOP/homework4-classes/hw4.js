class Person{
	constructor(name,age){
			this._name=name;
	this._age=age;
	}
}
function getPerson(name,age){
	return{
		sayHello: function(){
			console.log('hi, my name is ${name} and i am ${age}');
		}
	}
}


var p = new Person("Vessy",25);
p._name="Gosho";
console.log(p);

p=getPerson("veska",26);
p.sayHello();