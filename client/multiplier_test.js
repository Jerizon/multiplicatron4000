const multiply = require('./multiplier.js')

class TestSuit {
    runTest() {
      this.testMultiplyMultipleValues();
      this.testMultiplyByZero();
      this.testMultiplyASingleValue();
      this.testMultiplyByMultipleNegativeValues();
    }

    assertEquals(a, b) {
        return a === b;
    }

    testMultiplyMultipleValues() {
        const result = this.assertEquals(multiply([2, 3, 6]), 36);
        console.log(result, "testMultiplyMultipleValues");
    }

    testMultiplyByZero () {
    	const result = this.assertEquals(multiply([2, 3, 0]), 0);
    	console.log(result, "testMultiplyByZero");
    }
    testMultiplyASingleValue() {
    	const result = this.assertEquals(multiply([2]),2);
    	console.log(result, "testMultiplyASingleValue");
    }
    testMultiplyByMultipleNegativeValues() {
    	const result = this.assertEquals(multiply([2, -2, -2, -2]), -16);
    	console.log(result, "testMultiplyByMultipleNegativeValues");
    }

}

const testSuit = new TestSuit();
testSuit.runTest();