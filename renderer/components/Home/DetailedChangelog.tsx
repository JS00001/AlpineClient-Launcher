import Markdown from '../shared/Markdown';
import useHomePage from '@/hooks/useHomePage';
import { getTimeSince } from '@/lib/dateUtil';
import { getFileUrl } from '@/api';
import { useTime } from '@/hooks/useTime';

const ChangelogSection: React.FC<{ section: ChangelogSection }> = ({ section }) => {
	return (
		<div className='my-16 rounded-lg bg-primary-300 p-8'>
			<h2 className='text-2xl font-semibold text-white'>{section.title}</h2>
			<Markdown>{section.details}</Markdown>
		</div>
	);
};

export interface DetailedChangelogProps {
	changelog: Changelog;
}

const DetailedChangelog: React.FC<DetailedChangelogProps> = ({ changelog }) => {
	const [_, setHomePage] = useHomePage();
	const time = useTime(changelog.attributes.createdAt);

	const handleClick = () => {
		setHomePage(null);
	};

	return (
		<>
			<button
				className='mb-5 rounded-lg bg-primary-200 py-2 px-8 text-primary-100 hover:bg-secondary-100 hover:text-white'
				onClick={handleClick}
			>
				Return Home
			</button>

			<h2 className='text-xl font-medium text-gray-300'>{time}</h2>
			<h1 className='my-1 text-5xl font-bold text-white'>{changelog.attributes.title}</h1>
			<h2 className='text-xl font-medium text-gray-300'>{changelog.attributes.description}</h2>

			<div className='my-5 w-full'>
				<img src={getFileUrl(changelog.attributes.thumbnail)} className='h-full rounded-xl' />
			</div>

			{changelog.attributes.sections.map((section, index) => (
				<ChangelogSection section={section} key={index} />
			))}
		</>
	);
};

export default DetailedChangelog;
