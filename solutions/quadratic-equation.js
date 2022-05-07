function solveQuadraticEquation(a, x, b, c) {
	return a * x * x + b * x + c;
}

console.log(solveQuadraticEquation(-8, -5, -2, 7)); // => -183
console.log(solveQuadraticEquation(8, 2, 9, -10)); // => 40
console.log(solveQuadraticEquation(0, 0, 0, 0)); // => 0
console.log(solveQuadraticEquation(5, -2, 5, 128)); // => 138
console.log(solveQuadraticEquation(10, 49, 6, 19)); // => 24323