import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export class Errors extends Error {
	errorCode: number;
	errorMessage: string;

	constructor(errorCode: number, errorMessage: string) {
		super(errorMessage);
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
		// Ensure proper prototype chain
		Object.setPrototypeOf(this, Errors.prototype);
	}
}

export const errorHandler: ErrorRequestHandler = (
	err: any,
	_req: Request,
	res: Response,
	_next: NextFunction
): void => {
	// Prevent response if headers are already sent
	if (res.headersSent) {
		console.error('Headers already sent:', err);
		return;
	}

	// Handle custom Errors
	if (err instanceof Errors) {
		res.status(err.errorCode).json({ error: err.errorMessage });
	}

	// Handle unknown errors
	console.error('Unhandled error:', err);
	const deploy = process.env.NODE_ENV || 'local'; // Use environment variable

	if (deploy !== 'local') {
		res.status(500).json({ message: 'Internal server error' });
	} else {
		res.status(500).json({ message: err.message || 'Unknown error' });
	}
};
