const data = [
	{ principal: 2500, time: 1.8 },
	{ principal: 1000, time: 5 },
	{ principal: 3000, time: 1 },
	{ principal: 2000, time: 3 }
];

function interestCalculator(array) {
	let interestData = [];
	for (let i = 0; i < array.length; i++) {
		let rate;
		if (
			 (array[i].principal >= 2500 && array[i].time > 1 && array[i].time < 3)
		) {
			rate = 3;
		} else if (array[i].principal >= 2500 && array[i].time >= 3) {
			rate = 4;
		} else if (array[i].principal < 2500 || time <= 1) {
			rate = 2;
		} else {
			rate = 1;
		}
		let interest = (array[i].principal * rate * array[i].time) / 100;
		interestData.push({
			principal: array[i].principal,
			time: array[i].time,
			rate: rate,
			interest: interest
		});
	}
	console.log(interestData);
	return interestData;
}

interestCalculator(data);