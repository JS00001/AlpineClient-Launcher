import { NextPage } from 'next';

import usePartners from '@/hooks/usePartners';

import Error from '@/components/shared/Error';
import Layout from '@/components/shared/Layout';
import PartnersList from '@/components/Partners/PartnersList';
import LoadingSkeleton from '@/components/Partners/LoadingSkeleton';

const Partners: NextPage = () => {
	const { data, error } = usePartners();

	if (error)
		return (
			<Layout activeItem='/partners'>
				<Error />
			</Layout>
		);

	if (!data)
		return (
			<Layout activeItem='/partners'>
				<LoadingSkeleton />
			</Layout>
		);

	return (
		<Layout activeItem='/partners'>
			<PartnersList partnerEntries={data} />
		</Layout>
	);
};

export default Partners;
