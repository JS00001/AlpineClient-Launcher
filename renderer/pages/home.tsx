import React from 'react';
import { NextPage } from 'next';

import useHomePage from '@/hooks/useHomePage';
import useChangelogs from '@/hooks/useChangelogs';

import Error from '@/components/shared/Error';
import Layout from '@/components/shared/Layout';
import Changelogs from '@/components/Home/Changelogs';
import LoadingSkeleton from '@/components/Home/LoadingSkeleton';
import DetailedChangelog from '@/components/Home/DetailedChangelog';

const Home: NextPage = () => {
	const [homePage] = useHomePage();
	const { data, error } = useChangelogs();

	if (error)
		return (
			<Layout activeItem='/partners'>
				<Error />
			</Layout>
		);

	if (!data)
		return (
			<Layout activeItem='/home'>
				<LoadingSkeleton />
			</Layout>
		);

	return (
		<Layout activeItem='/home'>
			{!homePage && <Changelogs changelogEntries={data} />}
			{homePage && <DetailedChangelog changelog={homePage} />}
		</Layout>
	);
};

export default Home;
