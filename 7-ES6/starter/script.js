class NameAndBuild {
	constructor(name, buildYear){
		this.name = name;
		this.buildYear = buildYear;
	}
}



////////////parks

class Parks extends NameAndBuild {
	constructor (name, buildYear, area, numTrees) {
		super (name, buildYear);
		this.area = area;
		this.numTrees = numTrees;
	}
}

Parks.prototype.treeDensity () {
	const density = this.numTrees / this.area;
    console.log(`${this.name} has a tree density of ${density} trees per square km.`);
 }


const allParks = [new Parks('Green Park', 1987, 0.2, 215),
                 new Parks('National Park', 1894, 2.9, 3541),
                 new Parks('Oak Park', 1953, 0.4, 949)];



//////////////streets

class Streets extends NameAndBuild {
	constructor (name, builtYear, length, size = 3) {
		super (name, buildYear);
		this.length = length;
		this.size = size;
	}

}

Streets.prototype.classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }



const allStreets = [new Streets('Ocean Avenue', 1999, 1.1, 4),
                   new Streets('Evergreen Street', 2008, 2.7, 2),
                   new Streets('4th Street', 2015, 0.8),
                   new Streets('Sunset Boulevard', 1982, 2.5, 5)];




//report

function reportParks(p) {
	console.log(`----PARKS REPORT----`);

	//density
	 //we are looping through each one of our parks (p). For each park, we use the treeDensity() method.
	p.forEach(el => el.treeDensity());
	
}


	//average age


	//which park has >1000 trees

function reportStreets(s) {
	
}















