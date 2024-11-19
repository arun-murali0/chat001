import { Request, Response } from 'express-serve-static-core';
import { customError } from '../../middleware/errorHandler';

declare module 'express-session' {
	interface SessionData {
		passport: {
			user: string;
		};
	}
}

export const userLogin = async (_req: Request, _res: Response) => {
	try {
		const userSession = _req.session.passport?.user;
		if (userSession) {
			_res.status(200).json({ message: 'login succesfull' });
		}
	} catch (error) {
		throw new customError(400, error.message);
	}
};
