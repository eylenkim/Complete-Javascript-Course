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

/*
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
*/

///Lecture: 1st Class functions returning functions

//Example: function that returns multiple interview questions for different jobs
function interviewQuestion(job){
	if (job === 'designer') {
		return function(name) {
			console.log(name + ", can you explain what UX is?");
		}
	} else if (job === 'teacher') {
		return function(name) {
			console.log(name + ", what subject do you teach?");
		}
	} else {
		return function(name) {
			console.log(name + 'What do you do?');
		}
	}
}

//asign job function to a teacher variable
var teacherQuestion = interviewQuestion('teacher');
//assign name to the teacher job function
teacherQuestion('John'); // John, what subject do you teach?

//alternatively, you can do:
interviewQuestion('designer')('Eylen'); // Eylen, can you explain UX?



/////Lecture: Immediately invoked function expressions (IIFE)


/**weird way: if the only purpose is to hide the score variable from the
outside which means creating a private variable. then we don't need to declare
a whole function w/ a name and then call it 
		function game() {
			var score = Math.random() * 10;
			console.log(score >= 5);
		}

		game();

**/

//IIFE - better way
(function () {
	var score = Math.random() * 10;
	console.log(score >= 5);
})  
//invoke it: 
();

/*if you wrote this function ^^ without the outer parenthesis, then the 
JS parser will think this function has no name and will throw an error. With a 
parenthesis, you are creating an anonymous function and tricking the parser
into thinking it's a expresssion, not declaration. In JS, what's inside a 
parenthesis, cannot be a statement/declaration, it will treat it as an expression. **/

//console.log(score);

//adding good luck to increase probability of higher score
(function (goodluck) {
	var score = Math.random() * 10;
	//the higher the goodluck, the more it decreases 5 as the minimum basis
	console.log(score >= 5 - goodluck);
})  
//invoke it and put 5 as goodluck parameter: 
(2);


/////Lecture: Closures
/* A closure is the combination of a function bundled together (enclosed) 
with references to its surrounding state (lexical environment). In other words,
a closure gives you access to an outer function's scope from an inner function.

Closures are created when a function is created.

To use a closure, define a function inside another function and expose it.
To expose it, return it or pass it onto another function.

Use cases for closure: Closures are commonly used to give objects data privacy.  
When you use closures for data privacy, the enclosed variables are only in scope within 
the containing (outer) function. You can’t get at the data from an outside scope except 
through the object’s privileged methods.
*/

//Closure example:
function retirement(retirementAge) {
	var a = ' years left until retirement.';
	//This function uses retirementAge parameter AND 'a' variable outside of function
	return function(yearOfBirth) {
		var age = 2020 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
retirementUS(1997);
//or:
retirement(66)(1997);


//Closure example from previous lecture:
/* Non-closure example 
function interviewQuestion(job){
	if (job === 'designer') {
		return function(name) {
			console.log(name + ", can you explain what UX is?");
		}
	} else if (job === 'teacher') {
		return function(name) {
			console.log(name + ", what subject do you teach?");
		}
	} else {
		return function(name) {
			console.log(name + 'What do you do?');
		}
	}
}
*/
//Closure example:
function interviewQuestionClosure(job) {
	return function (name) {
	if (job === 'designer') {
			console.log(name + ", can you explain what UX is?");
	} else if (job === 'teacher') {
			console.log(name + ", what subject do you teach?");
	} else {
			console.log(name + 'What do you do?');
	  }

	}
};

interviewQuestionClosure('designer')('Eylen');


//////Lecture: Bind, Call, and Apply

//Example:
var pat = {
	name: 'Pat',
	age: 22,
	job: 'Environmental Scientist',
	presentation: function (style, timeOfDay) {
		if (style === 'formal') {
			console.log('good morning ladies n gents. How is everyone\'s ' + 
				timeOfDay + ' going? I\'m ' + this.name 
				+ ', I\'m a ' + this.age + ' year old ' + this.job + '.');
		} else if (style === 'casual') {
			console.log('What\'s good my dude? How is everyone\'s ' + timeOfDay 
				+ ' going? I\'m ' + this.name + ', I\'m a ' + this.age + ' year old ' + this.job + '.');
		}
	}
};

pat.presentation('casual', 'morning');

//another object w/o presentation method
var memus = {
	name: 'Memus',
	age: 5,
	job: 'cat'
};

//how to use CALL on mimi object to use presentation method from pat object
		//the memus parameter is explicitly calling the THIS variable
pat.presentation.call(memus, 'formal', 'afternoon');

//pat.presentation.apply(memus, ['friendly', 'mid-morning'])

/**Bind method - its similar to call method, but it doesn't immediately call 
the method but instead generates a copy of the function so you can store it;
this can be useful for functions with preset arguments **/
var patFriendly = pat.presentation.bind(pat, 'casual');
patFriendly('morning');
patFriendly('night');

var memusFormal = pat.presentation.bind(memus, 'formal');
memusFormal('afternoon');



//Example of bind method but from previous callback function example

var years = [1997, 2003, 1969, 2001, 2020];

function calcAge (element) {
	return 2020- element;
}

function arrayCalc(arr, func) {
	var arrayResult = [];

	for (var i=0; i < arr.length; i++) {
		//adding/pushing the result of the func funcution into arrayResult
		arrayResult.push(func(arr[i]));
	}
	return arrayResult;
}


var ages = arrayCalc(years, calcAge);
console.log(ages);


//another example that takes recent array "ages"
function isFullAge(element) {
	//if age is greater than or equal to 18, TRUE is returned
	return element >=18;
}

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);





function calcAge (element) {
	return 2020 - element;
}
//

function isFullAge(limit, element) {
	return element >= limit;
}

var ages = arrayCalc(years, calcAge);

var fullAgeJapan = arrayCalc(ages,isFullAge.bind());


//////Coding Quiz Coding Challenge:

//build a function constructor
class Question = {
	constructor(question, answersArray, answerIndex) {
		this.question = question;
		this.answersArray = answersArray;
		this.answerIndex = answerIndex;
	}
}


//create questions using the constructor
const question1 = new Question(
	'Which of the nicknames for MiMi are NOT real?',
	['Memus Mimarius', 'Miamou', 'Cute Kitten', 'Lil Miss'],
	2);
const question2 = new Question (
	'What type of guitar does Eylen play?', ['Telecaster', 'Stratocaster', 'First Act'], 1);
const question3 = new Question (
	'In the show \"The Office\", who is the one character that doesn\'t know their official job title?', ['Kevin', 'Kelly', 'Creed', 'Meredith'], 2);

//store all the questions inside an array
let questions = [question1, question2, question3];

//generate a random question from the questions array
var randomQuestion = Math.floor(Math.random() * questions.length);

//use the random number as an index to grab a random question and console log it w/ the answers








