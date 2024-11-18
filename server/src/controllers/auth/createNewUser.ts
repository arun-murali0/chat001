import { Request, Response } from 'express-serve-static-core';
import { user } from '../../models/user';
import { hashPassword } from '../../middleware/passwordhash';

export const createNewUser = async (req: Request, res: Response) => {
	try {
		let client_Data = req.body;

		// hasing a password
		client_Data.password = hashPassword(client_Data.password);

		const newUser = user.create(client_Data);
		res.status(200).json({ message: 'new User created successfully', newUser });
	} catch (error) {
		console.log(error.message);
	}
};
