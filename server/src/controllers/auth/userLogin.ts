import { Request, Response } from 'express-serve-static-core';
import passport from '../../middleware/localPassword';

export const userLogin = async (req: Request, res: Response) => {
	try {
		passport.authenticate('local', (err: any, user: any, info: any) => {
			if (err) {
				res.status(500).json({ message: 'Internal server error' });
			}

			if (!user) {
				res.status(401).json({ message: info?.message || 'Invalid email or password' });
			}

			// successfull login
			req.login(user, (err) => {
				if (err) {
					res.status(400).json({ message: 'Login failed' }).redirect('/auth/login');
				}
				res.status(200).json({ message: 'Login Successfull' });
			});
		});
	} catch (error) {
		console.log(error.message);
	}
};
