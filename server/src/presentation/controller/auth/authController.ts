import { Request, Response } from 'express';
import { userServices } from '../../services/authServices';
import { asyncHandler } from '../../../presentation/middlewares/AsyncHandler';

export const AuthController = {
	// sign-up
	signUp: asyncHandler(async (req: Request, res: Response) => {
		const userData = req.body;
		const { token } = await userServices.createUserServices(userData);
		res.cookie('accessToken', token);
		res.status(201).json({ message: 'User created successfully' });
	}),

	// login
	signIn: asyncHandler(async (req: Request, res: Response) => {
		const userData = req.body;
		const { token, email } = await userServices.loginUserServices(userData);
		res.cookie('accessToken', token);
		res.status(201).json({ message: 'Login successfull', email });
	}),
};
