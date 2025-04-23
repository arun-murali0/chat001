import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { GetConfig } from 'src/config';

// jwt
export const tokenGeneration = (userId: JwtPayload): string => {
	const token = jwt.sign(userId, GetConfig.JWT_SECRET, { expiresIn: '3d' });
	return token;
};

// password hash
export const hashPassword = (password: string): string => {
	const saltRound = 10;
	const salt = bcrypt.hashSync(password, saltRound);
	return salt;
};

// compare password
export const comparePassword = (hashedPassword: string, password: string): boolean => {
	return bcrypt.compareSync(hashedPassword, password);
};
