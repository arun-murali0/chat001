import { user } from '../model/userModel';

type userDataProps = {
	fullname: string;
	email: string;
	password: string;
};

export const userRepositoryActions = {
	new: async (userData: userDataProps): Promise<userDataProps | null> => {
		return await user.create(userData);
	},

	findByEmail: async (email: string): Promise<userDataProps | null> => {
		return await user.findOne({ email: email });
	},

	findById: async (userId: string): Promise<userDataProps | null> => {
		return await user.findById(userId);
	},
};
