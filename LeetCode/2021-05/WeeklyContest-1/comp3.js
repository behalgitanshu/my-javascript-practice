/**
 * @param {string} num
 * @param {number} k
 * @return {number}
 */
var getMinSwaps = function (num, k) {
	const swap = (str, a, b) => {
		let tmp = str[a];
		str[a] = str[b];
		str[b] = tmp;
		return str;
	};

	const rev = (str, l, r) => {
		while (l < r) {
			str = swap(str, l++, r--);
		}
		return str;
	};

	const bSearch = (str, low, high, val) => {
		let index = -1;
		while (low <= high) {
			const mid = low + Math.floor((high - low) / 2);
			if (+str[mid] <= +val) {
				high = mid - 1;
			} else {
				low = mid + 1;
				if (index == -1 || str[index] >= str[mid]) {
					index = mid;
				}
			}
		}
		return index;
	};

	const nextPermutation = (str) => {
		let len = str.length,
			i = len - 2;

		while (i >= 0 && +str[i] >= +str[i + 1]) --i;

		if (i < 0) return "";

		const index = bSearch(str, i + 1, len - 1, str[i]);
		swap(str, i, index);
		rev(str, i + 1, len - 1);
		return str;
	};

	const minSwaps = (arr1, arr2) => {
		let count = 0;
		let i = 0,
			j = 0;

		while (i < arr1.length) {
			j = i;
			while (arr1[j] != arr2[i]) {
				j++;
			}
			while (i < j) {
				swap(arr1, j, j - 1);
				j--;
				count++;
			}
			i++;
		}

		return count;
	};
	let prev = num.split(""),
		curr = prev;

	while (k--) {
		curr = nextPermutation(prev);
		prev = curr;
	}
	// console.log(curr);

	return minSwaps(num.split(""), curr);
};
