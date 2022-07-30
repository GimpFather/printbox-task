class Rect {
	width; //This value should be Number
	height; //This value should be Number
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
}

const tab = [new Rect(1, 1), new Rect(2, 2), new Rect(3, 3), new Rect(1, 2)];

const main = (rectangles, exportNumber) => {
	getAllSurfaces(rectangles);
	calculateAverage(rectangles);
	getClosestAreas(exportNumber);
};

let surfaceArea = 0;
let closestNumber = 0;
let averageSurfaceArea = 0;
let surfacesArray = [];

const getAllSurfaces = (rectangles) => {
	rectangles.forEach((rectangle) => {
		let rectangleArea = rectangle.width * rectangle.height;
		surfaceArea += rectangleArea;
		surfacesArray.push(rectangleArea);
	});
	console.log("List of all areas: " + surfacesArray);
};

const calculateAverage = (rectangles) => {
	averageSurfaceArea = surfaceArea = surfaceArea / rectangles.length;
	console.log("The average surface area: " + averageSurfaceArea);
};

const getClosestAreas = (exportNumber) => {
	let finnalArray = [];
	for (let executions = 0; executions < exportNumber; executions++) {
		closestNumber = surfacesArray.reduce((prevValue, currValue) => {
			return Math.abs(currValue - averageSurfaceArea) <
				Math.abs(prevValue - averageSurfaceArea)
				? currValue
				: prevValue;
		});

		surfacesArray = surfacesArray.filter(
			(element) => element !== closestNumber
		);
		console.log("Thats a winning value: " + closestNumber);
		finnalArray.push(closestNumber);
	}

	console.log("Closest numbers: " + finnalArray);
};

main(tab, 2);
