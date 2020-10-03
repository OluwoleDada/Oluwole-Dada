function numDivisibleBy235(n) {
	const result = [];
	for (let i = 1; i <= n; i++) {
		let temp = '';
		if (i % 2 == 0) {
			temp += 'yu';
			if (i % 3 == 0) {
				temp += '-gi';
			}
			if (i % 5 == 0) {
				temp += '-oh';
			}
		} else if (i % 3 == 0) {
			temp += 'gi';
			if (i % 5 == 0) {
				temp += '-oh';
			}
		} else if (i % 5 == 0) {
			temp += 'oh';
		} else {
			temp = i;
		}
		result.push(temp);
	}
	return result;
}

console.log(numDivisibleBy235(100));
console.log(numDivisibleBy235(53));