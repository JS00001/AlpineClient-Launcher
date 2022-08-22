import qs from 'qs';
import axios from 'axios';

const BASE_URL = 'https://content.in-staging.space';

export const getStrapiUrl = (path: string) => `${BASE_URL}${path}`;

export const getFileUrl = (file: File) => `${BASE_URL}${file.data.attributes.url}`;

export const fetchApi = async (path: string, urlParams: any = {}, options: any = {}) => {
	const mergedOptions = {
		headers: {
			'Content-Type': 'application/json',
		},
		...options,
	};

	const queryString = qs.stringify(urlParams);
	const url = `${getStrapiUrl(`/api${path}`)}${queryString ? `?${queryString}` : ''}`;

	const response = await axios.get(url, mergedOptions);

	return response.data;
};
