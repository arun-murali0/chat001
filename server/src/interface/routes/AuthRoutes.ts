import { Router } from 'express';
import { AuthController } from '../controller/AuthController';

export const AuthRoutes = () => {
	const routes = Router();
	routes.post('/sign-up', AuthController.createNewUser);
	routes.post('/sign-in', AuthController.userLogin);

	return routes;
};
