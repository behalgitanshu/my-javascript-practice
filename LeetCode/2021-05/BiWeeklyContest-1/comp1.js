/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
	var ans = [];
	var tmp = "";
	s.split("").map((val, index) => {
		if (index % 2 == 0) {
			ans.push(val);
			tmp = val;
		} else {
			ans.push(String.fromCharCode(tmp.charCodeAt(0) + +val));
		}
	});
	return ans.join("");
};
