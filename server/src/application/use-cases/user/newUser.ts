import { IuserRepository } from '../../../application/ports/userPorts';
import { userProp } from '../../../domain/types/userType';
import {
	ValidationServiceProp,
	MappingService,
	GenerateAndVerifyTokenService,
	HashingService,
} from '../../../domain/services/userServices';
import { AppError } from '../../../utils/shared/AppError';

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
			throw new AppError(validateResult.errors || 'Validation error', 400);
		}
		const mappedUser = MappingService.mapToDomainModel(validateResult?.data);
		if (!mappedUser) {
			throw new AppError('Mapping error', 400);
		}

		const existingUser = await userRepository.findUserByEmail(mappedUser.email);
		if (existingUser) {
			throw new AppError('User already exists', 400);
		}

		mappedUser.password = await hashing.hashPassword(mappedUser.password);
		await userRepository.createUser(mappedUser);
		const token = tokenServices.accessToken({
			email: mappedUser.email,
			id: mappedUser?._id,
			role: mappedUser.role,
		});

		if (!token) {
			throw new AppError('Token generation error', 500);
		}
		return {
			id: mappedUser?._id,
			email: mappedUser.email,
		};
	};
};
