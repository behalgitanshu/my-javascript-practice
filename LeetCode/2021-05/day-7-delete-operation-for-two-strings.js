/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
	const m = word1.length;
	const n = word2.length;

	const lcs = (word1, word2) => {
		const dp = Array(m + 1)
			.fill()
			.map(() => Array(n + 1).fill(0));
		for (let i = 1; i <= m; i++) {
			for (let j = 1; j <= n; j++) {
				dp[i][j] =
					word1[i - 1] == word2[j - 1]
						? dp[i - 1][j - 1] + 1
						: Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
		return dp[m][n];
	};

	return m + n - 2 * lcs(word1, word2);
};
