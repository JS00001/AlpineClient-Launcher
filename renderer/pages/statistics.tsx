import Layout from '@/components/shared/Layout';
import Chart from '@/components/Statistics/Chart';
import { NextPage } from 'next';

const Statistics: NextPage = () => {
	return (
		<Layout activeItem='/statistics'>
			<div className='rounded-2xl bg-primary-300 p-5'>
				<Chart />
			</div>
		</Layout>
	);
};

export default Statistics;
