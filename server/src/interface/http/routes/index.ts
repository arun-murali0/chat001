import { Router } from 'express';
import { authRoutes } from './AuthRoutes';

export const initRoutes = () => {
	const routes = Router();

	routes.use('/auth', authRoutes());

	return routes;
};
