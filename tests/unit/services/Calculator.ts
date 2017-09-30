import * as registerSuite from 'intern/lib/interfaces/object';
import * as assert from 'intern/chai!assert';
import Calculator from '../../../src/services/Calculator';

let calc: Calculator;

registerSuite({
	name: 'Calculator',
	beforeEach() {
		calc = new Calculator();
	},

	afterEach() {
		// Nothing
	},

	'setCurrentOperation' : () => {
		calc.setCurrentOperation('add');
		assert.equal(calc.currentOperation, 'add', 'current operation should be add');
	},

	'add' : () => {
		assert.equal(calc.add(1, 1), 2, '2 + 2 should equal 4');
	},

	'minus' : () => {
		assert.equal(calc.minus(1, 1), 0, '1 - 1 should equal 0');
	},

	'multiply' : () => {
		assert.equal(calc.multiply(3, 3), 9, '3 * 3 should equal 9');
	},

	'divide' : () => {
		assert.equal(calc.divide(9, 3), 3, '9  / 3 should equal 3');
	},

	'power' : () => {
		assert.equal(calc.power(2, 3), 8, '2 to the power of 3 should equal 16');
	},

	'root' : () => {
		assert.equal(calc.root(27, 3), 3, 'the cube root of 27 should be 3');
	},

	'operation' : () => {
		const opResult = calc.operation('add', 1, 2);
		assert.equal(opResult, 3, 'performing 1 + 2 should make the total 3');
	},

	'performOperation' : () => {
		calc.performOperation('add', 10);
		assert.equal(calc.total, 10, 'performing 1 + 2 should make the total 3');
	},

	'reset' : () => {
		calc.performOperation('add', 10);
		calc.performOperation('add', 10);
		calc.performOperation('add', 10);
		calc.reset();
		assert.equal(calc.total, 0, 'performing operations and then resetting should make total 0');
	}

});
