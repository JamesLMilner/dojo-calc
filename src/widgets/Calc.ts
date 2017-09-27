import { v, w } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import Button from './Button';
import Calculator from '../services/Calculator';
import { ThemeableMixin, theme } from '@dojo/widget-core/mixins/Themeable';
import * as css from './Calc.css';

export const CalcBase = ThemeableMixin(WidgetBase);

@theme(css)
export default class Calc extends CalcBase {

	private calc: Calculator;

	constructor() {
		super();
		this.calc = new Calculator();
	}

	private createButton(operation: any, icon: string) {
		return w(Button, {
			operation: operation,
			calc: this.calc,
			icon: icon
		});
	}

	private createButtons() {

		// Row 1
		const add = this.createButton('add', '+');
		const minus = this.createButton('minus', '-');
		const clear = this.createButton('clear', 'AC');

		// Row 2
		const divide = this.createButton('divide', '/');
		const multiply = this.createButton('multiply', '*');
		const sqrt = this.createButton(' √', 'root');

		// Row 3
		const pow = this.createButton('^', 'pow');
		const modulo = this.createButton('modulo', '%');
		const dojo = this.createButton('dojo', '🐉');

		return [
			add, minus, clear,
			divide, multiply, sqrt,
			pow, modulo, dojo
		];

	}

	protected render() {

		console.log(this.calc.total);
		const buttons = this.createButtons();

		return [
			v('div', {
				classes: this.classes(css.calcContainer)
			},[
				v('h1', {
					classes: this.classes(css.calcTitle)
				}, ['Dojo Calculator']),
				v('div', {
					classes: this.classes(css.calc)
				},[
					v('input', {
						autofocus: true,
						classes: this.classes(css.calcInput),
						value : '' + this.calc.total
					}),
					v('div', buttons)
				])
			])
		]
	}

}
