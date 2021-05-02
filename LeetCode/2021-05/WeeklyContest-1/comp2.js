/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function (s) {
	const splitUtil = (s, num) => {
		// console.log("debug ", s, num);
		if (s.length == 0) {
			return false;
		}
		if (num - 1 == Number(s)) {
			return true;
		}

		let ans = true;

		for (let i = 0; i < s.length; i++) {
			const otherNumber = s.slice(0, i + 1);
			if (num - 1 == Number(otherNumber)) {
				//console.log("try ", s.slice(i+1),num-1);
				ans = splitUtil(s.slice(i + 1), num - 1);
				break;
			}
			ans = false;
		}
		return ans || splitUtil(s.slice(1), num * 10 + Number(s[0]));
	};
	return splitUtil(s.slice(1), Number(s[0]));
};
