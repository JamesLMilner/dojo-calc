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
	private inputVal: number;

	constructor() {
		super();
		this.calc = new Calculator();
		this.inputVal = 0;
	}

	private handleChange(event: any) {
		this.updateTotal(event.target.value);
	}

	private setInputVal(val: number) {
		this.inputVal = val;
	}

	private updateTotal(newTotal: any) {
		if (!isNaN(parseFloat(newTotal))) {
			this.inputVal = parseFloat(newTotal);
		}
		this.invalidate();

	}

	private createButton(operation: string, icon: string) {

		return w(Button, {
			operation: operation,
			calc: this.calc,
			icon: icon,
			inputVal: this.inputVal,
			setInputVal: this.setInputVal
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
		const sqrt = this.createButton('root', '√');

		// Row 3
		const pow = this.createButton('power', '^');
		const modulo = this.createButton('modulo', '%');
		const dojo = this.createButton('equals', '=');

		return [
			add, minus, clear,
			divide, multiply, sqrt,
			pow, modulo, dojo
		];

	}

	protected render() {

		const buttons = this.createButtons();
		const title = 'Dojo Calculator';
		const bottomText = "Made with ☕️ by James Milner";


		return [
			v('div', {
				classes: this.classes(css.calcContainer)
			},[
				v('h1', {
					classes: this.classes(css.calcTitle)
				}, [title]),
				v('div', {
					classes: this.classes(css.calc)
				},[
					v('input', {
						autofocus: true,
						classes: this.classes(css.calcInput),
						onkeyup: this.handleChange,
						value : '' + this.inputVal
					}),
					v('div', buttons)
				]),
				v('span', {
					classes: this.classes(css.calcBottomText)
				}, [bottomText])
			])
		]
	}

}
