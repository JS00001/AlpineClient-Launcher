import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { QueryClientProvider } from '@tanstack/react-query';

import '../styles/globals.css';
import store from '@/store';
import queryClient from '@/lib/queryClient';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<Head>
					<title>Alpine Client</title>
				</Head>
				<Component {...pageProps} />
			</Provider>
		</QueryClientProvider>
	);
}

export default MyApp;
