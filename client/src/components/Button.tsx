import { FC } from 'react';

export enum buttonType {
	submit = 'submit',
	reset = 'reset',
	button = 'button',
}

export interface ButtonProp {
	className?: string;
	buttonType?: buttonType;
	value: string;
	onClick?: () => void;
}

export const Button: FC<ButtonProp> = ({ className, buttonType, value, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`${className} px-8 py-2  bg-buttonPrimary rounded-lg border border-neutral-600 `}
			type={buttonType}
		>
			{value}
		</button>
	);
};
