import mongoose, { Schema } from 'mongoose';
import { userProp } from '../utils/types/user';

// user model
const UserDataModel: Schema = new mongoose.Schema<userProp>({
	firstname: {
		type: String,
		require: true,
	},
	lastname: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		unique: true,
		require: true,
	},
	password: {
		type: String,
		require: true,
	},
});

export const user = mongoose.model<userProp>('user', UserDataModel);
