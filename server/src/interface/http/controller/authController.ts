import { asyncHandler } from '../middleware/errorHandler';

export const authController = {
	newUser: asyncHandler(async (_req, res) => {
		res.json({ message: 'hellow world' });
	}),
	userLogin: asyncHandler(async (_req, res) => {
		res.json({ msg: 'login successfully' });
	}),
};
