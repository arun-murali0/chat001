import { Router } from 'express';
import { authController } from '../controller/authController';

export const authRoutes = () => {
	const routes = Router();

	routes.post('/sign-up', authController.newUser);
	routes.post('/sign-in', authController.userLogin);

	return routes;
};
