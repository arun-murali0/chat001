import express from 'express';
import { GetConfig } from './config';
import { DatabaseConnection } from './infrastructure/mongo/db';
import { InitRoutes } from './interface/routes';
import { errorHandler } from './interface/middlewares/errorHandler';

export const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', InitRoutes());

app.use(errorHandler);
app.listen(GetConfig.PORT, async () => {
	try {
		await DatabaseConnection(GetConfig.MONGO_STRING);
		console.info('server running....');
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
});
