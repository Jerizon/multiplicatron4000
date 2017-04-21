const multiply = require('./multiplier.js')

class ViewManager {

	connectEventHandlers() {
      document.getElementById('form-numbers')
        .addEventListener(
        	'submit',
        	this.onSubmit.bind(this));
	}

	onSubmit(event) {
		event.preventDefault();
		//block form from submitting
		var multiplicands = document.getElementsByClassName('input-num');
		var hTMLValues = Array.prototype.slice.call(multiplicands);
		var values = hTMLValues.map(function (value) {
			return parseInt(value.value, 10);
		})
		//add ints to an array
		
		//reduce the array by multiplying values
        const sum = multiply(values);
		//output
		alert(sum);
	}

}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();