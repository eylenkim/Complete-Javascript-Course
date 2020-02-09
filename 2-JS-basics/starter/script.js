// Coding Chalenge 1
var MarkHeight = 1.69;
var MarkMass =  78;
var JohnHeight = 1.95;
var JohnMass = 92;

var MarkBMI = MarkMass / (MarkHeight * MarkHeight);
var JohnBMI = JohnMass / (JohnHeight * JohnHeight);


var MarkBMIHigher = MarkBMI > JohnBMI;

console.log('Is Marks BMI higher than Johns?' + MarkBMIHigher);




// Coding Challenge 2
var johnTeamAvg = (89 + 120 + 103) / 3;
var mikeTeamAvg = (116 + 94 + 123) / 3;
var maryTeamAvg = (97 + 134 + 105) / 3;

(johnTeamAvg > mikeTeamAvg) ? console.log("John\'s Team Wins with an average of " + johnTeamAvg) : 
console.log("Mike\'s Team Wins with an average of " + mikeTeamAvg);

(maryTeamAvg > johnTeamAvg && maryTeamAvg > mikeTeamAvg) ? console.log("Mary wins with " + maryTeamAvg) :
console.log("boohoo mary loses");




//Coding Challenge 3
function tipCalc(total) {
	if (total < 50) {
		tip = .2;
	} else if (total >= 50 && total < 200) {
		tip = .15;
	} else {
	    tip = .1;
	}
	return tip * total;
}

console.log(tipCalc(300));

var bills = [124, 48, 268];
var tips = [tipCalc(bills[0]), tipCalc(bills[1]),tipCalc(bills[2])];

console.log(bills);
console.log(tips);



// Coding Challenge 4
let Mark = {
	name: 'Mark',
	mass: 78,
	height: 1.68,
	calcBMI: function(){
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;

	}
}

let John = {
	name: 'John',
	mass: 92,
	height: 1.95,
	calcBMI: function(){
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}


/**Mark.calcBMI(); //This runs the function and adds this.bmi as an object
John.calcBMI();
console.log(Mark);
console.log(John);

var MarkBMIhigh = Mark.bmi > John.bmi;

console.log('It is ' + MarkBMIhigh + ' that ' + Mark.name +  ' has a higher BMI than ' 
	+ John.name + ' where Mark has a BMI of ' + Mark.bmi + ' and John has a BMI of ' +
	John.bmi);

**/
console.log(John.calcBMI());
console.log(Mark.calcBMI());

if (John.calcBMI() > Mark.calcBMI()) {
	console.log(John.name + ' has a higher BMI than ' + Mark.name + ' with a BMI of ' + John.bmi);
} else if (Mark.calcBMI() > John.calcBMI()) {
	console.log(Mark.name + ' has a higher BMI than ' + John.name + ' with a BMI of ' + Mark.bmi);
} else {
	console.log('It\'s a tie!');
}



// Coding Challenge 5.1
var JohnEatsOut = {
	Bills: [124, 48, 268, 180, 42],
	calcTips: function (){
	    this.allTips = [];
	    this.subTotal = [];

		for(var i = 0; i < this.Bills.length; i++) {

			var tips;
			var bills = this.Bills[i];

			if (bills < 50) {
				tips = .2;
			} else if (bills >= 50 && bills < 200) {
				tips = .15;
			} else {
				tips = .1;
			}

			this.allTips[i] = bills * tips;
			this.subTotal[i] = bills + bills * tips;
		}
	}
}

//run the function
JohnEatsOut.calcTips();
console.log(JohnEatsOut);



//Coding Challenge 5.2
var MarkEatsOut = {
	bills: [77, 375, 110, 45],
	calcTips: function () {
		
		this.allTips = [];
		this.subTotal = [];

		for (var i=0; i < this.bills.length; i++) {
			var bills = this.bills[i];
		    var tips;

			if (bills < 50) {
				tips = .2;
			} else if (bills >= 50 && bills < 200) {
				tips = .15;
			} else {
				tips = .1;
			}

			this.allTips[i] = tips * bills;
			this.subTotal[i] = bills + (bills * tips)
		} 
	}
}

MarkEatsOut.calcTips();
console.log(MarkEatsOut);


//Coding Challenge 5.3
function avgArray(nameOfArray) {
	var inputs = nameOfArray.length;
	var sum = 0;

	for (var i=0; i < inputs; i++) {
		sum = sum + nameOfArray[i];
        	
	} 
	return sum / inputs;
}

JohnEatsOut.calcTips();
MarkEatsOut.calcTips();

JohnEatsOut.Average = avgArray(JohnEatsOut.allTips);
MarkEatsOut.Average = avgArray(MarkEatsOut.allTips);
console.log(JohnEatsOut, MarkEatsOut);











































