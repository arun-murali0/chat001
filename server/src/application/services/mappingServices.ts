import { userProp } from '../../domain/types/userType';
import { userMapToEntities } from '../../domain/entities/userEntities';
import { MappingService } from '../../domain/services/userServices';

export const userMappingService: MappingService<userProp, userProp> = {
	mapToDomainModel(data: userProp) {
		return userMapToEntities(data);
	},
};
