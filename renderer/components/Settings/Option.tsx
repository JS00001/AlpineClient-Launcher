import React, { PropsWithChildren, ReactElement } from 'react';

export type OptionProps = React.FC<React.HTMLAttributes<HTMLDivElement>> & {
	Title?: React.FC<PropsWithChildren>;
	Description?: React.FC<PropsWithChildren>;
	Content?: React.FC<PropsWithChildren>;
};

const Option: OptionProps = ({ children }) => {
	return (
		<div className='grid grid-cols-12 rounded-3xl bg-primary-300 p-5'>
			<div className='col-span-5 pr-2'>
				{React.Children.toArray(children).filter(
					(child) => (child as ReactElement).type === Option.Title
				)}
				{React.Children.toArray(children).filter(
					(child) => (child as ReactElement).type === Option.Description
				)}
			</div>
			<div className='col-span-7 pl-2'>
				<div className='flex h-full w-full items-center'>
					{React.Children.toArray(children).filter(
						(child) => (child as ReactElement).type === Option.Content
					)}
				</div>
			</div>
		</div>
	);
};

const Title: React.FC<PropsWithChildren> = ({ children }) => {
	return <h1 className='mb-2 text-xl font-medium text-white'>{children}</h1>;
};

const Description: React.FC<PropsWithChildren> = ({ children }) => {
	return <h2 className='flex-wrap text-primary-100'>{children}</h2>;
};

const Content: React.FC<PropsWithChildren> = ({ children }) => {
	return <>{children}</>;
};

Option.Title = Title;
Option.Description = Description;
Option.Content = Content;

export default Option;
