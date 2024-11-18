import { Request, Response } from 'express-serve-static-core';
import { user } from '../../models/user';

export const createNewUser = async (req: Request, res: Response) => {
	try {
		const client_Data = req.body;
		// if (client_Data.email === user.email) {
		// 	res.status(400).json({ message: 'user already registrated' });
		// }
		const newUser = user.create(client_Data);
		res.status(200).json({ message: 'new User created successfully', newUser });
	} catch (error) {
		console.log(error.message);
	}
};
