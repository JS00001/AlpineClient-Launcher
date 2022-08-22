import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchApi, getStrapiUrl } from '@/api';

const useChangelogs = () => {
	const [modifiedData, setModifiedData] = useState<any>();
	const query = useQuery(
		['changelogEntries'],
		async () =>
			fetchApi('/changelogs', {
				populate: '*',
			}),
		{
			onSuccess({ data }) {
				const dataCopy = JSON.parse(JSON.stringify(data));

				dataCopy.reverse();

				dataCopy.forEach((changelog) => {
					changelog.attributes.sections.forEach((section) => {
						section.details = section.details.replace(/!\[(.*?)\]\((.*?)\)/g, (match, p1, p2) => {
							return `![${p1}](${getStrapiUrl(p2)})`;
						});
					});
				});

				setModifiedData(dataCopy);
			},
		}
	);

	return { data: modifiedData, error: query.error };
};

export default useChangelogs;
