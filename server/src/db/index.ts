import mongoose from 'mongoose';
import { DataConfig } from '../config';

export const DATABASE_CONNECTION = async () => {
	try {
		if (DataConfig.api.MONGO_STRING) {
			mongoose.connect(DataConfig.api.MONGO_STRING);
		}
	} catch (error) {
		process.exit(1);
	}
};
