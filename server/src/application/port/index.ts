import { userProps } from '../../types';

export interface userport {
	new: (userData: userProps) => Promise<userProps | null>;
	findByEmail: (email: string) => Promise<userProps | null>;
	findById: (id: string) => Promise<userProps | null>;
}
