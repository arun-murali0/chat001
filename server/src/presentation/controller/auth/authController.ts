import { Request, Response } from 'express';
import { userServices } from '../../services/authServices';

export const AuthController = {
	signUp: async (req: Request, res: Response) => {
		try {
			const userData = req.body;
			const user = await userServices.createUserServices(userData);
			res.status(201).json({ message: 'User created successfully', user });
		} catch (error: any) {
			res.status(400).json({ message: error.message || 'Failed to create user' });
		}
	},
};
