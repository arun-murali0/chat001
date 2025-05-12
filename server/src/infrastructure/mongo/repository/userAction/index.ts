import { UserModel } from '../../model/userSchema';
import { IuserRepository } from '../../../../application/ports/userPorts';
import { userProp } from '../../../../domain/types/userType';

export const UserRepositoryActions: IuserRepository = {
	// new user
	createUser: async (user: userProp): Promise<userProp | null> => {
		return await UserModel.create(user);
	},

	// search user by email
	findUserByEmail: async (email: string): Promise<userProp | null> => {
		return await UserModel.findOne({ email });
	},
	// search user by nickname
	findUserByNickname: async (nickname: string): Promise<userProp | null> => {
		return await UserModel.findOne({ nickname });
	},
	// search user by id
	findUserById: async (id: string) => {
		return await UserModel.findById(id);
	},
};
