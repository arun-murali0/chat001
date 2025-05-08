export class AppError extends Error {
	public statusCode: number;
	public isOperational: boolean;
	public stack: string;

	constructor(message: string, statusCode: number) {
		super(message);
		this.statusCode = statusCode;
		this.isOperational = true;
		this.stack = Error().stack || '';
	}

	toJSON() {
		return {
			message: this.message,
			statusCode: this.statusCode,
			isOperational: this.isOperational,
			stack: this.stack,
		};
	}
}
