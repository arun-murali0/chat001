import z from 'zod';

export const LoginValidationSchema = z
	.object({
		email: z.string().email({ message: 'Enter valid email' }).trim(),
		password: z.string().max(8, { message: 'password should be atleast 8 characters' }),
	})
	.required();

export type loginSchemaType = z.infer<typeof LoginValidationSchema>;
