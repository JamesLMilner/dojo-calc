import { v } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import Calculator from "./../services/Calculator";
import * as css from './Button.css';
import { ThemeableMixin, theme } from '@dojo/widget-core/mixins/Themeable';

export interface ButtonProperties {
	calc: Calculator;
	icon: string;
	operation: any;
}

export const ButtonBase = ThemeableMixin(WidgetBase);

@theme(css)
export default class Button extends ButtonBase<ButtonProperties> {

	private handleClick(): void {
		this.properties.calc.operation(
			this.properties.operation,
			this.properties.calc.total,
			1
		);
		this.invalidate();
	}

	protected render() {
		return v('button', {
			classes: this.classes(css.calcButton),
			onclick: this.handleClick
		}, [this.properties.icon]);
	}

}
