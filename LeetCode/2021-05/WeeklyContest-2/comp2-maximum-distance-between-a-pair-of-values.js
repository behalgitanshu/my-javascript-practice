/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
	const bs = (arr, low, high, val) => {
		let i = low;
		let j = high;
		let ans = -1;
		while (i <= j) {
			const mid = i + Math.floor((j - i) / 2);
			if (arr[mid] < val) {
				j = mid - 1;
			} else {
				ans = mid;
				i = mid + 1;
			}
		}
		return ans;
	};

	let ans = 0;

	nums1.map((val, index) => {
		const bsi = bs(nums2, 0, nums2.length - 1, val);
		// console.log("Yo ", index, val, bsi);
		if (bsi > index) {
			ans = Math.max(ans, bsi - index);
		}
	});
	return ans;
};
