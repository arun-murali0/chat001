export class AppError extends Error {
	public readonly statusCode: number;
	public readonly errorMessage: string;

	constructor(errorMessage: string, statusCode: number) {
		super(errorMessage);
		this.statusCode = statusCode;
		this.errorMessage = errorMessage;

		// Set the prototype explicitly
		Object.setPrototypeOf(this, AppError.prototype);
	}
}
