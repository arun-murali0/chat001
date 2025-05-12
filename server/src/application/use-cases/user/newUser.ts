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
		return await userRepository.createUser(mappedUser);
	};
};
