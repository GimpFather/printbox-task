class React {
	width; //This value should be Number
	height; //This value should be Number
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
}

const tab = [
	new React(1, 1),
	new React(2, 2),
	new React(3, 3),
	new React(1, 2),
];

const result = taskLogic(tab, 2);
console.log(result);

// This is the starting code that Printbox gave me.
// We gonna continue, by doing "taskLogic" function.
// Currently there should be an error that says "Uncaught ReferenceError: taskLogic is not defined"
