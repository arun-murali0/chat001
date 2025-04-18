import { NextFunction, Request, Response } from 'express';
import { Errors } from '../middlewares/errorHandler';

export const AuthController = {
	createNewUser: async (_req: Request, res: Response, next: NextFunction) => {
		try {
			const { name, email } = _req.body;
			if (!name && !email) {
				throw new Errors(404, 'input are empty');
			}
			res.json({ message: 'user created successfully' });
		} catch (error) {
			console.error(error);
			next(error);
		}
	},
	userLogin: (_req: Request, res: Response) => {
		try {
			res.json({ message: 'login successful' });
		} catch (error) {}
	},
};
