import { Router } from 'express';
import { AuthRoutes } from './AuthRoutes';

const InitRouter = () => {
	const router = Router();

	router.use('/auth', AuthRoutes);

	return router;
};

export const InitRoutes = InitRouter();
