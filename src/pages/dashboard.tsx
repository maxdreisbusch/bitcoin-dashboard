import React, { useMemo } from 'react';
import { Card, Grid, Group, Text, ThemeIcon, Title } from '@mantine/core';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { CurrencyBitcoin } from 'tabler-icons-react';
import { getBlockchainTicker } from '../api/blockchain';
import { CurrencyOverview } from '../components/currencyOverview/currencyOverview';
import { myBitcoinsAtom } from '../recoil/bitcoin';

export const DashboardPage: React.FunctionComponent = () => {
	const myBitcoins = useRecoilValue(myBitcoinsAtom);
	const { data } = useQuery('bitcoin/ticker', getBlockchainTicker);

	const myBitcoinsInEUR = useMemo(() => {
		if (data && myBitcoins) {
			const btcInEur = data.EUR.sell;
			return btcInEur * myBitcoins;
		}
		return undefined;
	}, [myBitcoins, data]);

	return (
		<Grid>
			<Grid.Col xs={12} lg={3}>
				<Card radius='sm' shadow='sm'>
					<Group direction='column' position='center'>
						<ThemeIcon size={90} variant='gradient'>
							<CurrencyBitcoin size='70' />
						</ThemeIcon>
						<Group direction='column' spacing={0} position='center'>
							<Group spacing={0}>
								<Text size='xl'>{myBitcoins}</Text>
								<CurrencyBitcoin size={25} />
							</Group>
							<Title order={2}>{myBitcoinsInEUR?.toLocaleString()} €</Title>
						</Group>
					</Group>
				</Card>
			</Grid.Col>
			<Grid.Col xs={12} lg={9}>
				<CurrencyOverview />
			</Grid.Col>
		</Grid>
	);
};
