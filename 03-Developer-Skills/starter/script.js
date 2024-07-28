// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
const x = 27;

console.log(x);

// BUG
// FIXME

const measureKelvin = function () {
	const measurement = {
		type: "temp",
		unit: "celsius",
		value: Number(prompt("Degree celsius:")),
	};
	console.table(measurement);

	const kelvin = measurement.value + 273;
	return kelvin;
};
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
	const temps = t1.concat(t2);
	console.log(temps);

	let max = 0;
	let min = 0;

	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== "number") continue;

		// debugger;
		if (curTemp > max) max = curTemp;
		if (curTemp < min) min = curTemp;
	}
	console.log(max, min);
	return max - min;
};
const amplitudeNew = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeNew);
*/

function printForecast(arr) {
	let str = "";
	for (let i = 0; i < arr.length; i++) {
		str += `...${arr[i]}*C in ${i + 1} days `;
	}
	console.log(str);
}

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

printForecast(arr1);
printForecast(arr2);
