/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
	const indices = [];
	nums.map((val, index) => {
		if (val == target) {
			indices.push(index);
		}
	});
	let ans = Infinity;
	indices.map((index) => {
		ans = Math.min(ans, Math.abs(index - start));
	});
	return ans;
};
