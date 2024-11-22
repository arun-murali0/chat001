import z from 'zod';

export const RegisterValidationSchema = z
	.object({
		username: z.string().trim(),
		email: z.string().email({ message: 'Enter valid email' }).trim(),
		password: z.string().max(8, { message: 'password should be atleast 8 characters' }),
	})
	.required();

export type registerType = z.infer<typeof RegisterValidationSchema>;
