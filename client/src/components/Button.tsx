import { FC } from 'react';

export enum buttonType {
	submit = 'submit',
	reset = 'reset',
	button = 'button',
}

interface ButtonProp {
	className?: string;
	buttonType: buttonType;
	value: string;
}

export const Button: FC<ButtonProp> = ({ className, buttonType, value }) => {
	return (
		<button className={`${className} px-8 py-3  bg-[#202120] text-white`} type={buttonType}>
			{value}
		</button>
	);
};
