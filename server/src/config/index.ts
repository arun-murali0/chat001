import dotEnv from 'dotenv';
dotEnv.config();

interface getConfigType {
	PORT: string;
	MONGO_STRING: string;
}

export const GetConfig: getConfigType = {
	PORT: process.env.PORT!,
	MONGO_STRING: process.env.MONGO_STRING!,
};
