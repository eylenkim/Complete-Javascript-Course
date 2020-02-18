//Every Js object has a prototype property, 
//which makes inheritance possible in js

//The prototype property of an objecti s where we 
//put methods and properties that we want other objects to inherit

//The constructors prototype property is not the prototype of the constructor itself,
//is the prototype of all instances that are created through it

//Create an empty object which can be modified by 
//adding as many properties as you'd like
class Person {
	constructor(name, DOB, job) {
		this.name = name;
	    this.DOB = DOB;
	    this.job = job;
	    this.calcAge = function() {
	    	console.log(2020 - this.DOB);
	    }
	}
}

/** Adds a "Residence: Washington" prototype to every object that is an 
instance of Person class. Normally, you can't add a new property to an existing
object constructor by just doing Person.Residence = "Washington". You have to do
that inside the constructor function or by using the prototype proerty like below:
**/
Person.prototype.residence = 'Washington';

//Create a mimi object. These objects inside the paramaters 
//are instances of the Person objects [aka instantiation]
const mimi = new Person('MiMi', 2015, 'cat');

console.log(mimi.name); // MiMi

mimi.calcAge(); // 5

/////////////Lecture: Prototype Chain in the Console:
//All JavaScript objects inherit properties and methods from a prototype.

/* In the console, you can type in, for example, mimi, and it would show you that
it belongs to an object named Mimi which is an instance of the Person class

Inside the Person class, if you clicked on __proto__ you would find it's prototype
which was declared on line 25; which is Residence and calcAge
*/

//You can check in the console if a certain property exists in a constructor:
	//mimi.hasOwnProperty('job');
//console returns True because mimi object DOES have a property called job

	//mimi instanceof Person // result: true


/** 'New' operator

1 Create a new object named maddie
2 maddie inherits the prototype of the constructor function
3 Executes constructor with “this” set to object created in step one.
4 returns created object (unless constructor returns the object)
*/

var Dog = function(){
    this.eatFood = 'NomNomNom';
    this.eat = function(){
        console.log(this.eatFood)
    }
};

var maddie = new(Dog);
console.log(maddie instanceof Dog); // True
maddie.eatFood = 'NomNomnom';
maddie.eat(); //NomNomNom



///////////Lecture: Primitives vs Objects

/** Primitives: variables containing primitives actually hold the data inside the
variable itself

Object: variables associated with objects do not actually contain the object,
instead they contain the reference to where the object is stored
**/

//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a); //46
console.log(b); // 23

//Objects
var objecta = {
	name: 'Eylen',
	age: 22
};
var objectb = objecta;
objecta.age = 30;
console.log(objecta.age); // 30
console.log(objectb.age); // 30
/**It's not strange that both are 30, because we didn't create a copy of a new object.
in line 97, we created a reference from objectb to objecta. Meaning, any changes on
objecta reflects on objectb.
**/

//Functions
var age = 22;
var obj = {
	name: 'Eylen',
	city: 'Bham'
};

function change(a, b) {
	a = 30;
	b.city = "Seattle";
}

change(age, obj);
console.log(age); //22
console.log(obj.city); // Seattle
/* This shows that when we pass a primitive thru the function, a copy is created;
meaning, we can change var a as much as want, but it won't change the variable on
the outside(age). 
*/


/////////Lecture: 1st Class functions: passing functions as arguements

var years = [1997, 2003, 1969, 2001, 2020];

function arrayCalc(arr, func) {
	var arrayResult = [];

	for (var i=0; i < arr.length; i++) {
		//adding/pushing the result of the func funcution into arrayResult
		arrayResult.push(func(arr[i]));
	}
	return arrayResult;
}

function calcAge (element) {
	return 2020- element;
}