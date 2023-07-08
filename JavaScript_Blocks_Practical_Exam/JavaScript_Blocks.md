Write a function:

function solution(blocks);

that, given an array blocks consisting of N integers denoting the heights of the blocks, returns the longest possible distance that the two frogs can make between each other starting from one of the blocks.

Examples:

Given blocks = [2, 6, 8, 5], the function should return 3. If starting from blocks[0], the first frog can stay where it is and the second frog can jump to blocks[2] (but not to blocks[3]).

2. Given blocks = [1, 5, 5, 2, 6], the function should return 4. If starting from blocks[3], the first frog can jump to blocks[1], but not blocks[0], and the second frog can jump to blocks[4].
