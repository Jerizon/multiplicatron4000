const multiply = function(multiplicand) {
	return multiplicand.reduce( function(total, val) {
		return total * val;
	}, 1)
}

console.log(multiply([2,3, 6])=== 36, ' Multiply multiple numbers');
console.log(multiply([2,3,0])=== 0, ' Multiply by zero');
console.log(multiply([2]) === 2, 'Multiply a single value');
console.log(multiply([2, -2, -2, -2]) === -16, 'Multiply by multiple negative values');