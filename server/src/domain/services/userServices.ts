import { JwtPayload } from 'jsonwebtoken';

export interface CustomJwtPayload extends JwtPayload {
	userId: string;
}

export interface MappingService<T, U> {
	mapToDomainModel(data: T): U | null;
}

export interface ValidationServiceProp<T> {
	validate: (data: T) => { success: boolean; data: T; errors?: any };
}

export interface GenerateAndVerifyTokenService {
	accessToken: (userId: JwtPayload) => string;
	refreshToken: (userId: JwtPayload) => string;
	verifyToken: (token: string) => Promise<CustomJwtPayload | null>;
}

export interface HashingService {
	hashPassword: (password: string) => Promise<string>;
	verifyPassword: (password: string, hashedPassword: string) => Promise<boolean>;
}
