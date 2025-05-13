import { Router } from 'express';
import { AuthController } from '../controller/auth/authController';
const AuthRouter = () => {
	const router = Router();

	router.post('/sign-up', AuthController.signUp);
	router.post('/sign-in', AuthController.signIn);
	// router.post('/sign-out', AuthController.signOut);

	return router;
};

export const AuthRoutes = AuthRouter();
