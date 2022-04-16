import React from 'react';
import { Group, Text, Header as MantineHeader } from '@mantine/core';
import { CurrencyBitcoin } from 'tabler-icons-react';

export const Header: React.FunctionComponent = () => (
	<MantineHeader height={50} p='xs'>
		<Group spacing={0}>
			<CurrencyBitcoin size={30} />
			<Text size='xl'>bitcoinDashboard</Text>
		</Group>
	</MantineHeader>
);
