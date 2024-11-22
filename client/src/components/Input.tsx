import { FC } from 'react';
import { useForm } from 'react-hook-form';

interface InputProp {
	placeholder?: string;
	type: string;
	label?: string;
	className?: string;
}

export const Input: FC<InputProp> = ({ placeholder, type, label, className }) => {
	const {
		register,
		formState: { errors },
	} = useForm();

	return (
		<section>
			<label htmlFor={label} className="text-primaryText">
				{label}
			</label>
			<input
				placeholder={placeholder}
				type={type}
				id={label}
				className={`${className} p-2 my-2 w-full outline-none bg-inputText text-backgroundInput`}
				{...register(`${label}`)}
			/>
			<div className="text-textDanger">{errors.root?.message}</div>
		</section>
	);
};
