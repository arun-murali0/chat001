import dotEnv from 'dotenv';
dotEnv.config();

interface getConfigType {
	PORT: string;
	MONGO_STRING: string;
	jwt_SECRET: string;
	JWT_EXPIRY: string;
}

export const GetConfig: getConfigType = {
	PORT: process.env.PORT!,
	MONGO_STRING: process.env.MONGO_STRING!,
	jwt_SECRET: process.env.JWT_SECRET!,
	JWT_EXPIRY: '1D',
};
