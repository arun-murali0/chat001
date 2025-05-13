import { loginProp, userProp } from '../../domain/types/userType';
import { userMapToNewEntities, userMapToLoginEntities } from '../../domain/entities/userEntities';
import { MappingService } from '../../domain/services/userServices';

export const userMappingService: MappingService<userProp, userProp> = {
	mapToDomainModel(data: userProp) {
		return userMapToNewEntities(data);
	},
};

export const userMapLoginService: MappingService<loginProp, loginProp> = {
	mapToDomainModel(data: loginProp) {
		return userMapToLoginEntities(data);
	},
};
