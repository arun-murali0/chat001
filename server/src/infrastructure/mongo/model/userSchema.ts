import mongoose from 'mongoose';
import { userProp } from '../../../domain/types/userType';

const userSchema = new mongoose.Schema<userProp>({
	fullname: { type: String, required: true, min: 3, max: 50 },
	nickname: { type: String, required: true, min: 3, max: 50, unique: true },
	email: { type: String, unique: true, required: true },
	password: { type: String, min: 8 },
	role: { type: String, enum: ['user', 'admin'], default: 'user' },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
	isActive: { type: Boolean, default: true },
	isDeleted: { type: Boolean, default: false },
	lastLogin: { type: Date },
});

export const UserModel = mongoose.model<userProp>('User', userSchema);
