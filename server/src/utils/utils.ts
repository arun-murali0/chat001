import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { GetConfig } from '../config';
// import { CookieOptions, Response } from 'express';

// password hashing
export const hashPassword = (password: string): string => {
	const saltRound = 10;
	const salt = bcrypt.hashSync(password, saltRound);
	return salt;
};

// compare password
export const comparePassword = (password: string, hashedPassword: string): boolean => {
	return bcrypt.compareSync(password, hashedPassword);
};

// jwt token generation
export const tokenGeneration = (userId: JwtPayload): string => {
	const token = jwt.sign(userId, GetConfig.jwt_SECRET, { expiresIn: '7D' });
	return token;
};

// cookie
// export const cookie = (res: Response, value: any) => {};
