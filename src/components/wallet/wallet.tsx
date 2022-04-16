import React from 'react';
import { Card, Group, Text, ThemeIcon, Title } from '@mantine/core';
import { CurrencyBitcoin, Refresh } from 'tabler-icons-react';
import { MyWallet } from '../../types/myWallet';

interface WalletProps {
	data: MyWallet;
	openEdit: () => void;
}

export const Wallet: React.FunctionComponent<WalletProps> = (
	props: WalletProps
) => {
	return (
		<Card onClick={() => props.openEdit()} shadow='sm' radius='sm'>
			<ThemeIcon style={{ position: 'absolute', top: 0, right: 0 }}>
				<Refresh />
			</ThemeIcon>
			<Title order={3}>{props.data.title}</Title>
			<Group spacing={0}>
				<Text size='xl'>{props.data.balance}</Text>
				<CurrencyBitcoin size={25} />
			</Group>
		</Card>
	);
};
