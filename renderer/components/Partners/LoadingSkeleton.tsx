const LoadingSkeleton: React.FC = () => {
	return (
		<div className='flex animate-pulse flex-col gap-y-8'>
			<div className='h-32 w-full rounded-2xl bg-primary-300' />
			<div className='h-32 w-full rounded-2xl bg-primary-300' />
			<div className='h-32 w-full rounded-2xl bg-primary-300' />
		</div>
	);
};

export default LoadingSkeleton;
