import { Router } from 'express';
import { AuthController } from '../controller/authController';

export const authRoutes = () => {
	const router = Router();

	router.post('/sign-up', AuthController.createNewUser);
	router.post('/sign-in', AuthController.signOutUser);
	router.post('/sign-out', AuthController.signOutUser);

	return router;
};
