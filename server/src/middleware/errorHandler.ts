import { NextFunction, Request, Response } from 'express';

export class customError extends Error {
	errorMessage: string;
	statusCode: number;
	constructor(statusCode: number, errorMessage: string) {
		super(errorMessage);
		this.errorMessage = errorMessage;
		this.statusCode = statusCode;

		Object.setPrototypeOf(this, customError.prototype);
	}
}

export function errorMethods(_err: any, _req: Request, _res: Response, _next: NextFunction): void {
	if (_err instanceof customError) {
		_res.status(_err.statusCode).json({ message: _err.errorMessage });
	}

	_res.status(500).json({ message: _err.message });
}
