import { FC, ReactElement } from 'react';

interface ContainerProp {
	className?: string;
	children: ReactElement;
}

export const Wrapper: FC<ContainerProp> = ({ className, children }) => {
	return <div className={`container max-h-full min-w-5xl ${className}`}>{children}</div>;
};
