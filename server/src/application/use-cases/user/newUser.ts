import { IuserRepository } from '../../../application/ports/userPorts';
import { userProp } from '../../../domain/types/userType';
import {
	ValidationServiceProp,
	MappingService,
	GenerateAndVerifyTokenService,
	HashingService,
} from '../../../domain/services/userServices';

export const newUser = (
	validationService: ValidationServiceProp<userProp>,
	MappingService: MappingService<userProp, userProp>,
	userRepository: IuserRepository,
	hashing: HashingService,
	tokenServices: GenerateAndVerifyTokenService
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

		mappedUser.password = await hashing.hashPassword(mappedUser.password);
		await userRepository.createUser(mappedUser);
		const token = tokenServices.accessToken({
			email: mappedUser.email,
			id: mappedUser?._id,
			role: mappedUser.role,
		});

		console.log('token', token);
		console.log(mappedUser?._id);

		if (!token) {
			throw new Error('Error generating token');
		}
		return {
			id: mappedUser?._id,
			email: mappedUser.email,
		};
	};
};
