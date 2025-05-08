import express from 'express';
import { errorHandler } from './presentation/middleware/errorHandlerMiddleware';
import { connectToMongoDB } from './infrastructure/mongo/db';
import { config } from './config/appConfig';
const app = express();


// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(cors)



// Error handler
app.use(errorHandler)


connectToMongoDB(config.MONGO_STRING!).then(() => {
	// server
	app.listen(3000, () => {
		console.log('Server is running on http://localhost:3000');
	});
}).catch(err => console.error(err))

