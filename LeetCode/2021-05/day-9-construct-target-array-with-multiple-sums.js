/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function (target) {
	if (target.length === 1 && target[0] !== 1) return false;

	let sum = target.reduce((a, b) => a + b);
	target.sort((a, b) => b - a);

	while (sum !== target.length) {
		let m =
			target[0] -
			(sum - target[0]) *
				(Math.trunc(target[0] / (sum - target[0]) - 1) || 1);
		[sum, target[0]] = [sum - target[0] + m, m];
		if (target[0] < 1) return false;
		for (let i = 0; target[i] < target[i + 1]; i++) {
			[target[i], target[i + 1]] = [target[i + 1], target[i]];
		}
	}
	return true;
};
