import mongoose from 'mongoose';

export const DatabaseConnection = async (uri: string) => {
	try {
		if (uri === '') {
			console.error('database string is empty');
		}
		await mongoose.connect(uri);
		console.info('database connection is established......');
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};
