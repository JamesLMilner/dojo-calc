import { v } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import Calculator from './../services/Calculator';
import * as css from './Button.m.css';
import { ThemedMixin, theme } from '@dojo/widget-core/mixins/Themed';

export interface ButtonProperties {
	calc: Calculator;
	icon: string;
	operation: string;
	inputVal: number;
	setInputVal: any;
}

export const ButtonBase = ThemedMixin(WidgetBase);

@theme(css)
export default class Button extends ButtonBase<ButtonProperties> {

	private handleClick(): void {
		const op = this.properties.operation;
		const calc = this.properties.calc;
		const val = this.properties.inputVal;
		const setInputVal = this.properties.setInputVal;

		switch (op) {
			case 'none': {
				break;
			}
			case 'clear': {
				calc.reset();
				setInputVal(0);
				break;
			}
			case 'equals': {
				if (calc.currentOperation !== 'none') {
					calc.performOperation(calc.currentOperation, val);
					setInputVal(calc.total);
				}
				break;
			}
			default: {
				if (calc.total === 0) {
					calc.total = val;
				}
				calc.setCurrentOperation(this.properties.operation);
				break;
			}
		}
		this.invalidate();
	}

	protected render() {

		let classes;

		if (this.properties.calc.currentOperation === this.properties.operation) {
			classes = this.theme([css.calcButton, css.calcButtonSelected]);
		} else {
			classes = this.theme(css.calcButton);
		}

		return v('button', {
			title: this.properties.operation,
			classes: classes,
			onclick: this.handleClick
		}, [this.properties.icon]);
	}

}
