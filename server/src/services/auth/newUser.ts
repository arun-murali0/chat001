import { userProp } from '../../utils/types/user';
import { hashPassword } from '../../middleware/passwordhash';
import { user } from '../../models/user';

export const newUser = async (data: userProp): Promise<userProp | null> => {
	try {
		const passwordHash = hashPassword(data.password);
		data.password = passwordHash;
		const newuser = await user.create(data);
		return newuser;
	} catch (error) {
		console.log(error);
		return null;
	}
};
