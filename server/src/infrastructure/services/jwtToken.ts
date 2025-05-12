import jwt, { JwtPayload } from 'jsonwebtoken';

export const generateToken = {
	accessToken: (userId: JwtPayload): string => {
		return jwt.sign(userId, process.env.JWT_SECRET as string, {
			expiresIn: '15m',
		});
	},
	refreshToken: (userId: JwtPayload): string => {
		return jwt.sign(userId, process.env.JWT_SECRET as string, {
			expiresIn: '7d',
		});
	},
};
