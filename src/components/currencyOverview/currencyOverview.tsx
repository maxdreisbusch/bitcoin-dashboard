import React, { useEffect, useState } from 'react';
import { Chip, Chips, Grid, Skeleton } from '@mantine/core';
import { useQuery } from 'react-query';
import { values } from 'lodash';
import { getBlockchainTicker } from '../../api/blockchain';
import { LocalStorage } from '../../constants/localStorage';
import { BlockchainTickerCurrency } from '../../types/blockchainApi';
import { CurrencyCard } from './currencyCard';

export const CurrencyOverview: React.FunctionComponent = () => {
	const [currencies, setCurrencies] = useState<string[]>(['EUR']);

	const { data } = useQuery('bitcoin/ticker', getBlockchainTicker, {
		refetchIntervalInBackground: true,
		refetchInterval: 60000,
	});

	useEffect(() => {
		const data = localStorage.getItem(LocalStorage.currencies);
		if (data) {
			setCurrencies(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		const saveData = JSON.stringify(currencies);
		localStorage.setItem(LocalStorage.currencies, saveData);
	}, [currencies]);

	return (
		<>
			{data ? (
				<Chips
					variant='filled'
					size='sm'
					value={currencies}
					onChange={setCurrencies}
					multiple>
					{values(data).map((item: BlockchainTickerCurrency) => (
						<Chip value={item.symbol} key={item.symbol}>
							{item.symbol}
						</Chip>
					))}
				</Chips>
			) : (
				<>
					<Skeleton height={8} mt={6} radius='sm' />
					<Skeleton height={8} mt={6} width='70%' radius='sm' />
				</>
			)}

			{data ? (
				<Grid gutter={20} mt='md'>
					{currencies.map((symbol: string) => (
						<Grid.Col sm={12} md={6} lg={4} xl={3} key={symbol}>
							<CurrencyCard data={data[symbol]} />
						</Grid.Col>
					))}
				</Grid>
			) : (
				<>
					<Skeleton height={8} mt={6} radius='sm' />
					<Skeleton height={8} mt={6} width='70%' radius='sm' />
				</>
			)}
		</>
	);
};
