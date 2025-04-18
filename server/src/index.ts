import Express from 'express';
import { GetConfig } from './config';
import { DatabaseConnection } from './infrastructure/mongo/db';

export const app = Express();

app.listen(GetConfig.PORT, async () => {
	try {
		await DatabaseConnection(GetConfig.MONGO_STRING);
		console.info('server is running..');
	} catch (error) {
		console.error(error);
	}
});
