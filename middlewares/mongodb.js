import mongoose from 'mongoose';

const connectDB = (handler) => async (req, res) => {
	if (mongoose.connections[0].readyState) {
		// Use current db connection
		return handler(req, res);
	}

	const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.wljjs.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

	await mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	return handler(req, res);
};

export default connectDB;
