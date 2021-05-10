/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function (nums) {
	let maxVal = nums.reduce((a, b) => Math.max(a, b));

	let mi = 0;
	let mx = nums[0];
	const indexes = [];
	nums.map((val, index) => {
		if (val == maxVal) {
			indexes.push(index);
		}
	});

	const myFunc = (mx, mi) => {
		let ans = mx ** 2;
		let currSum = mx,
			currMin = mx;
		let i = mi,
			j = mi;

		console.log("debug:", i, j, ans);

		while (i >= 0 && j < nums.length) {
			let kase = "";
			let localMax = -1;
			// take both side;
			if (
				i > 0 &&
				j < nums.length - 1 &&
				ans <
					Math.min(nums[i - 1], nums[j + 1], currMin) *
						(currSum + nums[i - 1] + nums[j + 1])
			) {
				if (
					localMax <
					Math.min(nums[i - 1], nums[j + 1], currMin) *
						(currSum + nums[i - 1] + nums[j + 1])
				) {
					kase = " both";
					localMax =
						Math.min(nums[i - 1], nums[j + 1], currMin) *
						(currSum + nums[i - 1] + nums[j + 1]);
				}
			}
			if (
				i > 0 &&
				ans < Math.min(nums[i - 1], currMin) * (currSum + nums[i - 1])
			) {
				if (
					localMax <
					Math.min(nums[i - 1], currMin) * (currSum + nums[i - 1])
				) {
					kase = "left";
					localMax =
						Math.min(nums[i - 1], currMin) *
						(currSum + nums[i - 1]);
				}
			}
			if (
				j < nums.length - 1 &&
				ans < Math.min(nums[j + 1], currMin) * (currSum + nums[j + 1])
			) {
				if (
					localMax <
					Math.min(nums[j + 1], currMin) * (currSum + nums[j + 1])
				) {
					kase = "right";
					localMax =
						Math.min(nums[j + 1], currMin) *
						(currSum + nums[j + 1]);
				}
			}

			if (!kase) {
				break;
			}
			switch (kase) {
				case "both":
					i--;
					j++;
					currMin = Math.min(nums[i], nums[j], currMin);
					currSum = currSum + nums[i] + nums[j];
					break;
				case "left":
					i--;
					currMin = Math.min(nums[i], currMin);
					currSum = currSum + nums[i];
					break;
				default:
					j++;
					currMin = Math.min(nums[j], currMin);
					currSum = currSum + nums[j];
			}
			ans = localMax;
			console.log("debug:", i, j, ans);
		}
		return ans;
	};

	let ans = -1;

	// console.log(indexes);

	ans = myFunc(maxVal, indexes[0]);
	return ans % 1000000007;
};
