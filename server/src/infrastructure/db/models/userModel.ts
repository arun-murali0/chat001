import mongoose from 'mongoose';
import { userProps } from '../../../types';

export const userSchema = new mongoose.Schema<userProps>(
	{
		fullname: {
			type: String,
			required: true,
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

export const user = mongoose.model<userProps>('user', userSchema);
