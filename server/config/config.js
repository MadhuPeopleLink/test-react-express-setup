//setup MONGO_URL
var mongoURL = ""

if (process.env.MONGO_URL) mongoURL = process.env.MONGO_URL;
else mongoURL = process.env.NODE_ENV == "development" ? 'mongodb://localhost:27017/test-react-express-setup' : '';

const config = {
	mongoURL: mongoURL,
	port: process.env.PORT || 3000
};

export default config;