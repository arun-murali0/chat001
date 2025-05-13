import { userProp } from '../../domain/types/userType';

export interface IuserRepository {
	createUser: (user: userProp) => Promise<userProp | null>;
	findUserByEmail: (email: string) => Promise<userProp | null>;
	findUserByNickname: (nickname: string) => Promise<userProp | null>;
	findUserById: (id: string) => Promise<userProp | null>;
}
