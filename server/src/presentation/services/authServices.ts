import { newUser } from '../../application/use-cases/user/newUser';
import { loginUser } from '../../application/use-cases/user/login-useCase';
import { UserRepositoryActions } from '../../infrastructure/mongo/repository/userAction';
import {
	userValidationService,
	userLoginService,
} from '../../application/services/validationServices';
import {
	userMappingService,
	userMapLoginService,
} from '../../application/services/mappingServices';
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

	loginUserServices: loginUser(
		userLoginService,
		userMapLoginService,
		UserRepositoryActions,
		hashingService,
		GenerateAndVerifyToken
	),
};
