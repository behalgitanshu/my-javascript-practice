// https://www.codechef.com/problems/INTEST

input = '';
process.stdin.on('data', (d) => (input += d));
process.stdin.on('end', () => {
	input = input.split('\n');
	input = input.filter((x) => x !== '');
	main();
});

function main() {
	let n = +input.shift();

	const ans = [];
	while (n !== 0) {
		n--;
		[A, B, X, Y] = input.shift().split(' ').map(Number);
		ans.push(`${Math.ceil(X / A) + Math.ceil(Y / B)}`);
	}
	process.stdout.write(ans.join('\n'));
}
