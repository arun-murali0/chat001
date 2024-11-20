import { FC, ReactElement } from 'react';

interface ContainerProp {
	className: string;
	children: ReactElement;
}

export const Wrapper: FC<ContainerProp> = ({ className, children }) => {
	return (
		<div className={`container max-h-screen min-w-full overflow-x-hidden ${className}`}>
			{children}
		</div>
	);
};
