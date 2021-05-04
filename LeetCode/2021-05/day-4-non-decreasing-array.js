/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
	let ignoreOnce = true;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] < nums[i - 1]) {
			if (ignoreOnce) {
				ignoreOnce = false;

				if (i < 2 || nums[i - 2] <= nums[i]) {
					nums[i - 1] = nums[i];
					// console.log(nums);
				} else {
					nums[i] = nums[i - 1];
					// console.log(nums);
				}
			} else {
				return false;
			}
		}
	}
	return true;
};
