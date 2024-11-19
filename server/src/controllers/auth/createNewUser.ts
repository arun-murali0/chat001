import { Request, Response } from 'express-serve-static-core';
import { newUser } from '../../services/auth/newUser';
import { customError } from '../../middleware/errorHandler';

export const createNewUser = async (req: Request, res: Response) => {
	try {
		const clientData = req.body;
		const newuser = await newUser(clientData);
		if (newuser) {
			res.status(200).json({ message: 'new User created successfully' });
		}
	} catch (error) {
		throw new customError(400, error.message);
	}
};
