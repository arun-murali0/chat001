import express from 'express';
import { DATABASE_CONNECTION } from './db';
import helmet from 'helmet';
import cors from 'cors';
import router from './routes';
const app = express();

// middleware
app.use(cors());
app.use(helmet());

// Routes
app.use('/api', router);

// database connection
DATABASE_CONNECTION()
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`server running in http://localhost:${process.env.PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
