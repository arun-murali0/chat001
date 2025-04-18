import express from 'express';
import { AuthRoutes } from './AuthRoutes';

export const InitRoutes = () => {
	const app = express();

	app.use('/auth', AuthRoutes());
	// app.use("/api",)

	return app;
};
