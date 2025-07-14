'use client';

import { store } from '@/store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { Provider } from 'react-redux';

export function Providers({ children }: { children: ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						retry: 1,
						refetchOnWindowFocus: false,
					},
				},
			}),
	);

	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			<Toaster
					position="top-right"
					toastOptions={
						{
							success: {
								duration: 3000,
							},
							error: {
								duration: 5000,
							}
						}
					}
				/>
		</Provider>
	);
}
