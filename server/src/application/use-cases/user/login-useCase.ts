import { IuserRepository } from '../../../application/ports/userPorts';
import { loginProp } from '../../../domain/types/userType';
import {
	ValidationServiceProp,
	MappingService,
	GenerateAndVerifyTokenService,
	HashingService,
} from '../../../domain/services/userServices';
import { AppError } from '../../../utils/shared/AppError';

export const loginUser = (
	validationService: ValidationServiceProp<loginProp>,
	MappingService: MappingService<loginProp, loginProp>,
	userRepository: IuserRepository,
	hashing: HashingService,
	tokenServices: GenerateAndVerifyTokenService
) => {
	return async (userData: loginProp) => {
		const validateResult = validationService.validate(userData);
		if (!validateResult.success) {
			throw new AppError(validateResult.errors || 'Validation error', 400);
		}

		const mappedUser = MappingService.mapToDomainModel(validateResult?.data);
		if (!mappedUser) {
			throw new AppError('Mapping error', 400);
		}

		const findUser = await userRepository.findUserByEmail(mappedUser.email);
		if (!findUser) {
			throw new AppError('User not found', 404);
		}

		const isPasswordValid = await hashing.verifyPassword(mappedUser.password, findUser.password);
		if (!isPasswordValid) {
			throw new AppError('Invalid password', 401);
		}

		const token = tokenServices.accessToken({
			email: mappedUser.email,
		});

		if (!token) {
			throw new AppError('Token generation error', 500);
		}
		return {
			token: token,
			email: mappedUser.email,
		};
	};
};
