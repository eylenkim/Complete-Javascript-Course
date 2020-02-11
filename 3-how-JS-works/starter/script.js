///////////////////////////////////////
/** Execution Context

-Execution context is the environment where your code is ran
-E.C is a box, container, or wrapper which stores variables and in 
 which a piece of our code is evaluated and executed
-The default execution context is called Global Execution Context; it is 
code that is not inside any function, it IS associated with a global object,
 in a browser, this is the winIdow object 
-On the other hand, code that IS inside another function


**/
// Lecture: Hoisting


////////// FUNCTION HOISTING ////////////

/** this is a function declaration, 
in which hoisting works (calling the function before declaration) **/

calcAge(1996);

function calcAge(year){
    console.log(2020 - year);
}

//result: 23

/**this is not a function declaration, it's a function expression, 
in which hoisting DOES NOT work (it doesn't work to call a function before an expression) **/

// retirement(1997); * this is commented out so it doesn't produce any more errors

var retirement = function (year) {
    console.log(65 - (2020-year));
}

//result: error message

////////// VARIABLE HOISTING ////////////

console.log(age);

//result: ReferenceError: age is not defined - JS has no knowledge of the age variable bcs it hasn't been declared

console.log(age);
var age = 22;

// result: undefined - JS knows that there is an age variable declared, but it's simply undefined with a value

function foo() {
    var age = 65;
    console.log(age);
}
foo(); // result: 65
console.log(age); // result: 23 because of the global age variable - that age variable is stored in the global execution context



///////////////////////////////////////
// Lecture: Scoping

//Lexical scoping: if function b is inside function a, then function b gets access to the scope of function a, and so on

// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

//result: hello + hi + hey! - this works because of the scoping chain + lexical scoping



// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}


//RESULT: ReferenceError: var c is not defined in third()
//also, only var a & var d are logged for third(). Var b and c are not within scope.

///////////////////////////////////////
// Lecture: The this keyword

/* REGULAR FUNCTIONAL CALL: the this keyword points at the global/window object (this is the default)
METHOD CALL (function tied to an object): the this variable points to the object that is calling the method

The this keyword is not assigned a value until a function where it's defined at is called
*/
//console.log(this);
//result: Window object - this is the default object


 

calcAge(1997);

function calcAge(year) {
    console.log(2020-year);
    console.log(this);
}


//result of this: still the window object, not calcAge - because this is a regular function call, not method


var eylen = {
    name: 'Eylen',
    DOB: 1997,
    //method callL
    calcAge: function(){
        console.log(this);
        console.log(2020-this.DOB);

        //regular function call inside a method
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
}

eylen.calcAge();
//result w/o inner function (): tis keyword is the 'eylen' object because it's a METHOD call.
// result w/  innerFunction(): this keyword is the Window object because it was a REGULAR function call (written inside a method)


/////Method Borrowing
var mimi = {
    name: 'MiMi',
    DOB: 2015

}
//Method borrowing - we are borrowing 'eylen' objects method and using it inside 'mimi' object 
mimi.calcAge = eylen.calcAge;
mimi.calcAge(); // result: 5

console.log(mimi); 
//result: mimi object has the keys: name, dob, and calcage!

///Conclusion about this: 'this' is useful for when you are method borrowing or inheriting stuff inside objects







