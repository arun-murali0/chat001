import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
const app = express();
import router from './routes';
import { DATABASE_CONNECTION } from './db';
import { errorMethods } from './middleware/errorHandler';

const PORT = process.env.PORT || 3000;
const cookieSecret = process.env.COOKIE_SECRET || '';

// middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session
app.use(
	session({
		secret: cookieSecret,
		resave: false,
		saveUninitialized: false,
		cookie: { secure: false, maxAge: 60 * 60 * 24 },
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
		app.listen(PORT, () => {
			console.log(`server running in http://localhost:${process.env.PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});

// error handler
app.use(errorMethods);
