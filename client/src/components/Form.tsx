import { FC, ReactNode } from 'react';

interface FormProp {
	children: ReactNode;
	onSubmit?: () => {};
	className?: string;
}

export const Form: FC<FormProp> = ({ className, children, onSubmit }) => {
	return (
		<form
			onSubmit={onSubmit}
			className={`max-h-fit max-w-fit p-5 shadow-xl border-neutral-700 rounded-md border ${className}`}
		>
			<div className="my-3">
				<div>{children}</div>
			</div>
		</form>
	);
};
