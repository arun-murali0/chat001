import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
const app = express();
import router from './routes';
import { DATABASE_CONNECTION } from './db';
import { errorMethods } from './middleware/errorHandler';

// middleware
app.use(cors());
app.use(helmet());

// session
app.use(
	session({
		secret: '',
		resave: false,
		saveUninitialized: false,
		cookie: { secure: true, maxAge: 60 * 60 * 24 },
	})
);

// passport initilize
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api', router);

// database connection
DATABASE_CONNECTION()
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`server running in http://localhost:${process.env.PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});

// error handler
app.use(errorMethods);
