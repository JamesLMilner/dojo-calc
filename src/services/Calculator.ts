interface Operation {
	(x: number, y: number): number;
}

interface Operations {
	[key: string]: Operation;
}

export default class Calculator {

	public total: number;
	public currentOperation: string;
	private _operations: Operations;

	constructor() {
		this.currentOperation = 'none';
		this.total = 0;

		this._operations = {
			'add' : this.add,
			'minus' : this.minus,
			'multiply' : this.multiply,
			'divide' : this.divide,
			'power' : this.power,
			'root' : this.root
		};
	}

	public reset(): void  {
		this.total = 0;
		this.setCurrentOperation('none');
	}

	public setCurrentOperation(name: string): void {
		this.currentOperation = name;
	}

	public operation(name: string, x: number, y: number): number {
		const op = this._operations[name];
		return op(x, y);
	}

	public performOperation(name: string, x: number): void {
		this.total = this.operation(name, this.total, x);
		this.currentOperation = 'none';
	}

	public add(x: number, y: number): number {
		return x + y;
	}

	public minus(x: number, y: number): number {
		return x - y;
	}

	public multiply(x: number, y: number): number {
		return x * y;
	}

	public divide(x: number, y: number): number {
		return x / y;
	}

	public power(x: number, y: number) {
		return Math.pow(x, y);
	}

	public root(x: number, y: number) {
		return Math.pow(x, 1 / y);
	}

	public modulo(x: number, y: number): number {
		return x % y;
	}

}
