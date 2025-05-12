import { userProp } from '../../domain/types/userType';

export interface IuserRepository {
	createUser: (user: userProp) => Promise<userProp | null>;
	findUserByEmail: (email: string) => Promise<userProp | null>;
	findUserByNickname: (nickname: string) => Promise<userProp | null>;
	findUserById: (id: string) => Promise<userProp | null>;
	generateToken?: (userId: string) => Promise<{ accessToken: string; refreshToken: string }>;
	verifyToken?: (token: string) => Promise<{ userId: string } | null>;
	hashPassword?: (password: string) => Promise<string>;
	comparePassword?: (password: string, hashedPassword: string) => Promise<boolean>;
}
