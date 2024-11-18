import passport, { DoneCallback } from 'passport';
import { Strategy } from 'passport-local';
import { user } from '../models/user';
import { verifyPassword } from './passwordhash';
import { userProp } from '../utils/types/user';

passport.serializeUser((user: Pick<userProp, '_id'>, done: DoneCallback) => {
	done(null, user._id);
});

passport.deserializeUser(async (_id, done: DoneCallback) => {
	try {
		const findUser = await user.findById(_id);
		if (!findUser) {
			done(false, null);
		}
	} catch (error) {
		done(error, null);
	}
});

export default passport.use(
	new Strategy(
		{ usernameField: 'email', passwordField: 'password' },
		async (email: string, password: string, done: any) => {
			try {
				const findUser = await user.findOne({ email: email }).exec();
				// check user
				if (!findUser) {
					return done(null, false, { message: 'user Not Found' });
				}
				// check password
				const match = verifyPassword(password, findUser.password);
				if (!match) {
					done(null, false, { message: "password didn't Match" });
				}
				done(null, findUser);
			} catch (error) {
				done(error, false);
			}
		}
	)
);
