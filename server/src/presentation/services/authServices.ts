import { newUser } from '../../application/use-cases/user/newUser';
import { UserRepositoryActions } from '../../infrastructure/mongo/repository/userAction';
import { userValidationService } from '../../application/services/validationServices';
import { userMappingService } from '../../application/services/mappingServices';
import { hashingService } from '../../infrastructure/services/bcrypt';
import { GenerateAndVerifyToken } from '../../infrastructure/services/jwtToken';

export const userServices = {
	createUserServices: newUser(
		userValidationService,
		userMappingService,
		UserRepositoryActions,
		hashingService,
		GenerateAndVerifyToken
	),
};
