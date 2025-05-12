import { userProp } from '../../domain/types/userType';
import { userSchema } from '../../domain/validation/userSchemaValidation';
import { ValidationServiceProp } from '../../domain/services/userServices';

export const userValidationService: ValidationServiceProp<userProp> = {
	validate: (data: userProp) => {
		const result = userSchema.safeParse(data);

		return {
			success: result.success,
			data: result.success ? result.data : data,
			errors: result.success ? undefined : result.error.format(),
		};
	},
};
