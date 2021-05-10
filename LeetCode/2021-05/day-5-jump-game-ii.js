/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
	const n = nums.length;
	const dp = new Array(nums.length).fill(Infinity);
	dp[0] = 0;
	for (let i = 0; i < n; i++) {
		let jumpSize = nums[i];
		let j = i + 1;
		while (j < n && jumpSize--) {
			dp[j] = Math.min(dp[j], dp[i] + 1);
			j++;
		}
		// console.log(dp);
	}
	return dp[n - 1];
};
