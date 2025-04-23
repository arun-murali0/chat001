import dotenv from 'dotenv';
dotenv.config();

type GetConfigProp = {
	PORT: string;
	JWT_SECRET: string;
	MONGO_STRING: string;
};

export const GetConfig: GetConfigProp = {
	PORT: process.env.PORT!,
	JWT_SECRET: process.env.JWT_SECRET!,
	MONGO_STRING: process.env.MONGO_STRING!,
};
