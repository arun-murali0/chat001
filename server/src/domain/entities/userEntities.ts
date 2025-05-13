import { userProp } from '../types/userType';

// Function to map user object to userEntities
export const userMapToEntities = ({
	_id,
	fullname,
	createdAt,
	email,
	isActive,
	isDeleted,
	lastLogin,
	nickname,
	password,
	role,
	updatedAt,
}: userProp) => {
	return {
		_id,
		fullname,
		nickname,
		email,
		password,
		createdAt,
		updatedAt,
		isActive,
		isDeleted,
		role,
		lastLogin,
	} as userProp;
};
