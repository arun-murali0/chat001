import mongoose from 'mongoose';

export const connectToMongoDB = async (uri: string) => {
	try {
		if ((uri = '')) {
			throw new Error('MongoDB URI is required');
		}
		await mongoose.connect(uri);
		console.info("database connection established....")
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
		process.exit(1);
	}
};
