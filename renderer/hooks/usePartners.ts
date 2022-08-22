import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchApi } from '@/api';

const usePartners = () => {
	const [modifiedData, setModifiedData] = useState<any>();

	const query = useQuery(
		['partnerEntries'],
		async () =>
			fetchApi('/partners', {
				populate: '*',
			}),
		{
			onSuccess({ data }) {
				const dataCopy = JSON.parse(JSON.stringify(data));

				dataCopy.reverse();

				setModifiedData(dataCopy);
			},
		}
	);

	return { data: modifiedData, error: query.error };
};

export default usePartners;
