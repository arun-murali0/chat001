import bcrypt from 'bcrypt';

// hashing a password
export const hashPassword = (password: string) => {
	let salt = 10;
	const saltRound = bcrypt.genSaltSync(salt);
	return bcrypt.hashSync(password, saltRound);
};

// compare password and excrypted password
export const verifyPassword = (password: string, hashedPassword: string) => {
	return bcrypt.compareSync(password, hashedPassword);
};
