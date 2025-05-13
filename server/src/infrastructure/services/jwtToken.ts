import jwt, { JwtPayload } from 'jsonwebtoken';
import {
	CustomJwtPayload,
	GenerateAndVerifyTokenService,
} from '../../domain/services/userServices';

export const GenerateAndVerifyToken: GenerateAndVerifyTokenService = {
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
	verifyToken: (token: string): Promise<CustomJwtPayload | null> => {
		return new Promise<CustomJwtPayload | null>((resolve, reject) => {
			jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
				if (err) {
					return reject(err);
				}
				resolve(decoded as CustomJwtPayload);
			});
		});
	},
};
