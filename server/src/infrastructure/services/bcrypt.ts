import bcrypt from 'bcrypt';

export const hashPassword = (password: string): string => {
	const saltRounds = 10;
	const salt = bcrypt.genSaltSync(saltRounds);
	return bcrypt.hashSync(password, salt);
};

export const comparePassword = (password: string, hash: string): boolean => {
	return bcrypt.compareSync(password, hash);
};
