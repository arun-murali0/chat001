import { usertype } from '../../types/userType';

export interface userRepo {
	findByEmail(email: string): Promise<usertype | null>;
	create(user: usertype): Promise<usertype>;
	findById(id: string): Promise<usertype | null>;
}
