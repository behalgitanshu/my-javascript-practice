// TLE Solution

/**
 * @param {number[][]} rooms
 * @param {number[][]} queries
 * @return {number[]}
 */
var closestRoom = function (rooms, queries) {
	const idMap = {};
	let sizes = new Set();
	const ids = [];

	rooms.map(([id, size]) => {
		ids.push(id);
		sizes.add(size);
		idMap[id] = size;
	});
	sizes = Array.from(sizes);
	sizes.sort((a, b) => +a - +b);
	ids.sort((a, b) => +a - +b);

	const binarySearch = (arr, val) => {
		let low = 0;
		let high = arr.length - 1;
		while (low <= high) {
			const mid = low + Math.floor((high - low) / 2);
			if (arr[mid] == val) {
				return mid;
			} else if (arr[mid] < val) {
				low = mid + 1;
			} else {
				high = mid - 1;
			}
		}
		return low < arr.length ? low : -1;
	};
	const ans = [];
	queries.map(([id, size]) => {
		//console.log("query", id, size);
		const availableSizeIndex = binarySearch(sizes, size);
		if (availableSizeIndex == -1) {
			ans.push(-1);
		} else {
			let idsIndex = binarySearch(ids, id);
			if (idsIndex == -1) {
				idsIndex = ids.length - 1;
			}
			//console.log("ids array", ids);
			//console.log("ids map", idMap);

			//console.log("index", idsIndex);
			let curr = idsIndex;
			let candidate1 = -1;
			while (curr < ids.length) {
				// console.log("size of id", ids[curr], idMap[ids[curr]]);
				if (idMap[ids[curr]] >= size) {
					candidate1 = ids[curr];
					break;
				}
				curr++;
			}
			//console.log("upar", candidate1);

			curr = idsIndex - 1;
			let candidate2 = -1;
			while (curr >= 0) {
				if (idMap[ids[curr]] >= size) {
					candidate2 = ids[curr];
					break;
				}
				curr--;
			}
			//console.log("upar niche", candidate1, candidate2);
			if (candidate1 == -1 && candidate2 == -1) {
				ans.push(-1);
			} else if (candidate1 == -1) {
				ans.push(candidate2);
			} else if (candidate2 == -1) {
				ans.push(candidate1);
			} else {
				ans.push(
					Math.abs(id - candidate1) >= Math.abs(id - candidate2)
						? candidate2
						: candidate1
				);
			}
		}
	});
	return ans;
};
