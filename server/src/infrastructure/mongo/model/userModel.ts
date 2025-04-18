import mongoose from 'mongoose';
import { usertype } from 'src/types/userType';

const userModel = new mongoose.Schema<usertype>(
	{
		fullname: {
			type: String,
			required: true,
			min: 3,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		profile: {
			type: String,
			default: '',
		},
	},
	{
		timestamps: true,
	}
);

export const user = mongoose.model<usertype>('user', userModel);
