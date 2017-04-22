const multiply = require('./multiplier.js')

class ViewManager {

    connectEventHandlers() {
        document.getElementById('form-numbers')
            .addEventListener(
                'submit',
                this.onSubmit.bind(this));

        document.getElementById("addFactor").onclick = function() { addInput() }
    }

    onSubmit(event) {
        event.preventDefault();

        var multiplicands = document.getElementsByClassName('input-num');
        var hTMLValues = Array.prototype.slice.call(multiplicands);
        var values = hTMLValues.map(function(value) {
            return parseInt(value.value, 10);
        })
        values = values.filter(function(value) {
            return !isNaN(value)
        });
        const product = multiply(values);
        if (isNaN(product) || values.length === 0) {
            this.renderProduct(0);
        } else {
            this.renderProduct(product);
        }
    }
    renderProduct(product) {
        document.querySelector('.product').textContent = product;
    }
}

function addInput() {
    var input = document.createElement("div");
    input.innerHTML = '<input class="input-num" type="text" autocomplete="off"/>';
    document.querySelector('.divider').before(input);
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
