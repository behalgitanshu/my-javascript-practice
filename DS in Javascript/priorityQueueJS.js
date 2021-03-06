function PriorityQueue(comparator) {
	if (!comparator) {
		comparator = (a, b) => a < b;
	}

	const heap = [];
	const parent = (index) => Math.floor((index - 1) / 2);
	const left = (index) => 2 * index + 1;
	const right = (index) => 2 * index + 2;
	const hasLeft = (index) => left(index) < heap.length;
	const hasRight = (index) => right(index) < heap.length;
	const swap = (a, b) => {
		const tmp = heap[a];
		heap[a] = heap[b];
		heap[b] = tmp;
	};

	const push = (item) => {
		heap.push(item);
		let i = heap.length - 1;
		// compare parent with this element, if true then return else continue till root
		while (i > 0) {
			const p = parent(i);
			if (comparator(heap[p], heap[i])) {
				break;
			}
			swap(i, p);
			i = p;
		}
	};

	const pop = () => {
		if (heap.length == 0) return undefined;

		// Swap with last element and pop the top element
		swap(0, heap.length - 1);
		const item = heap.pop();

		// start from top, check for condition, find the highest among 3 child and swap and continue with that child
		let current = 0;
		while (hasLeft(current)) {
			let smallerChild = left(current);
			if (hasRight(current) && comparator(heap[right(current)], heap[left(current)]))
				smallerChild = right(current);

			if (comparator(heap[current], heap[smallerChild])) break;

			swap(current, smallerChild);
			current = smallerChild;
		}
		return item;
	};

	const peek = (defaultValue) => {
		return heap.length == 0 ? defaultVal : heap[0];
	};

	const size = () => {
		return heap.length;
	};

	const isEmpty = () => {
		return heap.length == 0;
	};

	const print = () => {
		console.log(heap);
	};

	return {
		push,
		pop,
		peek,
		size,
		isEmpty,
		print,
	};
}
