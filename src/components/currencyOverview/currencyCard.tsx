import React from 'react';
import { Badge, Card, Group, Text, ThemeIcon } from '@mantine/core';
import { StepInto, StepOut } from 'tabler-icons-react';
import { BlockchainTickerCurrency } from '../../types/blockchainApi';

interface CurrencyCardProps {
	data: BlockchainTickerCurrency;
}

export const CurrencyCard: React.FunctionComponent<CurrencyCardProps> = (
	props: CurrencyCardProps
) => (
	<Card radius='sm' shadow='sm' p='lg'>
		<Group direction='column' position='center'>
			<ThemeIcon
				size={90}
				variant='gradient'
				gradient={{ from: 'orange', to: 'red' }}>
				<Text size='xl'>{props.data.symbol}</Text>
			</ThemeIcon>

			<Group spacing='md' direction='column' position='center'>
				<Badge color='green' variant='light' size='xl'>
					<StepInto size='15' />
					{props.data.buy}
				</Badge>

				<Badge color='pink' variant='light' size='xl'>
					<StepOut size='15' />
					{props.data.sell}
				</Badge>
			</Group>
		</Group>
	</Card>
);
