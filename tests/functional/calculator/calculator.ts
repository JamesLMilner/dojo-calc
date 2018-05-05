import * as assert from 'intern/chai!assert';
import * as registerSuite from 'intern!object';

registerSuite({
	name: 'Calculator',

	'opens correctly' (this: any) {
		return this.remote
			.get('localhost:9999')
			.setFindTimeout(5000)
			.findByCssSelector('body')
			.findById('calculatorTitle')
				.then((element: HTMLElement) => {
					assert.isDefined(element);
				})
				.end()
			.findById('calculator')
				.then((element: HTMLElement) => {
					assert.isDefined(element);
				})
				.end()
			.findById('calculatorBottomText')
				.then((element: HTMLElement) => {
					assert.isDefined(element);
				})
				.end()
			.findById('calculatorInput')
				.then((element: HTMLElement) => {
					assert.isDefined(element);
				});
	},

	'input works' (this: any) {
		return this.remote
			.get('localhost:9999')
			.setFindTimeout(5000)
			.findByCssSelector('body')
			.findById('calculatorInput')
				.click()
				.type('1000')
				.end();
	}

});