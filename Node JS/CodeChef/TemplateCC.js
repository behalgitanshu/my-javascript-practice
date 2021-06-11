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

	const sumAP = (n, Q) => (n / 2) * (n - 1) * Q; // a = 0
	const nthTermAP = (n, Q) => (n - 1) * Q; // a = 0

	const output = [];
	while (testCases--) {
		[D, d, P, Q] = input[currLine++].split(' ').map(Number);
		let ans = BigInt(D * P);
		const n = Math.floor(D / d);
		ans = ans + BigInt(sumAP(n, Q) * d); // added Q till equal intervals
		if (D % d) ans = ans + BigInt(nthTermAP(n + 1, Q) * (D - d * n)); // adding 1 for last ineterval
		output.push(ans);
	}
	process.stdout.write(output.join('\n'));
}
