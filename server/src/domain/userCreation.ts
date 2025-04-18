import { z } from 'zod';

export const userLogicSchema = z.object({
	fullname: z.string().min(3, { message: 'minimum length should contain atleast 3 character' }),
	email: z.string().email({ message: 'enter valid email' }),
	password: z.string().min(8, { message: 'password should contain atleast 8 characters' }),
});
