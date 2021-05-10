/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
	const sieve = new Array(n + 1).fill(false);
	sieve[0] = true;
	sieve[1] = true;
	for (let i = 2; i <= Math.ceil(n ** 0.5); i++) {
		for (let j = 2; j * i <= n; j++) {
			sieve[j * i] = true;
		}
	}
	return sieve.filter((val) => val == false).length - (!sieve[n] ? 1 : 0);
};
