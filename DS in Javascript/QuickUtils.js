// bit manipulations
const oneBitsCount = (n) => (n == 0 ? 0 : 1 + oneBitsCount(n & (n - 1)));

// strings
const charToNum = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);
const numToChar = (num) => String.fromCharCode(x + 'a'.charCodeAt(0));

// maths
const isPrime = (n) => {
	for (let i = 2; i < n; i++) if (n % i === 0) return false;
	return n > 1;
};

// 2D Array
// rotate matrix 90degree clockwise
var rotate = function (matrix) {
	const n = matrix.length;
	let i = 0;
	while (i < n / 2) {
		for (let j = i; j < n - i - 1; j++) {
			const tmp = matrix[i][j];
			matrix[i][j] = matrix[n - j - 1][i]; // left to top
			matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]; // bottom to left
			matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]; // right to bottom
			matrix[j][n - i - 1] = tmp; // top to right
		}
		i++;
	}
	return matrix;
};
