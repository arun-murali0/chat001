import { FC } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

interface InputProp extends UseControllerProps {
	placeholder?: string;
	type: string;
	label: string;
	className?: string;
}

export const Input: FC<InputProp> = ({
	placeholder,
	type = 'text',
	label,
	className,
	...useControllerProps
}) => {
	const {
		field,
		fieldState: { error },
	} = useController(useControllerProps);

	return (
		<section>
			<label className="text-primaryText">{label}</label>
			<input
				{...field}
				placeholder={placeholder}
				type={type}
				className={`${className} p-2 my-2 w-full outline-none bg-inputText text-backgroundInput`}
			/>
			{error && <div className="text-textDanger">{error.message}</div>}
		</section>
	);
};
