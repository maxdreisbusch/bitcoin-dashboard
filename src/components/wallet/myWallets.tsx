import React, { useCallback, useEffect, useState } from 'react';
import { Button, Center, Grid, Title } from '@mantine/core';
import { Plus } from 'tabler-icons-react';
import { MyWallet } from '../../types/myWallet';
import { EditWalletModal } from './editWallet';
import { Wallet } from './wallet';
import { useRecoilValue } from 'recoil';
import { myWalletsAtom } from '../../recoil/bitcoin';
import { values } from 'lodash';
import { LocalStorage } from '../../constants/localStorage';

export const MyWallets: React.FunctionComponent = () => {
	const myWallets = useRecoilValue(myWalletsAtom);
	const [editData, setEditData] = useState<MyWallet | undefined>(undefined);
	const [isNewOpen, setIsNewOpen] = useState(false);

	const closeModal = useCallback(() => {
		setIsNewOpen(false);
		setEditData(undefined);
	}, [isNewOpen]);

	useEffect(() => {
		localStorage.setItem(LocalStorage.myWallets, JSON.stringify(myWallets));
	}, [myWallets]);

	return (
		<>
			<EditWalletModal
				open={!!editData || isNewOpen}
				closeModal={closeModal}
				isNew={isNewOpen}
				data={editData}
			/>
			<Grid mt='xl'>
				<Grid.Col xs={12}>
					<Title order={2} align='center'>
						Meine Wallets
					</Title>
				</Grid.Col>
				<Grid.Col xs={12} sm={6} lg={3}>
					{values(myWallets).map((item) => (
						<Wallet data={item} openEdit={() => setEditData(item)} />
					))}
				</Grid.Col>
				<Grid.Col xs={12} sm={6} lg={3}>
					<Center>
						<Button size='xl' onClick={() => setIsNewOpen(true)}>
							<Plus size={40} />
						</Button>
					</Center>
				</Grid.Col>
			</Grid>
		</>
	);
};
