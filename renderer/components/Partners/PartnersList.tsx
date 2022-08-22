import { getFileUrl } from '@/api';
import { convertToAllowedVersions } from '@/lib/versionUtil';

const Partner: React.FC<{ partner: Partner }> = ({ partner }) => {
	return (
		<div className='flex justify-between rounded-2xl bg-primary-300 p-5'>
			<div className='flex gap-x-5'>
				<div className='h-24 w-24 rounded-xl bg-primary-200'>
					<img src={getFileUrl(partner.attributes.logo)} className=' h-full w-full rounded-xl' />
				</div>
				<div className='flex flex-col justify-center'>
					<h1 className='text-xl font-semibold uppercase text-white'>{partner.attributes.title}</h1>
					<h2 className='text-lg text-primary-100'>{partner.attributes.ip}</h2>
					<p className='text-sm text-primary-100'>
						{convertToAllowedVersions(partner.attributes.versions)}
					</p>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center'>
				<button className='mb-3 rounded-xl bg-primary-200 py-3 px-6 font-semibold text-primary-100 hover:bg-secondary-100 hover:text-white'>
					Launch & Join
				</button>
				<p className=' text-sm text-white'>400 players online</p>
			</div>
		</div>
	);
};

export interface PartnersListProps {
	partnerEntries: Partner[];
}

const PartnersList: React.FC<PartnersListProps> = ({ partnerEntries }) => {
	return (
		<div className='flex flex-col gap-y-8'>
			{partnerEntries.map((partner, index) => (
				<Partner key={index} partner={partner} />
			))}
		</div>
	);
};

export default PartnersList;
