const multiply = require('./multiplier.js')

class TestSuit {
    runTest(testName) {
      const result = this[testName]();
      console.log(result, testName);
    }

    runTests() {
    	Object.getOwnPropertyNames(Object.getPrototypeOf(this))
    	  .filter(prop => this[prop] instanceof Function)
    	  .filter(prop => prop.indexOf('test') !== -1)
    	  .forEach(testName => this.runTest(testName));
    }

    assertEquals(a, b) {
        return a === b;
    }
    testMultiplyMultipleValues() {
        return this.assertEquals(multiply([2, 3, 6]), 36);
    }
    testMultiplyByZero () {
    	return this.assertEquals(multiply([2, 3, 0]), 0);
    }
    testMultiplyASingleValue() {
    	return this.assertEquals(multiply([2]),2);
    }
    testMultiplyByMultipleNegativeValues() {
    	return this.assertEquals(multiply([2, -2, -2, -2]), -16);
    }

}

const testSuit = new TestSuit();
testSuit.runTests();