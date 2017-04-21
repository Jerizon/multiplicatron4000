const multiply = require('./multiplier.js')

class ViewManager {

	connectEventHandlers() {
      document.getElementById('form-numbers')
        .addEventListener(
        	'submit',
        	this.onSubmit.bind(this));

       document.getElementById("addFactor").onclick = function () { addInput() }
	}

	onSubmit(event) {
		event.preventDefault();
		
		var multiplicands = document.getElementsByClassName('input-num');
		var hTMLValues = Array.prototype.slice.call(multiplicands);
		var values = hTMLValues.map(function (value) {
			return parseInt(value.value, 10);
		})
				
		const sum = multiply(values);
		alert(sum);
	}

}
function addInput() {
		var input = document.createElement("div");
		input.innerHTML ='<input class="input-num" type="text" autocomplete="off" />';
		document.getElementById('calculator').before(input);
	}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();


