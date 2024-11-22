import { FC } from 'react';

interface InputProp {
	placeholder?: string;
	type: string;
	label?: string;
	onChange?: () => {};
	className?: string;
}

export const Input: FC<InputProp> = ({ onChange, placeholder, type, label, className }) => {
	return (
		<div>
			<label htmlFor={label} className="text-primaryText">
				{label}
			</label>
			<input
				placeholder={placeholder}
				type={type}
				id={label}
				onChange={onChange}
				className={`${className} p-2 my-2 w-full outline-none bg-inputText`}
			/>
		</div>
	);
};
