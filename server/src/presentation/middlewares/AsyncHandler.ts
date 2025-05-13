import { NextFunction, Response, Request } from 'express';

interface AsyncHandler {
	(req: Request, res: Response, next: NextFunction): Promise<void>;
}

export const asyncHandler =
	(controller: AsyncHandler) => async (req: Request, res: Response, next: NextFunction) => {
		try {
			await controller(req, res, next);
		} catch (error) {
			next(error);
		}
	};
