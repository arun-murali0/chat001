import Express from 'express';
import { GetConfig } from './config';
import { initRoutes } from './interface/http/routes';
import { DatabaseConnection } from './infrastructure/db/mongo';
import { errorHandler } from './interface/http/middleware/errorHandler';

const app = Express();

app.use(initRoutes());

app.use(errorHandler);

DatabaseConnection(GetConfig.MONGO_STRING)
	.then(() => {
		app.listen(GetConfig.PORT, () => {
			console.info('server running', GetConfig.PORT);
		});
	})
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
