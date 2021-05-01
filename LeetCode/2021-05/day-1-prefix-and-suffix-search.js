var WordFilter = function (words) {
	const prefixMap = {};
	const suffixMap = {};
	words.map((word, index) => {
		for (let i = 0; i < word.length; i++) {
			const prefix = word.slice(0, i + 1);
			if (!prefixMap[prefix]) prefixMap[prefix] = [];
			prefixMap[prefix].push(index + 1);
			const suffix = word.slice(i);
			if (!suffixMap[suffix]) suffixMap[suffix] = [];
			suffixMap[suffix].push(index + 1);
		}
	});
	// console.log(prefixMap);
	// console.log(suffixMap);

	this.prefixMap = prefixMap;
	this.suffixMap = suffixMap;
};

WordFilter.prototype.f = function (prefix, suffix) {
	if (this.prefixMap[prefix] && this.suffixMap[suffix]) {
		const prefixIndexes = this.prefixMap[prefix];
		const suffixIndexes = this.suffixMap[suffix];
		let i = prefixIndexes.length - 1;
		let j = suffixIndexes.length - 1;
		while (i >= 0 && j >= 0) {
			if (prefixIndexes[i] == suffixIndexes[j]) {
				return prefixIndexes[i] - 1;
			} else if (prefixIndexes[i] < suffixIndexes[j]) {
				j--;
			} else {
				i--;
			}
		}

		console.log(prefixIndexes);
		console.log(suffixIndexes);
	}
	return -1;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */

// Test Cases
// console.log("case 1");
// var obj = new WordFilter(["apple"]);
// console.log(obj.words);
// var param_1 = obj.f("a", "e");
// console.log(param_1);

// console.log("case 2");
// obj = new WordFilter(["apple"]);
// console.log(obj.words);
// param_1 = obj.f("a", "s");
// console.log(param_1);

// console.log("case 3");
// obj = new WordFilter(["apple", "yogita", "gitanshu", "gitu", "anshu"]);
// console.log(obj.words);
// param_1 = obj.f("g", "u");
// console.log(param_1);

// console.log("case 4");
// obj = new WordFilter([]);
// console.log(obj.words);
// param_1 = obj.f("a", "s");
// console.log(param_1);
