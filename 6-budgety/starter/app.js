//BUDGET CONTROLLER
var budgetController = (function() {

	//a constructor is perfect for creating LOTS of objects (ie: expense and income input objects)
	class Expense {
		constructor(id, description, value) {
			this.id = id;
			this.description = description;
			this.value = value;
		}
	};

	class Income {
		constructor(id, description, value) {
			this.id = id;
			this.description = description;
			this.value = value;
		}
	};

}) ();



//UI CONTROLLER
var UIController = (function(){

//this object stores all our querySelector strings in one place; that way if we change the name of one of the strings, it will reflect everywhere else
	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	};


	return {
		//receive inputted values from +/-, add desc, and value fields. 
		getInput: function(){
			//the reason we put all 3 in the getInput object, is because we want to return all 3 together
			return {
				type: document.querySelector(DOMstrings.inputType).value,
			    description: document.querySelector(DOMstrings.inputDescription).value,
			    value: document.querySelector(DOMstrings.inputValue).value
		   };
		},

		//return your private DOMstrings so its exposes it to the public, so the other controller can access it
		getDOMstrings: function() {
			return DOMstrings;
		}
	}

}) ();







//GLOBAL APP CONTROLLER - this is the central place where you control what happens to each event, and then delegate these tasks to the other controllers
var controller = (function(budgetCtrl, UICtrl) {

	//initialize all the event listeners. These ALL need to be publically called, since they're private
	var setupEventListeners = function() {

		//call the DOMstrings from ui controller so you can access them here:
	        var DOM = UICtrl.getDOMstrings();

		//Add Field values button (green check mark)
			document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

		/**You also want the controller/add__btn to work when we hit enter, instead of clicking it.
		This is called a key press event - we are applying it globally and not using querySelector
		because when you hit enter, it doesn't happen on any specific element, only the global document
		**/
			document.addEventListener('keypress', function(event){
			  //I found the keyCode property by console.logging event. Each key has a code.
			  //some older browsers don't use keyCode property, so 'which' works too
				if (event.keyCode === 13 || event.which === 13) {
					ctrlAddItem();
				}
			});
	};

	//we are creating this as part of DRY principle so we can write our code once, but use it in .add__btn and keypress fucntion
	var ctrlAddItem = function() {

		// get field input data
		var input = UICtrl.getInput();

		//add the item to the budget controller

		//add the new item to the UI

		//calc the budget

		//display the budget

	};

	//public init function to publicize the setupEventListener private function. You need to return it in an object to make it public.
		return {
			init: function() {
				console.log('Application has started');
				setupEventListeners();
			}
		};

}) (budgetController, UIController);

//we invoke it on the outside of the private function
controller.init();