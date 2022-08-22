const LoadingSkeleton: React.FC = () => {
	return (
		<>
			<div className=' mb-5 h-60 w-full animate-pulse rounded-2xl bg-primary-300' />
			<div className='grid grid-cols-2 gap-x-5 '>
				<div className='h-60 w-full animate-pulse rounded-2xl bg-primary-300' />
				<div className='h-60 w-full animate-pulse rounded-2xl bg-primary-300' />
			</div>
		</>
	);
};

export default LoadingSkeleton;
