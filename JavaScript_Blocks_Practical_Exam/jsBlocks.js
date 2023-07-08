const solution = (blocks) => {
	const N = blocks.length;
	let maxDistance = 0;

	blocks.forEach((height, i) => {
		let left = i;
		let right = i;
		let maxHeight = height;

		while (left > 0 && blocks[left - 1] >= maxHeight) {
			left--;
			maxHeight = blocks[left];
		}

		while (right < N - 1 && blocks[right + 1] >= maxHeight) {
			right++;
			maxHeight = blocks[right];
		}

		maxDistance = Math.max(maxDistance, right - left + 1);
	});

	return maxDistance;
};

const blocks1 = [2, 6, 8, 5];
const result1 = solution(blocks1);
console.log(result1); // Output: 3

const blocks2 = [1, 5, 5, 2, 6];
const result2 = solution(blocks2);
console.log(result2); // Output: 4

const blocks3 = [1, 1];
const result3 = solution(blocks3);
console.log(result3); // Output: 2
