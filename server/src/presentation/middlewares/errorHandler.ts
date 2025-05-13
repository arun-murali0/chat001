import { ErrorRequestHandler } from 'express';
import { AppError } from '../../utils/shared/AppError';

export const errorHandler: ErrorRequestHandler = (err: AppError, _req, res, _next): any => {
	console.error(err.message);

	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			message: err.errorMessage,
		});
	}

	// default error handler
	return res.status(500).json({
		message: 'Internal server error',
	});
};
