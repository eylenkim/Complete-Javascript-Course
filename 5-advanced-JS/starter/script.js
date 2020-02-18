//Every Js object has a prototype property, 
//which makes inheritance possible in js

//The prototype property of an objecti s where we 
//put methods and properties that we want other objects to inherit

//The constructors prototype property is not the prototype of the constructor itself,
//is the prototype of all instances that are created through it


//Object Literal
var mimi = {
	name: 'MiMi',
	DOB: 2015,
	job: 'cat'
}

/////Function Constructor
var Person = function(name, DOB, job) {
	this.name = name;
	this.DOB = DOB;
	this.job = job;
	console.log(this);
}

//Create a mimi objectcat. These objects inside the paramaters 
//are instances of the Person objects [aka instantiation]
var mimi = new Person('MiMi', 2015, 'cat');