import React from 'react';
import { Grid } from '@mantine/core';
import { DetailCard } from '../components/detailCard/detailCard';

export const BitcoinDetailsPage: React.FunctionComponent = () => (
	<Grid gutter={20}>
		<Grid.Col sm={12} md={6} lg={4} xl={3}>
			<DetailCard title='Marktkapitalisierung' endpoint='marketcap' />
		</Grid.Col>
		<Grid.Col sm={12} md={6} lg={4} xl={3}>
			<DetailCard title='Anzahl der Bitcoins' endpoint='totalbc' />
		</Grid.Col>
		<Grid.Col sm={12} md={6} lg={4} xl={3}>
			<DetailCard title='Transaktionen (24h)' endpoint='24hrtransactioncount' />
		</Grid.Col>

		<Grid.Col sm={12} md={6} lg={4} xl={3}>
			<DetailCard title='gesendete Bitcoins (24h)' endpoint='24hrbtcsent' />
		</Grid.Col>
		<Grid.Col sm={12} md={6} lg={4} xl={3}>
			<DetailCard title='Aktuelle Hashrate' endpoint='hashrate' />
		</Grid.Col>
		<Grid.Col sm={12} md={6} lg={4} xl={3}>
			<DetailCard
				title='Aktueller Schwierigkeitsgrad'
				endpoint='getdifficulty'
			/>
		</Grid.Col>
	</Grid>
);
