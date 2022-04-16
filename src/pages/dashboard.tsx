import React from 'react';
import { Grid } from '@mantine/core';
import { CurrencyOverview } from '../components/currencyOverview/currencyOverview';
import { MyBitcoins } from '../components/myBitcoins/myBitcoins';

export const DashboardPage: React.FunctionComponent = () => (
	<Grid>
		<Grid.Col xs={12} lg={3}>
			<MyBitcoins />
		</Grid.Col>
		<Grid.Col xs={12} lg={9}>
			<CurrencyOverview />
		</Grid.Col>
	</Grid>
);
