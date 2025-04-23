import { userSchema } from '../../domain/Validation/userValidation';
import { userProps } from '../../types';

export const newUser = (userData: userProps) => {
	try {
		const validateData = userSchema.parseAsync(userData);
	} catch (error) {}
};
