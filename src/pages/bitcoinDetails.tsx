import React from 'react';
import { Grid } from '@mantine/core';
import { DetailCard } from '../components/detailCard/detailCard';

const displayDetails = [
	{ title: 'Marktkapitalisierung', endpoint: 'marketcap' },
	{ title: 'Anzahl der Bitcoins', endpoint: 'totalbc' },
	{ title: 'Transaktionen (24h)', endpoint: '24hrtransactioncount' },
	{ title: 'gesendete Bitcoins (24h)', endpoint: '24hrbtcsent' },
	{ title: 'Aktuelle Hashrate', endpoint: 'hashrate' },
	{ title: 'Aktueller Schwierigkeitsgrad', endpoint: 'getdifficulty' },
];

export const BitcoinDetailsPage: React.FunctionComponent = () => (
	<Grid gutter={20}>
		{displayDetails.map((item, index) => (
			<Grid.Col sm={12} md={6} lg={4} xl={3} key={index}>
				<DetailCard {...item} />
			</Grid.Col>
		))}
	</Grid>
);
