interface DiadicOperation {
	(x: number, y: number): number;
};

interface MonadicOperation {
	(x: number): number;
};

interface DiadicOperations {
	[key: string]: DiadicOperation;
}

interface MonadicOperations {
	[key: string]: MonadicOperation;
}

export default class Calculator {

	private _total: number;
	private _operationValue: number;
	public currentOperation: string;
	private _diadicOperations: DiadicOperations;
	private _monadicOperations: MonadicOperations;

	constructor() {
		this.currentOperation = 'none';
		this._total = 0;
		this._operationValue = 1;

		this._diadicOperations = {
			'add' : this.add,
			'minus' : this.minus,
			'multiply' : this.multiply,
			'divide' : this.divide,
			'power' : this.power
		};
		this._monadicOperations = {
			'clear' : this.clear
		};
	}

	get total() {
		return this._total;
	}

	get operationValue() {
		return this._operationValue;
	}

	public operation(name: string, x: number, y?: number): void {
		console.log(name, x, y)
		if (y !== undefined) {
			// Operations that have two arguments (i.e. add)
			let operation = this._diadicOperations[name];
			console.log(operation);
			this._total = operation(x, y);
			console.log(this._total);

		} else {
			// Operations that have one argument
			let operation = this._monadicOperations[name];
			this._total = operation(x);
		}

	}

	public clear(x: number): number {
		return x * 0;
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

	public dojo(x: number, y: number): number {
		return x;
	}

}
