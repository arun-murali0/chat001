import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormProps } from 'react-hook-form';
import z from 'zod';

const useFormHook = <T,>(schema: z.ZodSchema<T>, options?: UseFormProps) => {
	return useForm({
		...options,
		resolver: zodResolver(schema),
	});
};
export default useFormHook;
