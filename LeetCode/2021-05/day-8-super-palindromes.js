/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
var superpalindromesInRange = function (left, right) {
	// ** function to check if number is palindrome
	const isPalindrome = (num) => {
		const arr = num.toString().split("");
		let i = 0,
			j = arr.length - 1;
		while (i < j) {
			if (arr[i] !== arr[j]) {
				return false;
			}
			i++;
			j--;
		}
		return true;
	};

	// ** Problem Reduction: Find all the palindrome number upto sqrt of right
	const x = Math.ceil(left ** 0.5);
	const y = Math.floor(right ** 0.5);
	// console.log('x y', x, y);

	// ** reverse the string
	const rev = (str) => str.split("").reverse().join("");

	// ** if number in range
	const inRange = (num) => num >= x && num <= y;

	// ** Find first half of y
	const yStr = y.toString();
	const prefix = +yStr.slice(0, Math.ceil(yStr.length / 2));
	// console.log('prefix val', prefix, yStr);
	const eligiblePalindromes = [];

	// ** Save all palindromes with prefix from 1 to half of y
	// ** Every number will generate 2 palindromes
	// ** Example: 25 -> 252 & 2552
	for (let i = 1; i <= prefix; i++) {
		const str = i.toString();
		let candidate1 = +(str + rev(str));
		let candidate2 = +(str + rev(str.slice(0, str.length - 1)));
		inRange(candidate1) && eligiblePalindromes.push(candidate1);
		inRange(candidate2) && eligiblePalindromes.push(candidate2);
	}

	// ** if number is of even length, more palindromes will exist
	// ** new prefix = prefix + 1
	if (yStr.length % 2 == 0) {
		const range = Math.pow(10, Math.ceil(yStr.length / 2));
		for (let i = prefix + 1; i < range; i++) {
			const str = i.toString();
			let candidate = +(str + rev(str.slice(0, str.length - 1)));
			inRange(candidate) && eligiblePalindromes.push(candidate);
		}
	}
	// console.log(eligiblePalindromes);

	// ** for all eligible palindromes, check if they are wonderful
	let count = 0;
	eligiblePalindromes.map((num) => {
		if (isPalindrome(BigInt(num) * BigInt(num))) {
			// console.log(num, num**2);
			count++;
		}
	});

	return count;
};
