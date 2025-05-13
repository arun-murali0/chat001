import mongoose from 'mongoose';

export type userProp = {
	_id?: mongoose.Types.ObjectId | string;
	fullname: string;
	nickname: string;
	email: string;
	password: string;
	role: string;
	createdAt: Date;
	updatedAt: Date;
	isActive: boolean;
	isDeleted: boolean;
	lastLogin: Date;
};

export type userPropWithoutPassword = Omit<userProp, 'password'>;

export type loginProp = {
	email: string;
	password: string;
};
