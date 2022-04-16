import React, { useCallback } from 'react';
import {
	Avatar,
	Button,
	Card,
	Container,
	Divider,
	Group,
	Text,
	Title,
} from '@mantine/core';
import { NumberInput } from '@mantine/core';
import { LocalStorage } from '../constants/localStorage';
import { useRecoilState } from 'recoil';
import { myBitcoinsAtom } from '../recoil/bitcoin';
import { MyWallets } from '../components/wallet/myWallets';

export const MyProfilePage: React.FunctionComponent = () => {
	const [myBitcoins, setMyBitcoins] = useRecoilState(myBitcoinsAtom);

	const saveAmount = useCallback(() => {
		localStorage.setItem(LocalStorage.myBitcoins, JSON.stringify(myBitcoins));
	}, [myBitcoins]);

	return (
		<>
			<Container size='xs'>
				<Card radius='sm' shadow='sm' p='lg'>
					<Group direction='row' position='center'>
						<Avatar size={120} radius='xl' color='blue' />
						<Group direction='column' spacing='sm'>
							<Title order={2}>Max Dreisbusch</Title>
							<Text color='dimmed'>max.dreisbusch@gmx.de</Text>
						</Group>
					</Group>
					<Divider my='xl' />
					<Group direction='column'>
						<NumberInput
							label='Mein Bitcoinvermögen'
							placeholder='Bitte Betrag eingeben'
							value={myBitcoins}
							onChange={setMyBitcoins}
							radius='sm'
							size='md'
							hideControls
							style={{ alignSelf: 'stretch' }}
						/>
						<Button
							size='md'
							radius='sm'
							color='green'
							style={{ alignSelf: 'stretch' }}
							onClick={saveAmount}>
							Speichern
						</Button>
					</Group>
				</Card>
			</Container>
			<MyWallets />
		</>
	);
};
