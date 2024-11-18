import mongoose from 'mongoose';
import { DataConfig } from '../config';

export const DATABASE_CONNECTION = async () => {
	try {
		if (DataConfig.api.MONGO_STRING) {
			mongoose.connect(DataConfig.api.MONGO_STRING);
		}
		console.log("connection Established");
		
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};
