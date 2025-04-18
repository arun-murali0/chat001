import { FC, ReactNode } from 'react';

interface ContainerProp {
	className?: string;
	children: ReactNode;
}

export const Wrapper: FC<ContainerProp> = ({ className, children }) => {
	return <div className={`container max-h-full min-w-5xl ${className}`}>{children}</div>;
};
