import { NextFunction, Request, Response } from 'express';

export const checkAuth = async (_req: Request, _res: Response, _next: NextFunction) => {
	try {
		if (_req.isAuthenticated()) {
			_req.authInfo = true;
			return _next();
		} else {
			_req.authInfo = false;
			return _res.status(501).json({ message: 'You are not authorized' });
		}
	} catch (error) {
		console.log(error);
	}
};
