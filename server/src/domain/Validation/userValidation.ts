import { z } from 'zod';

export const userSchema = z.object({
	fullname: z.string().min(3, { message: 'must contain atleast 3 character' }),
	email: z.string().email({ message: 'enter valid email' }),
	password: z.string().min(8, { message: 'should be atleast 8 charcter' }),
	profile: z.string().optional(),
});
