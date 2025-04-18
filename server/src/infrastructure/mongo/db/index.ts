import mongoose from 'mongoose';

export const DatabaseConnection = async (url: string) => {
	try {
		if (url === '') {
			console.error('need database connection');
		}
		await mongoose.connect(url);
		console.info('database connection established.....');
	} catch (error) {
		console.error(error);
	}
};
