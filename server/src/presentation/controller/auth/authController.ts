import { Request, Response } from 'express';
import { userServices } from '../../services/authServices';
import { asyncHandler } from '../../../presentation/middlewares/AsyncHandler';

export const AuthController = {
	signUp: asyncHandler(async (req: Request, res: Response) => {
		const userData = req.body;
		const user = await userServices.createUserServices(userData);
		res.status(201).json({ message: 'User created successfully', user });
	}),
};
