import { IuserRepository } from '../../../application/ports/userPorts';
import { userProp } from '../../../domain/types/userType';
import { ValidationServiceProp, MappingService } from '../../../domain/services/userServices';

export const newUser = (
	validationService: ValidationServiceProp<userProp>,
	MappingService: MappingService<userProp, userProp>,
	userRepository: IuserRepository
) => {
	return async (userData: userProp) => {
		const validateResult = validationService.validate(userData);
		if (!validateResult.success) {
			throw new Error(validateResult?.errors);
		}
		const mappedUser = MappingService.mapToDomainModel(validateResult?.data);
		if (!mappedUser) {
			throw new Error('Error mapping user');
		}

		const existingUser = await userRepository.findUserByEmail(mappedUser.email);
		if (existingUser) {
			throw new Error('User already exists');
		}
		const hashedPassword = await userRepository.hashPassword!(mappedUser.password);

		const passwordHashedUser = {
			...mappedUser,
			hashedPassword,
		};

		const token = await userRepository.generateToken!(mappedUser.email);

		console.log('token', token);

		return {
			user: await userRepository.createUser(passwordHashedUser),
			token: token,
		};
	};
};
