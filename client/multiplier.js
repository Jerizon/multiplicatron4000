const multiply = function(multiplicand) {
	return multiplicand.reduce( function(total, val) {
		return total * val;
	}, 1)
}

module.exports = multiply;