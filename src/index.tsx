import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { App } from './app';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

const container = document.getElementById('root');
render(
	<React.StrictMode>
		<RecoilRoot>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<MantineProvider>
						<App />
					</MantineProvider>
				</QueryClientProvider>
			</BrowserRouter>
		</RecoilRoot>
	</React.StrictMode>,
	container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
