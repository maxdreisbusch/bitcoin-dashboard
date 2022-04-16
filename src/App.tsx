import React from 'react';
import { AppShell } from '@mantine/core';
import { Navbar } from './components/navbar/navbar';
import { DashboardPage } from './pages/dashboard';
import { BitcoinDetailsPage } from './pages/bitcoinDetails';
import { BitcoinCalculatorPage } from './pages/bitcoinCalculator';
import { Route, Routes } from 'react-router-dom';
import { BitcoinDiagramPage } from './pages/bitcoinDiagram';
import { MyProfilePage } from './pages/myProfile';
import { NavigationRoutes } from './constants/navigation';
import { Header } from './components/header/header';

export const App: React.FunctionComponent = () => {
	return (
		<AppShell
			padding='md'
			fixed
			navbar={<Navbar />}
			header={<Header />}
			styles={(theme) => ({
				main: {
					backgroundColor: theme.colors.gray[0],
				},
			})}>
			<Routes>
				<Route path={NavigationRoutes.home} element={<DashboardPage />} />
				<Route
					path={NavigationRoutes.details}
					element={<BitcoinDetailsPage />}
				/>
				<Route
					path={NavigationRoutes.calculator}
					element={<BitcoinCalculatorPage />}
				/>
				<Route
					path={NavigationRoutes.diagram}
					element={<BitcoinDiagramPage />}
				/>
				<Route path={NavigationRoutes.me} element={<MyProfilePage />} />
			</Routes>
		</AppShell>
	);
};
