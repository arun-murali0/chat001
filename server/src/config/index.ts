import dotenv from 'dotenv';
dotenv.config();

export const DataConfig = {
	api: {
		MONGO_STRING: process.env.MONGO_STRING,
	},
};
