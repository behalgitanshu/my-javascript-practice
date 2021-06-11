process.stdin.resume();
process.stdin.setEncoding('utf-8');

input = '';
currLine = 0;
process.stdin.on('data', (d) => (input += d));
process.stdin.on('end', () => {
	input = input.split('\n');
	//	input = input.filter((x) => x !== '');
	main();
});

function main() {
	let testCases = input[currLine++];

	const sumAP = (n, d) => n * (n - 1) * (d / 2); // a = 0
	const nthTermAP = (n, d) => (n - 1) * d; // a = 0

	const output = [];
	while (testCases--) {
		[D, d, P, Q] = input[currLine++].split(' ').map(Number);
		let ans = D * P;
		const n = Math.floor(D / d);
		ans = ans + sumAP(n, Q) * d; // added Q till equal intervals
		if (D % d) ans = ans + nthTermAP(n + 1, Q) * (D - d * n); // adding 1 for last ineterval
		output.push(ans);
	}
	process.stdout.write(output.join('\n'));
}
