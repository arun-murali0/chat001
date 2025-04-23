import { user } from '../models/userModel';
import { userProps } from '../../../types';
import { userport } from '../../../application/port';

export const userRepository: userport = {
	new: async (userData: userProps): Promise<userProps | null> => {
		return await user.create(userData);
	},
	findByEmail: async (email: string): Promise<userProps | null> => {
		return await user.findOne({ email: email }).exec();
	},
	findById: async (id: string): Promise<userProps | null> => {
		return await user.findById({ _id: id }).exec();
	},
};
