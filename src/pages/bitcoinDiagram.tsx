import React from 'react';
import { Grid } from '@mantine/core';
import { DiagramCard } from '../components/diagramCard/diagramCard';

export const BitcoinDiagramPage: React.FunctionComponent = () => (
	<Grid gutter={20}>
		<Grid.Col sm={12}>
			<DiagramCard
				title='Marktwert (USD)'
				subtitle='der vergangenen 12 Monate'
				apiEndpoint='market-price'
				timespan='12months'
			/>
		</Grid.Col>
		<Grid.Col sm={12} md={12} lg={6} xl={6}>
			<DiagramCard
				title='TPS-Durchscnitt'
				subtitle='der vergangenen 7 Tage'
				apiEndpoint='transactions-per-second'
				showTime
				timespan='1week'
			/>
		</Grid.Col>
		<Grid.Col sm={12} md={12} lg={6} xl={6}>
			<DiagramCard
				title='Größe der Blockchain (MB)'
				subtitle='seit Beginn'
				apiEndpoint='blocks-size'
				timespan='all'
			/>
		</Grid.Col>
	</Grid>
);
