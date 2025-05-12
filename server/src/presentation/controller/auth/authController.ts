import { Request, Response } from 'express';
import { newUser } from '../../../application/use-cases/user/newUser';
import { UserRepositoryActions } from '../../../infrastructure/mongo/repository/userAction';
import { userValidationService } from '../../../application/services/validationServices';
import { userMappingService } from '../../../application/services/mappingServices';

const createUserUseCase = newUser(userValidationService, userMappingService, UserRepositoryActions);

export const AuthController = {
	signUp: async (req: Request, res: Response) => {
		try {
			const userData = req.body;
			const user = await createUserUseCase(userData);
			res.status(201).json({ message: 'User created successfully', user });
		} catch (error: any) {
			res.status(400).json({ message: error.message || 'Failed to create user' });
		}
	},
};
