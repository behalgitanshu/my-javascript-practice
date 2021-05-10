/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
	const counter = Array(101).fill(0);

	logs.map(([birth, death]) => {
		for (let i = birth; i < death; i++) {
			counter[i - 1950]++;
		}
	});
	let ans = 0;
	let high = -Infinity;
	counter.map((val, index) => {
		if (val > high) {
			high = val;
			ans = index;
		}
	});
	return ans + 1950;
};
