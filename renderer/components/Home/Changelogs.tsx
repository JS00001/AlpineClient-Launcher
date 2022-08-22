import { getFileUrl } from '@/api';
import useHomePage from '@/hooks/useHomePage';
import { useTime } from '@/hooks/useTime';
import { getTimeSince } from '@/lib/dateUtil';

// Newest changelog is displayed first, and takes up both columns.
const NewestChangelog: React.FC<{ changelog: Changelog }> = ({ changelog }) => {
	const [_, setHomePage] = useHomePage();
	const time = useTime(changelog.attributes.createdAt);

	const handleClick = () => {
		setHomePage(changelog);
	};

	return (
		<div className='flex  gap-x-5 rounded-2xl bg-primary-300 p-5'>
			<div className='h-48 w-48 overflow-hidden rounded-xl bg-primary-200'>
				<img
					src={getFileUrl(changelog.attributes.thumbnail)}
					className='h-full max-w-fit rounded-xl'
				/>
			</div>
			<div className=' flex-1'>
				<div className='mb-5 flex items-center justify-between'>
					<h1 className='text-lg text-primary-100'>{time}</h1>
					<h1 className='text-2xl font-medium uppercase text-white'>
						{changelog.attributes.title}
					</h1>
				</div>
				<p className='lineclamp-4 overflow-hidden text-ellipsis text-white'>
					{changelog.attributes.description}
				</p>
				<div className='flex justify-end'>
					<button
						className='mt-5 rounded-lg bg-primary-200 py-2 px-8 text-primary-100 hover:bg-secondary-100 hover:text-white'
						onClick={handleClick}
					>
						Read More...
					</button>
				</div>
			</div>
		</div>
	);
};

// Older changelogs are displayed in columns with 2 changelogs per column
const OlderChangelog: React.FC<{ changelog: Changelog }> = ({ changelog }) => {
	const [_, setHomePage] = useHomePage();
	const time = useTime(changelog.attributes.createdAt);

	const handleClick = () => {
		setHomePage(changelog);
	};

	return (
		<div className='rounded-2xl bg-primary-300 p-5'>
			<div className='mb-5 flex gap-x-5'>
				<div className='h-28 w-28 overflow-hidden rounded-xl bg-primary-200'>
					<img
						src={getFileUrl(changelog.attributes.thumbnail)}
						className='h-full max-w-fit rounded-xl'
					/>
				</div>
				<div className='flex-1 justify-end text-right'>
					<h1 className='text-xl font-medium uppercase text-white'>{changelog.attributes.title}</h1>
					<h1 className='text-base text-primary-100'>{time}</h1>
				</div>
			</div>
			<p className='lineclamp-4 overflow-hidden text-ellipsis text-white'>
				{changelog.attributes.description}
			</p>
			<div className='flex justify-end'>
				<button
					className='mt-5 rounded-lg bg-primary-200 py-2 px-8 text-primary-100 hover:bg-secondary-100 hover:text-white'
					onClick={handleClick}
				>
					Read More...
				</button>
			</div>
		</div>
	);
};

const Changelogs: React.FC<{ changelogEntries: Changelog[] }> = ({ changelogEntries }) => {
	if (changelogEntries.length === 0) {
		return (
			<div className='flex h-full w-full flex-col items-center justify-center'>
				<img src='/logo.png' />
				<h1 className='mt-5 text-2xl font-semibold text-gray-300'>NO CHANGELOGS</h1>
			</div>
		);
	}

	return (
		<>
			{/* Show the newest changelog at the top, with a bigger card */}
			<NewestChangelog changelog={changelogEntries[0]} />

			{/* Show the older changelogs below the newest one, in columns of 2 */}
			<div className='mt-8 grid grid-cols-2 gap-x-8 gap-y-8'>
				{changelogEntries.slice(1).map((changelog, index) => (
					<OlderChangelog key={index} changelog={changelog} />
				))}
			</div>
		</>
	);
};

export default Changelogs;
