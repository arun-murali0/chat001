import { userProp, loginProp } from '../types/userType';

// Function to map user object to userEntities
export const userMapToNewEntities = ({
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

export const userMapToLoginEntities = ({ email, password }: loginProp) => {
	return {
		email,
		password,
	} as loginProp;
};
