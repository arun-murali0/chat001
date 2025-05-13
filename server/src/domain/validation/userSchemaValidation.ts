import { z } from 'zod';

export const userSchema = z.object({
	id: z.string().uuid().optional(),
	fullname: z
		.string()
		.min(3, { message: 'must have atleast 3 character' })
		.max(50, { message: 'must have atmost 50 character' }),
	nickname: z
		.string()
		.min(3, { message: 'must have atleast 3 character' })
		.max(50, { message: 'must have atmost 50 character' }),
	email: z.string().email(),
	password: z.string().min(8).max(100),
	role: z.enum(['admin', 'user']).default('user'),
	isActive: z.boolean().default(false),
	isDeleted: z.boolean().default(false),
	createdAt: z.date().default(new Date()),
	updatedAt: z.date().default(new Date()),
	lastLogin: z.date().default(new Date()),
});

export const loginSchema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
	password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
});
