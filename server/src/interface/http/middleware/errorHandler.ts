import { Request, Response, NextFunction } from 'express';

export class errors extends Error {
	errorCode: number;
	errorMessage: string;
	constructor(errorCode: number, errorMessage: string) {
		super();
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
		Object.setPrototypeOf(this, errors.prototype);
	}
}

export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction): void => {
	if (err instanceof errors) {
		res.status(err.errorCode).json({ error: err.errorMessage });
	}
	console.log('error', err);

	res.status(500).json({ error: 'Internal server error' });
};

export const asyncHandler = (
	fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
	return (req: Request, res: Response, next: NextFunction) => {
		Promise.resolve(fn(req, res, next)).catch(next);
	};
};
