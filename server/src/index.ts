import express from 'express';
import { config } from './config/appConfig';
import { ConnectToDatabase } from './infrastructure/mongo/db';
import { InitRoutes } from './presentation/routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', InitRoutes);

ConnectToDatabase(config.MONGO_STRING!)
	.then(() => {
		app.listen(config.PORT, () => {
			console.log('Server is running on port', config.PORT);
		});
	})
	.catch((err) => console.error(err));
