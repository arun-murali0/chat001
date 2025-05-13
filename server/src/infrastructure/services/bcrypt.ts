import bcrypt from 'bcrypt';
import { HashingService } from '../../domain/services/userServices';

export const hashingService: HashingService = {
	hashPassword: async (password: string): Promise<string> => {
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);
		return hashedPassword;
	},
	verifyPassword: async (password: string, hashedPassword: string): Promise<boolean> => {
		const isMatch = await bcrypt.compare(password, hashedPassword);
		return isMatch;
	},
};
